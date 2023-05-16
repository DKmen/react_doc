import React from "react";

export default React.memo(
    function AgeButton({ ageFun }) {
        console.log(" AgeButton");
        return (
            <button onClick={ageFun}>Increase Age</button>
        )
    }
)