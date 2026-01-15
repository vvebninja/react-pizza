import { Component, type ReactNode } from 'react';

type Props = {
  FallbackComponent: (resetErrorBoundary: () => void, error: Error) => ReactNode;
  onReset?: VoidFunction;
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  resetError = () => {
    this.props.onReset?.();
    this.setState({ hasError: false, error: null });
  };

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.FallbackComponent(this.resetError, this.state.error);
    }
    return this.props.children;
  }
}
