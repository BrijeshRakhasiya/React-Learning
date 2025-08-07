import React from "react";


function Signup() {

    const [name , setName]  = React.useState("")
    const [mobile , setMobile]  = React.useState("")
    const [email , setEmail]  = React.useState("")
    const [password , setPassword]  = React.useState("")

    const doProcess = () => {
        localStorage.setItem("name" , name)
        localStorage.setItem("mobile" , mobile)
        localStorage.setItem("email" , email)
        localStorage.setItem("password" , password)

        alert("Sign UP SucessFully")
    }
    return(<>

    <h1>SignUp Form</h1>

    Name : <input type="text" onChange={(e)=> setName(e.target.value)} />
    Mobile : <input type="text" onChange={(e)=> setMobile(e.target.value)} />
    Email : <input type="text" onChange={(e)=> setEmail(e.target.value)} />
    Password : <input type="text" onChange={(e)=> setPassword(e.target.value)} />

    <input type="button"  value="SignUp" onClick={doProcess}/>
    </>);
}


export default Signup ;