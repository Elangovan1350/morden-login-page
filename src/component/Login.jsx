import React, { useRef } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALGNUAbzYoBtdr2BEOBKLGDziHSXXHyVQ",
  authDomain: "morden-login-page.firebaseapp.com",
  databaseURL:
    "https://morden-login-page-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "morden-login-page",
  storageBucket: "morden-login-page.firebasestorage.app",
  messagingSenderId: "440944838296",
  appId: "1:440944838296:web:602a7916bfc1cd8a0bf2ed",
};

const database = initializeApp(firebaseConfig);

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const messageRef = useRef(null);
  const messageRef2 = useRef(null);
  const messageRef3 = useRef(null);
  const db = getDatabase(database);

  const formSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    const isValid = advanceValidation(email, password);
    if (isValid) {
      saveData(email, password);
      console.log("data is saved in firebase");
      messageRef3.current.textContent = "Data is saved in firebase";
    } else {
      console.log("data is not saved in firebase");
      messageRef3.current.textContent = "Data is not saved in firebase";
    }
  };
  const saveData = (email, password) => {
    push(ref(db, "userDatas"), {
      email,
      password,
    });
  };
  const advanceValidation = (email, password) => {
    let isValid = true;
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (email.match(emailRegex)) {
      messageRef.current.textContent = "";
    } else {
      messageRef.current.textContent = "Email is not valid";
      isValid = false;
    }
    if (password.match(passwordRegex)) {
      messageRef2.current.textContent = "";
    } else {
      messageRef2.current.textContent = "Password is not valid";
      isValid = false;
    }
    return isValid;
  };
  return (
    <>
      <div className="w-1/2 flex p-4 items-center justify-center  overflow-hidden">
        <div className="login1 flex   justify-center items-center w-full  ">
          <form
            onSubmit={formSubmit}
            className="flex flex-col justify-center items-center w-4/5  gap-3"
          >
            <h1 className="font-bold text-[32px]">Sign In</h1>
            <div className="flex gap-2.5 flex-wrap">
              <i className="fa-brands fa-google border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-facebook border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-github border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-linkedin border p-2.5 rounded-lg"></i>
            </div>
            <p className="text-xs">or use your email and password</p>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <p ref={messageRef} className="text-red-400 text-xs"></p>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <p ref={messageRef2} className="text-red-400 text-xs"></p>
            <p className="text-sm text-[#333]">Forget Your Password?</p>
            <button
              type="submit"
              className="py-2.5 px-8 bg-[#F11515] rounded-lg text-white text-xs font-semibold"
            >
              SIGN IN
            </button>
            <p ref={messageRef3} className="text-xs text-green-400"></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
