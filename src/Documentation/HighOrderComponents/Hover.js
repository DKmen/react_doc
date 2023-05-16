import CountFunctionality from "./HigherOrderComponent";

export default CountFunctionality(({ count, addCount }) => {
    return (
        <>
            <p onMouseEnter={addCount}>hover {count} time</p>
        </>
    )
})