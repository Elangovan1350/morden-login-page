import React, { useRef } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.vite_APP_API_KEY,
  authDomain: "morden-login-page.firebaseapp.com",
  databaseURL:
    "https://morden-login-page-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "morden-login-page",
  storageBucket: "morden-login-page.firebasestorage.app",
  messagingSenderId: "440944838296",
  appId: import.meta.env.VITE_APP_APPID,
};

const database = initializeApp(firebaseConfig);

const Signup = () => {
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const messageRef = useRef(null);
  const messageRef2 = useRef(null);
  const messageRef3 = useRef(null);
  const messageRef4 = useRef(null);

  const db = getDatabase(database);

  const formSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const userName = userNameRef.current.value;
    console.log(email, password);
    const isValid = advanceValidation(email, password, userName);
    if (isValid) {
      try {
        saveData(email, password, userName);
        console.log("data is saved in firebase");
        messageRef3.current.textContent = "Data is saved in firebase";
      } catch (e) {
        messageRef3.current.textContent = "Error in adding data in firebase";
        console.error(e);
      }
    } else {
      console.log("data is not saved in firebase");
      messageRef3.current.textContent = "Given data is not valid";
    }
  };
  const saveData = async (email, password, userName) => {
    await push(ref(db, "sign-up"), {
      email,
      password,
      userName,
    });
  };
  const advanceValidation = (email, password, userName) => {
    let isValid = true;
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const userNameRegex = /^[0-9A-Za-z]{3,16}$/;

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
    if (userName.match(userNameRegex)) {
      messageRef4.current.textContent = "";
    } else {
      messageRef4.current.textContent =
        "Name is not valid. it must contain 3 character ";
      isValid = false;
    }
    return isValid;
  };

  return (
    <>
      <div className="w-1/2 flex p-4 items-center justify-center  overflow-hidden">
        <div className="login2 flex w-full justify-center items-center ">
          <form
            onSubmit={formSubmit}
            className="flex flex-col justify-center items-center w-4/5  gap-3"
          >
            <h1 className="font-bold text-[32px]">Create Account</h1>
            <div className="flex gap-2.5 flex-wrap">
              <i className="fa-brands fa-google border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-facebook border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-github border p-2.5 rounded-lg"></i>
              <i className="fa-brands fa-linkedin border p-2.5 rounded-lg"></i>
            </div>
            <p className="text-xs">or use your email for registeration</p>
            <input
              ref={userNameRef}
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <p ref={messageRef4} className="text-red-400 text-xs"></p>
            <input
              ref={emailRef}
              type="email"
              name="email"
              id="email1"
              placeholder="Email"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <p ref={messageRef} className="text-red-400 text-xs"></p>

            <input
              ref={passwordRef}
              type="password"
              name="password"
              id="password1"
              placeholder="Password"
              className="outline-none bg-gray-300/30 p-2 w-full rounded-lg"
            />
            <p ref={messageRef2} className="text-red-400 text-xs"></p>

            <button
              type="submit"
              className="py-2.5 px-8 bg-[#F11515] rounded-lg text-white text-xs font-semibold"
            >
              SIGN UP
            </button>
            <p ref={messageRef3} className="text-xs text-green-400"></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
