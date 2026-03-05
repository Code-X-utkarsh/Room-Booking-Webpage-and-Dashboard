import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = "", ...props }, ref) => {
        return (
            <div className="flex w-full flex-col gap-1.5">
                {label && (
                    <label className="text-[13px] font-semibold text-gray-700">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm font-medium text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:ring-1 ${error
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-gray-900 focus:ring-gray-900 hover:border-gray-300"
                        } ${className} disabled:cursor-not-allowed disabled:opacity-50`}
                    {...props}
                />
                {error && (
                    <span className="text-xs font-medium text-red-500">{error}</span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
