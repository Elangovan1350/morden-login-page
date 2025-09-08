import React from "react";

const Design = ({ leftToRight, rightToLeft }) => {
  return (
    <>
      <div id="text0" className="relative block   left-[0%] w-[200%] h-full">
        <div
          id="text1"
          className="flex w-2/4 absolute text-center h-full top-0  flex-col justify-center items-center gap-5 px-8"
        >
          <h1 className="text-[32px] font-bold">WELCOME BACK!</h1>
          <p className="text-center text-sm leading-5">
            Enter your personal details to use all of site features
          </p>
          <button
            onClick={leftToRight}
            className=" py-2 px-8 rounded-lg text-sm border leading-5 border-white"
          >
            SIGN IN
          </button>
        </div>
        <div
          id="text2"
          className="flex w-2/4 h-full text-center  absolute right-0 flex-col justify-center items-center gap-5 px-8"
        >
          <h1 className="text-[32px] font-bold">Hello, Friend!</h1>
          <p className="text-center text-sm leading-5">
            Register with your personal details to use all of site features{" "}
          </p>
          <button
            onClick={rightToLeft}
            className=" py-2 px-8 rounded-lg text-sm border leading-5 border-white"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
};

export default Design;
