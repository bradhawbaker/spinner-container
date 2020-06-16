# spinner-container

## Overview

A simple wrapper around the 'react-spinners' component ... when the spinner is displayed, an opacity is applied to any children components.

[CHANGELOG.md](CHANGELOG.md) contains Release Notes for this package.

[CONTRIBUTING.md](CONTRIBUTING.md) contains guidelines on how to help improve this package.


## Installation

```bash
npm install --save spinner-container
```

## Importing

```js
import SpinnerContainer from 'spinner-container'
```

## Usage

```jsx
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
Change to the `spinner-container` directory
Start the the server (`npm start`)
Open browser to <http://localhost:3000/>
