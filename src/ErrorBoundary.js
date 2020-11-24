import React,{Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: '',
      errorInfo: '',
      hasError: false };
  }

  static getDerivedStateFromError(error) {
     return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({ error, errorInfo });
    }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <span>{this.state.error.toString()}</span>
        </div>
      )
        
     
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;