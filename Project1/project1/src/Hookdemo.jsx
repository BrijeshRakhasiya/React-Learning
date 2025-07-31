import React from "react";

function Hookdemo () {

    const [counter , setCounter] = React.useState(0) 
    const [msg , setMsg] = React.useState("")

    const increment = () => {
        if(counter >= 5) {
            setMsg("Sorry Bhai counter >= 5")
        }
        else {
            setCounter(counter + 1 )
            setMsg("")
        }
    } 
    const decrement = () => {
        if(counter <= 0) {
            setMsg("Sorry Bhai counter <= 0")
        }
        else {
            setCounter(counter - 1 )
            setMsg("")
        }
    } 

    return(
        <>
        <h1>Welcome to Hooks</h1>
        <h1>Counter Value is {counter}</h1>
        <input type="button" value="+" onClick={increment}/>
        <input type="button" value="-" onClick={decrement}/>
        <input type="button" value="X" onClick={()=> setCounter(0)}/>
        
        {msg}
        </>
    )
}
export default Hookdemo 