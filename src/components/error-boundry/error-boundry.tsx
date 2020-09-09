import React, { Component } from 'react';

export default class ErrorBoundry extends Component<any, any> {

    componentDidMount() {
        this.setState({
            hasError: false
        });
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state?.hasError) {
            return (<h1>Something wrong!</h1>);
        }

        return this.props.children;
    }
}