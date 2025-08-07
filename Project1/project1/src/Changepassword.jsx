import React from "react";
import { useNavigate } from "react-router-dom";


function Changepassword() {

    var mynavigation = useNavigate()

    const [opass , setOpass] = React.useState("")
    const [npass , setNpass] = React.useState("")
    const [cpass , setCpass] = React.useState("")

    React.useEffect(() => {
        var  a = localStorage.getItem("isLoggedin")
        if(!a) {
            mynavigation("/login")
        }
    })

    const doProcess = () => {
        var lpassword = localStorage.getItem("password")
        if(lpassword == opass) {
            if(npass == cpass) {
                if(lpassword == npass) {
                    alert("Can not use Old Password as New Password")
                }else {
                    // Update Password 
                    localStorage.setItem("password" , npass)
                    alert("Password Updated")
                }
            }else {
                alert(" Enter New Password and Confirm Password Must Be same ")
            }
        }else {
            alert("Enter Old Password Correct ")
        }
    }

    return (
        <>
            <h1>Change Password</h1>

            Old password : <input type="text" onChange={(e) => setOpass(e.target.value)} />
            New password : <input type="text" onChange={(e) => setNpass(e.target.value)} />
            Confirm password : <input type="text" onChange={(e) => setCpass(e.target.value)} />

            <input type="button" value = "Click Me"  onClick={doProcess}/>
        </>
    )
}

export default Changepassword ; 