import React from "react";

interface BoundaryProps {
  fallback?: ((props: BoundaryProps, state: BoundaryState) => React.ReactNode);
  children: React.ReactNode;
  stateTrace?: boolean;
}

interface BoundaryState {
  error: Error | null;
}

export default class Boundary extends React.Component<BoundaryProps, BoundaryState> {
  constructor(props: any) {
    super(props);

    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const {
      fallback,
      children,
      stateTrace = (process.env.NODE_ENV === "production" ? false : true),
      ...other
    } = this.props;

    if (this.state.error) {
      const defaultComponent = (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error.name}:{this.state.error.message}</p>
          <pre style={{ overflow: 'auto' }}>
            {this.state.error.stack}
          </pre>
        </div>
      )

      return fallback ? fallback({ ...other, stateTrace, children: defaultComponent }, this.state) : (defaultComponent);
    }

    return children;
  }
}