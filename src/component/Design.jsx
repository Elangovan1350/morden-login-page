import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Design = ({ containShiftRef }) => {
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
    gsap.fromTo(
      ".login1",
      {
        xPercent: 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
      }
    );
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
