import React, { useState } from "react";

function Login({ isLogin, setIsLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setIsLogin(true);
    } else {
      alert("Wrong credentials");
    }
  };
  return (
    <div>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="username"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
