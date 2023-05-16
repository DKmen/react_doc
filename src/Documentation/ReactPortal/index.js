import React from "react";
import ReactDOM from "react-dom";


//this use to render element into a DOM node that exists outside the DOM hierarchy of the parent component.
export default function ReactPortalComponents() {
    return ReactDOM.createPortal(
        <>
            <h1>This is portal Element</h1>
        </>,
        document.getElementById('root-portal')
    );
}