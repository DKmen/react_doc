import React from "react";
import ChildCompoents from "./Compoents";
import PureChildCompoents from "./PureComponent";


export default class ParentCompoents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: "Reg Component",
            PureCompoent: "Pure Compoents"
        }
    }

    render() {
        return (
            <>
                <h1>This is Parent Compoents</h1>
                <PureChildCompoents name={this.state.PureCompoent} />
                <ChildCompoents name={this.state.component} />
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