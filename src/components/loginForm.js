import React, { useState } from "react";

const loginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  
  return(
    <template>
      <h2>Accedi</h2>
      <form>
        <label for="username">Username</label>
        <input  type="text"
                id="username"
                autocomplete
                onChange={handleUsername} />
        <label for="password">Password</label>
        <input  type="password"
                id="password"
                autocomplete
                onChange={handlePassword} />
      </form>
    </template>
  )
};
