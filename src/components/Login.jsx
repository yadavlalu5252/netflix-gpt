import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_medium.jpg"
          alt="bg"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>
      <form className="w-full max-w-md mx-auto mt-36 p-10 bg-transparent text-white rounded-lg shadow-2xl border border-gray-700 backdrop-blur-md">
        <h1 className="font-extrabold text-4xl py-4 text-center tracking-wide">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {
          !isSignInForm && (
            <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-3 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        />
          )
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        />
        {isSignInForm ? (
          <button className="p-3 my-4 bg-red-700 hover:bg-red-800 w-full rounded-lg font-semibold text-lg transition">
            Sign In
          </button>
        ) : (
          <button className="p-3 my-4 bg-red-700 hover:bg-red-800 w-full rounded-lg font-semibold text-lg transition">
            Sign Up
          </button>
        )}
        <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
          <label className="flex items-center">
            <input type="checkbox" className="accent-red-700 mr-2" />
            Remember me
          </label>
          <a href="#" className="hover:underline">
            Need help?
          </a>
        </div>
        <div
          className="mt-8 text-center text-gray-400"
          onClick={handleSignInForm}
        >
          {isSignInForm ? (
            <>
              New to Netflix?{" "}
              <a href="#" className="text-white hover:underline font-semibold">
                Sign up now
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="#" className="text-white hover:underline font-semibold">
                Sign in
              </a>{" "}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
