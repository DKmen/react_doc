import React from "react";


export default class PureChildCompoents extends React.PureComponent {
    render() {
        console.log('Child Pure Component')
        return (
            <>
                <h2>Pure Compoents</h2>
                <h1>
                    {this.props.name}
                </h1>
            </>
        )
    }
}