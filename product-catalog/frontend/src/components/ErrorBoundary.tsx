import React from 'react';

export class ErrorBoundary extends React.Component<
    { children: React.ReactNode; },
    { hasError: boolean; error: Error | null; }
> {
    constructor(props: { children: React.ReactNode; }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-4 border border-red-500 rounded-lg">
                    <h2 className="text-red-500">Something went wrong</h2>
                    <p>{this.state.error?.message}</p>
                </div>
            );
        }
        return this.props.children;
    }
}