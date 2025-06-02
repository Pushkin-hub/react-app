import react from "react";

const CurrentDate = function() {
    return <h2>{new Date().toDateString()}</h2>;
}

export default CurrentDate;