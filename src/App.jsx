import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Design from "./component/Design";

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
    <div className="h-screen 2xl:container mx-auto bg-fuchsia-100/45">
      <div className="w-11/12 h-full mx-auto flex justify-center items-center">
        <div className="bg-white  overflow-hidden w-[768px] h-[480px] relative rounded-4xl shadow-2xl shadow-gray-400">
          <div className="flex h-full">
            <Login />
            <Signup />
          </div>
          <div
            ref={containShiftRef}
            className="w-[50%] top-0  left-[0%] z-[1000] absolute overflow-hidden block  rounded-4xl text-white    bg-[#F11515] h-full rounded-r-[35%]"
          >
            <Design rightToLeft={rightToLeft} leftToRight={leftToRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
