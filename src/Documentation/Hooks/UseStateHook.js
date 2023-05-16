import React from "react"

export default function UseStateHookComponents(props) {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <button onClick={(e) => setCount((pre) => pre + 1)}>{count}</button>
        </>
    )
}