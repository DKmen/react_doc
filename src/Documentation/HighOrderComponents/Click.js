import CountFunctionality from "./HigherOrderComponent";

export default CountFunctionality(({ count, addCount }) => {
    return (
        <>
            <button onClick={addCount}>click {count} time</button>
        </>
    )
})