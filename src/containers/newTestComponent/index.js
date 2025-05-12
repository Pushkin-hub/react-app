import react from "react";

const TestComponent = function(props) {

    let { title, color, onclick } = props;

    const clickHandler = () => {
        if (typeof onclick === 'function') {
            onclick ("props color is: " + color)
        }
    }


    return (
        <div>
            <button onClick={clickHandler} style = {{color: 'red', background: 'green', fontSize: "16px"}}>{title}</button>
        </div>
        
    )
}
export default TestComponent;