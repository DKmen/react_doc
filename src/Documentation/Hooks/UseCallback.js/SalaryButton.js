import React from "react";

export default React.memo(
    function AgeButton({ salFun }) {
        console.log(" SalaryButton");
        return (
            <button onClick={salFun}>Increase Salary</button>
        )
    }
)