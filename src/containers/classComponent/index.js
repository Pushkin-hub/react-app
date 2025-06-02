import react from "react";

class ClassComponent extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: props.startValue
        }
    }

    render() {
        const clickHandler = () => {
            this.setState({
                currentValue: this.state.currentValue + this.props.incValue
            })
        }
        
        return(
            <button onClick={clickHandler}>{this.state.currentValue}</button>
        )
    }
}

export default ClassComponent;