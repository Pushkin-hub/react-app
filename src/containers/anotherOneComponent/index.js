import react, { useState } from "react";
import './style.css'
import TestComponent from '../../containers/newTestComponent';

const AnotherOneComponent = function(props) {

    const [bgcolor, setBgcolor] = useState(props.color);

    const [currentValue, setCurrentValue] = useState(0);

    const btnClickFn = (val) => {
        console.log(bgcolor)

        if(bgcolor === 'green') {
            setBgcolor(props.color)
        } else {
            setBgcolor('green')
        }
    }

    const counter = () => {
        setCurrentValue(currentValue +1);
    }
    return (
        <div className="header" style={{backgroundColor: bgcolor}}>
            header
            <TestComponent title={props.title} color={'pink'} onclick = {btnClickFn}/>
            <TestComponent title={currentValue} color={'pink'} onclick = {counter}/>
        </div>
    )
}
export default AnotherOneComponent;