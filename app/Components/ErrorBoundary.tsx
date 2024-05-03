"use client";

import React from "react";

// Define a type for the state
interface ErrorBoundaryState {
  hasError: boolean;
}

// Define a type for the props if needed
interface ErrorBoundaryProps {
  children: React.ReactNode; // children components to be rendered
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // Define the initial state to track whether there's an error
    this.state = { hasError: false };
  }

  // Update the state to indicate an error has occurred
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Here, you can log the error to a third-party service or a console
    console.error("ErrorBoundary caught an error:", { error, errorInfo });
  }

  render() {
    // If there's an error, render a fallback UI
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, something went wrong!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Otherwise, render the child components
    return this.props.children;
  }
}

export default ErrorBoundary;
