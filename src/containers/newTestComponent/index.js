import react from "react";

const TestComponent = function(props) {
   
    let { title, color,  onclick} = props;

    const clickHandler = () => {
       if (typeof onclick === 'function') {
        onclick( "props color is: " + color)
       }
    }
    let styles = {color: 'red', background: 'green', fontSize: "16px"}

    return (
        <div>
            <button onClick={clickHandler} style={styles}> {title} </button>
        </div>
    )
}
export default TestComponent;