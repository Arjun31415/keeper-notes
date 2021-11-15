import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login__container">
      <form
        method="post"
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
          console.log(email);
          console.log(password);
        }}
      >
        <label htmlFor="email">Enter email address</label>
        <input
          id="email"
          className="login__email"
          type="text"
          name="email"
          placeholder="Enter email."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Enter password</label>
        <input
          id="password"
          className="login__password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button id="submit" className="login__submit" type="submit">
          Login
        </button>
        <p>
          {`Don't have an account? `} <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
