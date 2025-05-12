import react from "react";

const CurrentDate = function(props) {

    let { title } = props;

    return <h2 style={{color: 'blue', background: 'yellow', fontSize: "20px"}}>{title}</h2>
}
export default CurrentDate;
