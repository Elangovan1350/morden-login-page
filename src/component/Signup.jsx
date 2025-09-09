import React from "react";

const Signup = () => {
  return (
    <>
      <div className="w-1/2 flex p-4 items-center justify-center  overflow-hidden">
        <div className="login2 flex w-full justify-center items-center ">
          <form className="flex flex-col justify-center items-center w-4/5  gap-3">
            <h1 className="font-bold text-[32px]">Create Account</h1>
            <div className="flex gap-2.5 flex-wrap">
              <i className="fa-brands fa-google border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-facebook border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-github border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-linkedin border p-2.5 rounded-lg"></i>
            </div>
            <p className="text-xs">or use your email for registeration</p>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <input
              type="email"
              name="email"
              id="email1"
              placeholder="Email"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <input
              type="password"
              name="password"
              id="password1"
              placeholder="Password"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <button className="py-2.5 px-8 bg-[#F11515] rounded-lg text-white text-xs font-semibold">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
