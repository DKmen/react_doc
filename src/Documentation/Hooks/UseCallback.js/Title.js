import React from "react";

export default React.memo(
    function Title({ title }) {
        console.log(title + " Title");
        return (
            <h1>{title}</h1>
        )
    }
)