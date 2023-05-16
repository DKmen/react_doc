export default function ChildComponents({ name }) {
    if (name === "") {
        throw Error('Name is not a null');
    }
    return (
        <>
            <p>{name}</p>
        </>
    )
}