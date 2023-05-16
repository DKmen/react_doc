import React from "react"
import { CountReducer, initialState } from "./CountReducer";

export default function UseReducerFunction() {
    const [count, dispatch] = React.useReducer(CountReducer, initialState);

    return (
        <>
            <h1>{count.count}</h1>
            <button onClick={() => dispatch('Inc')}>Increment</button>
            <button onClick={() => dispatch('Dec')}>Decerement</button>
        </>
    )
}