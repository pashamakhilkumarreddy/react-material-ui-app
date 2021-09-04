import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch = (err) => {
    console.error(err);
  };

  render() {
    return <div></div>;
  }
}

ErrorBoundary.propTypes = {
  errMessage: PropTypes.string.isRequired,
};

export default ErrorBoundary;
