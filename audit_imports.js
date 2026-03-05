const fs = require('fs');
const path = require('path');

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'];
const directoriesToScan = ['app', 'components', 'hooks', 'lib', 'utils', 'services', 'styles', 'assets', 'config', 'types', 'context'];

const root = __dirname;
const errors = [];

function checkFileExists(importPath, currentFilePath) {
    // Handle absolute aliases
    let resolvedPath = importPath;
    if (importPath.startsWith('@/')) {
        resolvedPath = path.join(root, importPath.substring(2));
    } else if (importPath.startsWith('.')) {
        resolvedPath = path.join(path.dirname(currentFilePath), importPath);
    } else {
        // node_module or built-in, skip
        return true;
    }

    // If path doesn't have extension, check all possible extensions + folder index
    if (path.extname(resolvedPath) === '') {
        const possiblePaths = [
            resolvedPath,
            ...extensions.map(ext => `${resolvedPath}${ext}`),
            ...extensions.map(ext => path.join(resolvedPath, `index${ext}`))
        ];
        return possiblePaths.some(p => fs.existsSync(p));
    }

    return fs.existsSync(resolvedPath);
}

function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            scanDir(fullPath);
        } else if (extensions.includes(path.extname(fullPath))) {
            analyzeFile(fullPath);
        }
    }
}

function analyzeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Simple regex for import X from 'Y' or import 'Y'
    const importRegex = /import(?:[\s.*$a-zA-Z0-9_{},]+from)?\s+['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (!checkFileExists(importPath, filePath)) {
            errors.push(`Broken import in ${path.relative(root, filePath)}: ${importPath}`);
        }
    }

    // Also check dynamic imports
    const dynamicImportRegex = /import\(['"]([^'"]+)['"]\)/g;
    while ((match = dynamicImportRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (!checkFileExists(importPath, filePath)) {
            errors.push(`Broken dynamic import in ${path.relative(root, filePath)}: ${importPath}`);
        }
    }
}

for (const dir of directoriesToScan) {
    scanDir(path.join(root, dir));
}

if (errors.length > 0) {
    console.log('--- BROKEN IMPORTS DETECTED ---');
    errors.forEach(e => console.log(e));
    process.exit(1);
} else {
    console.log('No broken imports found.');
    process.exit(0);
}
