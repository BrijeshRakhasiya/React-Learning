import React  from "react";

function Sumdemo() {
    
    const [no1 , setNo1] = React.useState(0)
    const [no2 , setNo2] = React.useState(0)
    const [chocie , setChoice] = React.useState("")
    const [ans , setAns] = React.useState("")

    const doProcess = () => {
        if(chocie == "add") {
            var c = parseInt(no1) + parseInt(no2) 
            setAns("Sum is "+ c)
        }
        else if(chocie == "sub") {
            var c = parseInt(no1) - parseInt(no2) 
            setAns("Sum is "+ c)
        }
        else {
            setAns("Select Choice")
        }
    }

    return (
        <div>
            No1 : <input type="text" onClick={(e) => setNo1(e.target.value)}/>
            No2 : <input type="text" onClick={(e) => setNo2(e.target.value)}/>
            Choice :
            <input type="radio" onChange={()=> setChoice("add")} name="txt1" value="add"/>+
            <input type="radio" onChange={()=> setChoice("sub")} name="txt1" value="sub"/>-

            Choice : <select onChange={() => setChoice(e.target.value)}>
                <option value="add"> ADD</option>
                <option value="sub"> SUB</option>
            </select>
            <input type="button" onClick={doProcess} value="Click Me" />  
            {ans}
        </div>
    )

}

export default Sumdemo