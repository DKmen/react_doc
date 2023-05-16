import React from "react"

export default function UseRefHookComponents(props) {
    const textInput = React.useRef(null);

    React.useEffect(() => {
        textInput.current.focus();
    }, [])

    return (
        <>
            <input type='text' ref={textInput} />
        </>
    )
}