import React from 'react';
import ErrorIndicator from '../ErrorIndicator';

class ErrorBoundry extends React.Component {
  state = {
    error: false
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (<ErrorIndicator />);
    }

    return this.props.children;

  }
}

export default ErrorBoundry;
