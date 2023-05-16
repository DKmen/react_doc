import React from "react";

import MemoCompoents from "./MemoCompoents";

export default class MemoParentCompoents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: "Reg Component",
            PureCompoent: "Pure Compoents"
        }
    }

    render() {
        console.log("parent compoents");
        return (
            <>
                <h1>This is Parent Compoents</h1>
                <MemoCompoents name={this.state.PureCompoent} />
            </>
        )
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                component: "Reg Component",
                PureCompoent: "Pure Compoents"
            })
        }, 1000)
    }
}