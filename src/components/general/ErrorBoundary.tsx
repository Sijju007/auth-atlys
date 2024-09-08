import { Component, ErrorInfo } from 'react';
import Error from './Error';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Generally you will log the error to an error reporting service
    console.error({ hasError: this.state.hasError, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      <Error />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
