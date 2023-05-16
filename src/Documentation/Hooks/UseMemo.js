import React, { useMemo } from "react";

//useCallback is cash function it's self and useMemo is cash result of function it's self
export default function UseMemoComponents(props) {
    const [countA, setCountA] = React.useState(0);
    const [countB, setCountB] = React.useState(0);

    //use memo use to cash result of function to avoid unnacacery calculation
    const even = useMemo(() => {
        let i = 0;
        while (i < 900000000) i++;
        return countA % 2 === 0
    }, [countA])

    return (
        <>
            <button onClick={() => setCountA((pre) => (pre + 1))}>Count {countA}</button>
            <span>{even ? "Even" : "Odd"}</span>
            <button onClick={() => setCountB((pre) => (pre + 1))}>Count {countB}</button>
        </>
    )
}