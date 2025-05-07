import react from "react";
const TestComponent = function(props) {
    let title = props.title
    let color = props.color
    const clickHandler = () => {
        if (typeof props.onclick === 'function') {
            props.oneClick ("props color is: " + color)
        }
    }



    return (
        <div>
            <button onClick={clickHandler}>{title}</button>
        </div>
        
    )
}
export default TestComponent;