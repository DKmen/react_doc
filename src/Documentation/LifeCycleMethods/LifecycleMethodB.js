import React from "react";


export default class LifeCycleMethodsB extends React.Component {

    //When Component is make constructor method is call 
    constructor(props) {
        //when parent class constructor is call it over write this.state so after call parent constructor we access this.state
        super(props);
        this.state = {
            name: ""
        };

        console.log('LifecycleB Constructor')

        //When use
        // 1 To define Initial state
        // 2 Do not make data fetch work in constructor method
    }

    //After Constructor method getDerivedStateFromProps is call
    static getDerivedStateFromProps(props, state) {
        // getDerivedStateFromProps is a static method so we not access this inside this method
        console.log('LifecycleB getDerivedStateFromProps')
        return {
            name: props.name
        }

        //When use
        // 1 when your state is derive from props then this method is use
        // 2 Do not make data fetch worj in this method
        // 3 When you return null this mean you not change state
    }

    //After getDerivedStateFromProps is call render method is call this is compalsery method to write in class components
    render() {
        console.log('LifecycleB render')
        return (
            <>
                <h6>{this.state.name}</h6>
            </>
        )
    }

    //After render method and all child components lifecycle method is execute then this method is call
    componentDidMount(){
        //this method is access this 
        console.log('LifecycleB componentDidMount')
        this.setState({name:"I am a web devloper"});
    }

    //when props and state is change this method is call this method is accept next state and props according that value they decide component is re render or not
    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.state.name + "   " + nextState.name);
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }

    //it call before to update actual DOM this method return value is pass to componentDidUpdate
    getSnapshotBeforeUpdate(preProps,preState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null

        //When use
        //1. to store some current state information and reflact that in next state
    }

    //When component update done perfactaly then this method is call
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('LifecycleB componentDidUpdate')

        //When use
        // 1 this use to make data fetch according to state and props change
    }
}
