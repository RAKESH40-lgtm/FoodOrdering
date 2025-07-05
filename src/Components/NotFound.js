import { useRouteError } from "react-router"

const NotFound=()=>{
    const {statusText}=useRouteError()
    return <>
        <h1>{statusText}</h1>
    </>
}
export default NotFound