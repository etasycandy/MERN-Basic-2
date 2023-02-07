import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

import loginImage from "../assets/img/log.svg";
import registerImage from "../assets/img/register.svg";

const AuthForm = () => {
  const signUpMode = () => {
    const container = document.querySelector(".auth");
    container.classList.add("sign-up-mode");
  };
  const signInMode = () => {
    const container = document.querySelector(".auth");
    container.classList.remove("sign-up-mode");
  };

  return (
    <div className="auth w-full bg-white min-h-screen relative overflow-hidden">
      <div className="forms-container absolute w-full h-full top-0 left-0">
        <div className="auth-form absolute top-1/2 left-3/4 w-1/2 grid">
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
      <div className="panels-container absolute h-full w-full top-0 left-0 grid ">
        <div className="panel left-panel flex flex-col items-end justify-around text-center">
          <div className="content">
            <h3 className="font-semibold text-2xl">Do not have an account ?</h3>
            <p className="text-base py-3">
              If you don't have an account, please register here!
            </p>
            <button
              className="btn transparent m-0 bg-transparent border-solid border-white border-2 w-[130px] h-[41px] font-semibold text-xs rounded-full"
              id="sign-up-btn"
              onClick={signUpMode}
            >
              Sign up
            </button>
          </div>
          <img src={loginImage} className="image" alt="" />
        </div>
        <div className="panel right-panel flex flex-col items-end justify-around text-center">
          <div className="content">
            <h3 className="font-semibold text-2xl">
              Do you already have an account ?
            </h3>
            <p className="text-base py-3">Log in to your account here.</p>
            <button
              className="btn transparent m-0 bg-transparent border-solid border-white border-2 w-[130px] h-[41px] font-semibold text-xs rounded-full"
              id="sign-in-btn"
              onClick={signInMode}
            >
              Sign in
            </button>
          </div>
          <img src={registerImage} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
