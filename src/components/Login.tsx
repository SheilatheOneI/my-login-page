import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import LoginImage from "../assets/LoginImage.jpg";
import { useState } from "react";
import { FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    try {
      const res = await fetch("YOUR_API_ENDPOINT");
      if (!res.ok) {
        throw new Error("There was a problem. Please try again.");
      }
      const data = await res.json();
      console.log("Signin successful:", data);

    } catch (error) {
      console.error("Error signing in");
    }
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 font-poppins">
      <div className="flex flex-col-reverse md:flex-row bg-white rounded-xl w-2/3 max-w-screen-lg overflow-hidden shadow-lg">
        {/* Content Section */}
        <div className="flex flex-col justify-center p-6 md:p-20 w-full md:w-1/2 space-y-4">
          <h1 className="text-8xl font-bold text-left">
            Welcome to Ticket<span className="text-blue-600">.io</span>
          </h1>
          <p className="text-xxs text-gray-600 text-left whitespace-nowrap pr-6 md:pr-0">
            Please enter your details to join the sports family!
          </p>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="w-full text-xxs">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="w-full text-xxs">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-xs"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-center justify-between w-full text-xs pr-6 md:pr-0">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-1" />
                <label
                  htmlFor="remember"
                  className="text-gray-700 whitespace-nowrap mr-3"
                >
                  Remember account
                </label>
              </div>
              <a href="#" className="text-blue-600 text-xs whitespace-nowrap">
                Reset password?
              </a>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 text-xs pr-6 md:pr-0">
              Sign in
            </button>
          </form>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <div className="text-center my-3">
            <p className="text-xs text-gray-600">Or continue with</p>
          </div>
          <div className="flex items-center justify-between space-x-2 w-full mb-3">
            <a
              href="#"
              className="bg-white p-2 rounded-lg border border-gray-300 hover:bg-gray-300 transition duration-300 flex items-center justify-center w-40"
            >
              <FaGoogle className="text-[#DB4437] text-xl" />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-lg border border-gray-300 hover:bg-gray-300 transition duration-300 flex items-center justify-center w-40"
            >
              <FaFacebookF className="text-[#4267B2] text-xl" />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-lg border border-gray-300 hover:bg-gray-300 transition duration-300 flex items-center justify-center w-40"
            >
              <FaApple className="text-[#000000] text-xl" />
            </a>
          </div>

          <div className="text-left pr-6 md:pr-0">
            <p className="text-xs text-gray-600 whitespace-nowrap">
              Don’t have an account?{" "}
              <a href="#">
                <span className="text-blue-600">Sign up </span>for free
              </a>
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={LoginImage}
            alt="Login"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
