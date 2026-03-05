"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen flex-col items-center justify-center bg-[#F4F4F5] p-6 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-100 shadow-sm border border-red-200">
                        <svg
                            className="h-10 w-10 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Something went wrong
                    </h1>
                    <p className="mt-3 max-w-sm text-sm text-gray-500">
                        An unexpected error occurred in the application. Please try refreshing the page or navigating back to safety.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
                        <Link href="/">
                            <Button variant="secondary">Go to Homepage</Button>
                        </Link>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
