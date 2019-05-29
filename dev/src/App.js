import React, { Component } from 'react';
import SpinnerContainer from '../../src/spinnerContainer/SpinnerContainer';

const COLOR_BLUE = '#009fdb';
const mainContainer = {
  textAlign: 'center'
};
const containerStyle = {
  width: '300px',
  height: '300px',
  margin: '0px auto 15px auto',
  border: 'solid 1px #000'
};
const contentStyle = {
  width: '100%',
  height: '220px',
  textAlign: 'center',
  fontSize: '50px',
  marginTop: '80px'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  onToggleLoading() {
    let loadingState = this.state.loading;
    this.setState({ loading: !loadingState });
  }

  render() {
    return (
      <div style={mainContainer}>
        <button onClick={ () => this.onToggleLoading()}>Toggle Spinner</button>
        <div style={containerStyle}>
          <SpinnerContainer
            loading={this.state.loading}
            color={COLOR_BLUE} >
            <div style={contentStyle}>Spinner Container</div>
          </SpinnerContainer>
        </div>
      </div>
    );
  }
}

export default App;
