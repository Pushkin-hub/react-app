import { createRef, useState } from "react";

const Form = (props) => {
    let uRef = createRef();
    const [lastName, setLastName] = useState('');

    const submitHanler = (e) => {
        e.preventDefault();
        // let uName = document.querySelector('#userName')
        console.log(uRef.current.value, lastName)
    }

    const changeHandler = (e) => {
        let name = e.target.value;
       
        if (name.match(/test/gmi)) {
            alert('Wrong name!');
            setLastName('')
        } else {
            setLastName(e.target.value)
        }

    //    setLastName(e.target.value)
    }

    const buttonHandler = (e) => {
        e.preventDefault();
        console.log(lastName, uRef.current.value);
    }

    return(
        <>
            <form onSubmit={submitHanler}>
                <input type="text" id='userName' ref={uRef}/>
                <button type="submit">Click me</button>
            </form>
            
            <div>
                <input
                    type='text'
                    id ='lastName'
                    value={lastName}
                    onChange={changeHandler}
                />
                <button onClick={buttonHandler}>click me2</button>
            </div>
        </>
    )
}
export default Form;