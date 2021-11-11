import React, { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signup__container">
      <form
        method="post"
        className="signup__form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
          console.log(email);
          console.log(password);
        }}
      >
        <label htmlFor="email">What is your email address?</label>
        <input
          id="email"
          className="signup__email"
          type="text"
          name="email"
          placeholder="Enter email."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Create a password</label>
        <input
          id="password"
          className="signup__password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button id="submit" className="signup__submit" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
