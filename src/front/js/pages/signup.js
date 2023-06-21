import React, { useEffect, useState, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";

export const Signup = () => {

  const [name, setName] = useState("")
  const [dni, setDni] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const {actions} = useContext(Context);   



  useEffect(() => {
    const loginBtn = document.getElementById("login");
    const signupBtn = document.getElementById("signup");

    const handleLoginClick = (e) => {
      let parent = e.target.parentNode.parentNode;
      Array.from(e.target.parentNode.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
          parent.classList.add("slide-up");
        } else {
          signupBtn.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
      });
    };

    const handleSignupClick = (e) => {
      let parent = e.target.parentNode;
      Array.from(e.target.parentNode.classList).find((element) => {
        if (element !== "slide-up") {
          parent.classList.add("slide-up");
        } else {
          loginBtn.parentNode.parentNode.classList.add("slide-up");
          parent.classList.remove("slide-up");
        }
      });
    };

    loginBtn.addEventListener("click", handleLoginClick);
    signupBtn.addEventListener("click", handleSignupClick);

    return () => {
      loginBtn.removeEventListener("click", handleLoginClick);
      signupBtn.removeEventListener("click", handleSignupClick);
    };
  }, []);


  const handleSignup = (event) => {
    event.preventDefault();
    actions.handleSignup(name, dni, email, password);
  }



  const handleLogin = (event) => {
    event.preventDefault();
    actions.handleLogin(email, password);
  }



  return (
    <div className="form-structor">
      <form className="signup"
        onSubmit={handleSignup}
      >
        <h2 className="form-title" id="signup">Sign up</h2>
        <div className="form-holder">
          <input
            type="text"
            className="input"
            placeholder="Name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            className="input"
            placeholder="DNI"
            required
            value={dni}
            onChange={(event) => setDni(event.target.value)}
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            autoComplete="username"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
          <input
            type="password"
            className="input"
            placeholder="Password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className="submit-btn">Sign up</button>
      </form>
      <form className="login slide-up"
        onSubmit={handleLogin}
      >
        <div className="center">
          <h2 className="form-title" id="login">Log in</h2>
          <div className="form-holder">
            <input
              type="email"
              className="input"
              placeholder="Email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
            <input
              type="password"
              className="input"
              placeholder="Password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)} />
          </div>
          <button className="submit-btn">Log in</button>
        </div>
      </form>
    </div>
  );
};