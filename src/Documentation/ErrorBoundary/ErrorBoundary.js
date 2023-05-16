import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    //when error is occure this method is call and in this method we reture state
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    render() {
        if (this.state.hasError) return <h1>Error is occure something is wrong</h1>
        return this.props.children
    }
}