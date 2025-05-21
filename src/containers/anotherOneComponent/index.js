import react, { useState } from "react";
import './style.css'
import { Link, NavLink} from 'react-router-dom';

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
            <ul>
                <li>
                    <Link to={'/details'} title={'item.title'}>
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