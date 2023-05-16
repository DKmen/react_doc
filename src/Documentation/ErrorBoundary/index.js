import ChildComponents from "./children";
import ErrorBoundary from "./ErrorBoundary";

export default function ParentComponentWithErrorBoundary() {
    return (
        <>
            <ErrorBoundary>
                <ChildComponents name="Drimil" />
            </ErrorBoundary>
            <ErrorBoundary>
                <ChildComponents name=""/>
            </ErrorBoundary>
        </>
    )
}