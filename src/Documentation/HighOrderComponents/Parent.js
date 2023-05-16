import ClickComponent from "./Click";
import HoverComponent from "./Hover";

export default function HigherOrderComponentParent() {
    return (
        <>
            <ClickComponent />
            <HoverComponent />
        </>
    )
}