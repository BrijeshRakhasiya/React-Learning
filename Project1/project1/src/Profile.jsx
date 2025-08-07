import React, { useState, useEffect } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  React.useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedMobile = localStorage.getItem("mobile");

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedMobile) setMobile(storedMobile);
  }, []);

  const handleUpdateProfile = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    alert("Profile updated successfully!");
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMobileChange = (e) => setMobile(e.target.value);

  return (
    <>
      <h1>Profile</h1>

      Name:{" "}
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <br />

      Email:{" "}
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />
      <br />

      Mobile:{" "}
      <input
        type="tel"
        value={mobile}
        onChange={handleMobileChange}
        placeholder="Enter your mobile number"
      />
      <br />

      <button onClick={handleUpdateProfile}>Update Profile</button>

      <p>Hello, {name}!</p>
    </>
  );
}

export default Profile;