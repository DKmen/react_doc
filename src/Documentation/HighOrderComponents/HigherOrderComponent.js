import React from "react";

export default function CountFunctionality(Elements) {
    class NewElement extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 1
            };
        }

        addCount = () => {
            this.setState((pre) => ({
                count: pre.count + 1
            }));
        }

        render() {
            return (
                <>
                    <Elements count={this.state.count} addCount={this.addCount} {...this.props} />
                </>
            );
        }
    }

    return NewElement;
}