import React from "react";
import ChildRefCompoents from "./Input";


export default class ParentRefCompoents extends React.Component {
    constructor(props) {
        super(props);

        //in this way we create ref variable that assign to element which we want to access
        this.childElement = React.createRef();
    }

    handleClick() {
        this.childElement.current.inputFocus();
    }

    render() {
        return (
            <>
                {/* assign ref to element  */}
                <ChildRefCompoents ref={this.childElement} />
                <button onClick={this.handleClick.bind(this)}>Focus Input</button>
            </>
        )
    }
}