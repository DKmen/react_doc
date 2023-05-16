import useDocumentTitle from "./useDocumentTitle"

export default function CountTitleComponents(props) {
    const counter = useDocumentTitle();
    return (
        <>
            <button onClick={() => counter.setCount(pre => (pre + 1))}>Add count</button>
        </>
    )
}