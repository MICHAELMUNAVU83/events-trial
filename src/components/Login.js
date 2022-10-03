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
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="flex justify-center items-center rounded pt-6">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="*****"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className=" text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
