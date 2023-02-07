/**
 * Import Icons
 */
import {
  FaUser,
  FaLock,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import React from "react";

const RegisterForm = () => {
  return (
    <form
      method="POST"
      action="#"
      className="flex items-center justify-center flex-col overflow-hidden px-20 register-form"
    >
      <h2 className="text-4xl text-gray-600 m-3 font-bold">Sign up</h2>
      <div className="max-w-sm w-full bg-[#f0f0f0] my-3 h-[55px] rounded-full grid px-4 relative input-field">
        <div className="flex justify-center items-center mr-2">
          <FaUser
            className="text-center text-[#acacac]"
            size="1.2rem"
            style={{ transition: "0.5s" }}
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="bg-transparent outline-none border-none leading-4 font-semibold text-lg text-[#333] placeholder:text-#aaa placeholder:font-medium"
        />
      </div>
      <div className="max-w-sm w-full bg-[#f0f0f0] my-3 h-[55px] rounded-full grid px-4 relative input-field">
        <div className="flex justify-center items-center mr-2">
          <MdEmail
            className="text-center text-[#acacac]"
            size="1.2rem"
            style={{ transition: "0.5s" }}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent outline-none border-none leading-4 font-semibold text-lg text-[#333] placeholder:text-#aaa placeholder:font-medium"
        />
      </div>
      <div className="max-w-sm w-full bg-[#f0f0f0] my-3 h-[55px] rounded-full grid px-4 relative input-field">
        <div className="flex justify-center items-center mr-2">
          <FaLock
            className="text-center text-[#acacac]"
            size="1.2rem"
            style={{ transition: "0.5s" }}
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent outline-none border-none leading-4 font-semibold text-lg text-[#333] placeholder:text-#aaa placeholder:font-medium"
        />
      </div>
      <input
        type="submit"
        value="Sign Up"
        className="w-40 bg-[#5995fd] border-none outline-none h-[49px] rounded-full text-white uppercase font-semibold my-2 cursor-pointer solid hover:bg-[#4d84e2]"
        style={{ transition: "0.5s" }}
      />
      <p className="py-3 text-base">Or Sign in with social platforms</p>
      <div className="flex justify-center items-center">
        <a
          href="#"
          className="text-[#333] h-11 w-11 flex justify-center items-center mx-2 rounded-[50%] border-solid border-2 border-[#333] hover:text-[#5995fd] hover:border-[#4481eb]"
          style={{ transition: "0.5s" }}
        >
          <FaFacebookF className="text-center" size="1.2rem" />
        </a>
        <a
          href="#"
          className="text-[#333] h-11 w-11 flex justify-center items-center mx-2 rounded-[50%] border-solid border-2 border-[#333] hover:text-[#5995fd] hover:border-[#4481eb]"
          style={{ transition: "0.5s" }}
        >
          <FaTwitter className="text-center" size="1.2rem" />
        </a>
        <a
          href="#"
          className="text-[#333] h-11 w-11 flex justify-center items-center mx-2 rounded-[50%] border-solid border-2 border-[#333] hover:text-[#5995fd] hover:border-[#4481eb]"
          style={{ transition: "0.5s" }}
        >
          <FaGoogle className="text-center" size="1.2rem" />
        </a>
        <a
          href="#"
          className="text-[#333] h-11 w-11 flex justify-center items-center mx-2 rounded-[50%] border-solid border-2 border-[#333] hover:text-[#5995fd] hover:border-[#4481eb]"
          style={{ transition: "0.5s" }}
        >
          <FaLinkedinIn className="text-center" size="1.2rem" />
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
