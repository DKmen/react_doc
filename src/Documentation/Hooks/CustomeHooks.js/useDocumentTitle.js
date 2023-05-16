import React, { useEffect } from "react";


//Custome hooks is same as higher order components
export default function useDocumentTitle() {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        document.title = `${count} - Title`
    }, [count]);

    return {
        count,
        setCount
    }
}