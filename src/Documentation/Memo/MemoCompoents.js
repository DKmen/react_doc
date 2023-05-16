import React from "react";


//React.memo is simila to pure compoents Pure Components is class base components and memo compoents is function base compoents
export default React.memo(({ name }) => {
    console.log("child compoents")
    return (
        <>
            <h1>Memo Compoents</h1>
            <h1>{name}</h1>
        </>
    )
})