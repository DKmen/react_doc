import React from "react";


export default class ChildCompoents extends React.Component {
    render() {
        console.log('Child Component')
        return (
            <>
                <h2>Compoents</h2>
                <h1>
                    {this.props.name}
                </h1>
            </>
        )
    }
}