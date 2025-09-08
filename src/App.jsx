import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const App = () => {
  const containShiftRef = useRef();
  const { contextSafe } = useGSAP();

  const leftToRight = contextSafe(() => {
    console.log("left");

    gsap.to(
      containShiftRef.current,

      {
        x: "100%",
        borderRadius: "35% 32px 32px 35%",
      }
    );
    gsap.to("#text0", {
      xPercent: -50,
    });
    gsap.from("#text2", {
      xPercent: 100,
    });
    gsap.to("#text1", {
      xPercent: -100,
      onComplete: () => {
        gsap.set("#text1", {
          xPercent: 0,
        });
      },
    });
    gsap.to(".login2", {
      xPercent: -100,
      opacity: 0,
    });
    gsap.to(".login1", {
      xPercent: 0,
      opacity: 1,
    });
  });
  const rightToLeft = contextSafe(() => {
    console.log("right");

    gsap.to(
      containShiftRef.current,

      {
        x: "0%",
        borderRadius: "32px 35% 35% 32px",
      }
    );
    gsap.to("#text0", {
      xPercent: 0,
    });
    gsap.from("#text1", {
      xPercent: -100,
    });
    gsap.to("#text2", {
      xPercent: 100,
      onComplete: () => {
        gsap.set("#text2", { xPercent: 0 });
      },
    });
    gsap.to(".login2", {
      xPercent: 0,
      opacity: 1,
    });
    gsap.to(".login1", {
      xPercent: 100,
      opacity: 0,
    });
  });

  return (
    <div className="h-screen 2xl:container mx-auto bg-fuchsia-100/45">
      <div className="w-11/12 h-full mx-auto flex justify-center items-center">
        <div className="bg-white  overflow-hidden w-[768px] h-[480px] relative rounded-4xl shadow-2xl shadow-gray-400">
          <div className="flex h-full">
            <div className="w-1/2 flex p-4 items-center justify-center  overflow-x-hidden">
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
            <div className="w-1/2 flex p-4 items-center justify-center  overflow-x-hidden">
              <div className="login2 flex w-full justify-center items-center ">
                <div className="flex flex-col justify-center items-center w-4/5  gap-3">
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
                </div>
              </div>
            </div>
          </div>
          <div
            ref={containShiftRef}
            className="w-[50%] top-0  left-[0%] z-[1000] absolute overflow-hidden block  rounded-4xl text-white    bg-[#F11515] h-full rounded-r-[35%]"
          >
            <div
              id="text0"
              className="relative block   left-[0%] w-[200%] h-full"
            >
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
                  Register with your personal details to use all of site
                  features{" "}
                </p>
                <button
                  onClick={rightToLeft}
                  className=" py-2 px-8 rounded-lg text-sm border leading-5 border-white"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
