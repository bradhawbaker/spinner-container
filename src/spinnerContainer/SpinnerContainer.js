import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';
import './SpinnerContainer.css';

export default class SpinnerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  render() {
    // if loading, show content as busy (ex: grey out)
    const spinnerContentClass = this.props.loading ? 'spinner-content spinner-content-hidden' : 'spinner-content';
    return (
      <div className='spinner-container'>
        <div className='spinner'>
          <ClipLoader color={this.props.color} loading={this.props.loading} />
        </div>
        <div className={spinnerContentClass}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

SpinnerContainer.propTypes = {
  loading: PropTypes.bool
};