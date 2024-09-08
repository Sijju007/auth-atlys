import { Component, ErrorInfo, ReactNode } from 'react';
import Error from './Error';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
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
