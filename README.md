A simple wrapper around the 'react-spinners' component ... when the spinner is displayed, an opacity is applied to any children components.

## Installation

npm install --save spinner-container

## Importing

import SpinnerContainer from 'spinner-container'

## Usage
```
class MyExample extends Component {
    const spinnerColor = '#ABC';

    constructor(props) {
        super(props)
        this.state  = { loading: false }
    }

    render() {
        return(
            <SpinnerContainer
                loading={this.state.loading}
                color={spinnerColor} >
                <div>Child Content here</div>
            </SpinnerContainer>
        );
    }
}
```
## Demo

Download the spinner-container library
Change to the 'spinner-container' directory
Start the the server (npm start)
Open browser to http://localhost:3000/
