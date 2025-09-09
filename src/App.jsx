import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Design from "./component/Design";

gsap.registerPlugin(useGSAP);

const App = () => {
  const containShiftRef = useRef();

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
            <Design containShiftRef={containShiftRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
