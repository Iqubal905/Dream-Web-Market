"use client"

import Link from "next/link";
import { useState } from "react";
import GoogleLogin from "../socialLogin/page";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email, password)) {

    }
  }

  return (
    <div>
      <div className=" min-h-screen ">
        <div className=" lg:flex lg:justify-center lg:items-center">
          <div className="bg-white  my-10 rounded w-full sm:w-[450px] mx-auto">
            <form onSubmit={handleSignIn} className="flex flex-col w-full gap-3">
              <h1 className="text-2xl pb-2 md:text-3xl font-bold text-center capitalize"> Sign Up with Google</h1>
              <GoogleLogin></GoogleLogin>
              <p className="text-center my-1">or</p>
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">Enter Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="input w-full p-2 rounded border-2 border-black input-bordered outline-none focus:outline-none focus:border-indigo-400 bg-white focus:bg-white"
                  required
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold">Enter Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="input w-full p-2 rounded border-2 border-black input-bordered outline-none focus:outline-none focus:border-indigo-400 bg-white focus:bg-white"
                  required
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="password" className="font-semibold">Enter Your Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  id="password"
                  className="w-full p-2 rounded border-2 border-black input-bordered outline-none focus:outline-none focus:border-indigo-400 bg-white focus:bg-white"
                  required
                />
                <div
                  className="self-start flex items-center gap-2 my-2 ms-2 select-none cursor-pointer"
                  onClick={togglePassword}
                >
                  <input
                    type="checkbox"
                    name=""
                    checked={showPassword ? true : false}
                    id=""
                    className="h-4 w-4 "
                  />
                  <p className="pb-1">show password</p>
                </div>
              </fieldset>

              <button
                className=" bg-gray-800 border-2 border-black rounded-lg text-white font-semibold text-lg py-2 w-full hover:bg-white hover:text-black hover:border-black"

              >Register</button>


              <p className="text-center">

                Already have an account?{" "}
                <Link href="/login" className="text-blue-500 font-semibold">
                  Login
                </Link>

              </p>

            </form>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Register;
