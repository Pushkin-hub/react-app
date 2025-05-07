import react from "react";

const CurrentDate = function() {
    return <h2>{new Date().toTimeString()}</h2>
}
export default CurrentDate;