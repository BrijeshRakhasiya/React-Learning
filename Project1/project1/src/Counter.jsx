import React  from "react";
import './Home.css'


class Counter extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {Counter : 1 } ;
    }

    increment () {
        if(this.state.Counter > 3) {
            this.setState({msg : "Sorry Bhai Kale Try Karje "})
        }
        else {
            this.setState({Counter : this.state.Counter +1 , msg : " "})
        }
    }

    decrement () {
        if(this.state.Counter < 1) {
            this.setState({msg : "Sorry Bhai Kale Try Karje "})
        }
        else {
            this.setState({Counter : this.state.Counter  - 1 , msg : " "})
        }
    }
    render() {
        var a = 10 
        return (
            <>
            <h1>Counter APP </h1>

            A value is {a} 

            <br></br>

            Counter Value is {this.state.Counter} <br/>
            <input type="button" value = "+" onClick={this.increment.bind(this)} />
            <br></br>
            <input type="button" value = "-" onClick={this.decrement.bind(this)} />
            <br></br>
            <p style={{color : 'red'}} > {this.state.msg}</p>
            </>
        )
    }
}

export default Counter ; 

