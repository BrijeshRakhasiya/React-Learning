import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const doCheck = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail === email && storedPassword === password) {
      localStorage.setItem("isLoggedin", "true");
      navigate("/dashboard");
    } else {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      
        Email: <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      
      <br />

        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          
      <br />

      <button onClick={doCheck}>Login</button>
    </div>
  );
}

export default Login;