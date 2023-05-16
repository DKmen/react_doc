import React from "react"

export default function UseEffectHookComponents(props) {

    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = React.useState(0);
    //using useEffect hook we can impliment three method functionality componentDidMount , componentWillUpdate , componentDidUnmount

    //only executed one time when component is render 
    React.useEffect(() => {
        console.log("use Effect with []")
    }, []);

    //when component is re render then this method is executed 
    React.useEffect(() => {
        console.log("use Effect with")
    });

    //when the value of count is change then this method is executed 
    React.useEffect(() => {
        console.log("use Effect with [count]")
    }, [count]);

    return (
        <>
            <h1>Use Effect Example</h1>
            <button onClick={()=>setCount(2)}>count</button>
        </>
    )
}