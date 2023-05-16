import React from "react";


export default class RefCompoents extends React.Component {
    constructor(props) {
        super(props);

        //in this way we create ref variable that assign to element which we want to access
        this.element = React.createRef();
    }

    componentDidMount() {
        //access that element from dom using ref variable
        this.element.current.focus();
    }

    render() {
        return (
            <>
                {/* assign ref to element  */}
                <input ref={this.element} />
            </>
        )
    }
}