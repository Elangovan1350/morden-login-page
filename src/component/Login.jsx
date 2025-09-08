import React from "react";

const Login = () => {
  return (
    <>
      <div className="w-1/2 flex p-4 items-center justify-center  overflow-hidden">
        <div className="login1 flex   justify-center items-center w-full  ">
          <div className="flex flex-col justify-center items-center w-4/5  gap-3">
            <h1 className="font-bold text-[32px]">Sign In</h1>
            <div className="flex gap-2.5 flex-wrap">
              <i className="fa-brands fa-google border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-facebook border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-github border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-linkedin border p-2.5 rounded-lg"></i>
            </div>
            <p className="text-xs">or use your email and password</p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <p className="text-sm text-[#333]">Forget Your Password?</p>
            <button className="py-2.5 px-8 bg-[#F11515] rounded-lg text-white text-xs font-semibold">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
