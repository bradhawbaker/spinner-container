import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircleSpinner } from "react-spinners-kit";
import './SpinnerContainer.css';

export default class SpinnerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.setState({
      loading: this.props.loading
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.loading !== prevProps.loading) {
      this.setState({
        loading: this.props.loading
      });
    }
  }

  render() {
    // if loading, show content as busy (ex: grey out)
    const spinnerContentClass = this.props.loading ? 'spinner-content spinner-content-hidden' : 'spinner-content';
    return (
      <div className='spinner-container'>
        <div className='spinner'>
          <CircleSpinner color={this.props.color} loading={this.state.loading} />
        </div>
        <div className={spinnerContentClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

SpinnerContainer.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.element
};

SpinnerContainer.defaultProps = {
  color: "#000",
  loading: true
}