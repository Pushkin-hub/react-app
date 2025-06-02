import react from "react";
import { useLocation, useParams } from "react-router-dom";

const TestComponent = function(props) {
    const location = useLocation();
    const queryParams = new URLSearchParams (location.search);
    const param1 = queryParams.get ('color');
    const param2 = queryParams.get ('year');
    const { id } = useParams ();


    console.log (location, queryParams, param1, param2, id)


    return (
        <div>
            queryString
        </div>
    )
}
export default TestComponent;