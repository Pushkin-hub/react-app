import react, { useState } from "react";
import './style.css'
import { Link, NavLink } from 'react-router-dom';

const AnotherOneComponent = function (props) {

    const [bgcolor, setBgColor] = useState(props.color);

    const [currentValue, setCurrentValue] = useState(0);

    const btnClickFn = val => {
        console.log(val)

        if (bgcolor === 'green') {
            setBgColor(props.color)
        } else {
            setBgColor('green')
        }
    }
    const counter = () => {
        setCurrentValue(currentValue + 1);
    }
    return (
        <div className={"header"} style={{ backgroundColor: bgcolor }}>
            header
            <ul>
                <li>
                    <Link to={'/'} title={"item.title"}>
                        details link
                    </Link>
                </li>
                <li>
                    <NavLink
                        to={'/test'}
                        className={''}
                        title={"item.title"}
                    >
                        
                        <span>test link</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
export default AnotherOneComponent;