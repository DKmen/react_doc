import Title from "./Title";
import AgeButton from "./AgeButton";
import SalaryButton from "./SalaryButton";
import React from "react";

// This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders
export default function UseCallBackHooks() {
    const [salary, setSalary] = React.useState(5000);
    const [age, setAge] = React.useState(10);

    const incSalary = React.useCallback(() => {
        setSalary(pre => pre + 100)
    }, [])

    const incAge = React.useCallback(() => {
        setAge(pre => pre + 1)
    }, [])

    return (
        <>
            <Title title={salary} />
            <SalaryButton salFun={incSalary} />
            <Title title={age} />
            <AgeButton ageFun={incAge} />
        </>
    )
}