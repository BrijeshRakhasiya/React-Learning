import React from "react";
import { useNavigate } from "react-router-dom";


function Dashboard () {

    const [name, setName] = React.useState("");
    const navigate = useNavigate();
    React.useEffect(() => {
        var isLoggedIn = localStorage.getItem("isLoggedin");
        if (isLoggedIn){
            setName(localStorage.getItem("name"));
        }
        else{
            navigate('/login')
        }
    }, [])

    return (
        <>
            <h1>Dashboard</h1>
            <h1>Hi {name}</h1>
        </> 
    );
}

export default Dashboard ;