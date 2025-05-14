import React from "react";
import { useState } from "react";


const Form = (props) => {
    let uRef = React.createRef();
    const submitHanler = (e) => {
        e.preventDefault();
        // let uName = document.querySelector('#userName')
        console.log(uRef.current.value)
    }

    const [lastName, setLastName] = useState ('');
    const changeHandler = (e) => {
        setLastName(e.target.value)
    }

    const buttonHandler = (e) => {
        e.preventDefault();
        console.log(lastName)
    }
    return (
        <>
        <form onSubmit={submitHanler}>
            <input type="text" id="userName" ref={uRef}/>
            <button type="submit">Click me</button>
        </form>

        <div>
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={changeHandler}
            />
            <button onClick={buttonHandler}>click me2</button>
        </div>
        </>
    )

}
export default  Form;