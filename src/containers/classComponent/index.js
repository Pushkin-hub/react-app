import react from "react";

class ClassComponent extends react.Component {

    constructor (props) {
        super(props);
        this.state = {
            currentValue: props.startValue 
        }
    }

    render () {
        const clickHander = () => {
            this.setState ({
                currentValue: this.state.currentValue + this.props.incValue
            })
            console.log(this)
        }
    return (
        <button onClick = {clickHander}> {this.state.currentValue} </button>
        )
    }  
}

export default ClassComponent;