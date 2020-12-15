import React, { Component } from 'react';

//takes function (importComponent) as parameter
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent() //execute the given function
                .then(cmp => { // function gives us promise
                    //we extract the component we want to load
                    this.setState({component: cmp.default});
                });
        }
        //render the extracted component
        render () {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;