import React from 'react';
import ErrorIndicator from '../error-indicator';

class ErrorBoundary extends React.Component {
  state = {
    error: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error===true) {

      return (<ErrorIndicator />);
    }

    return this.props.children;

  }
}

export default ErrorBoundary;
