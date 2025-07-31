import React from "react";
class Counter2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {counter:0}
    }
    render(){
        return(<>
        <h1>Counter2</h1>
            <h1>{this.state.counter}</h1>
            <input type="button" value="+" onClick={()=>this.setState({counter:this.state.counter+1})}/>
            <input type="button" value="-" onClick={()=>this.setState({counter:this.state.counter-1})}/>
        </>)
    }
}
export default Counter2