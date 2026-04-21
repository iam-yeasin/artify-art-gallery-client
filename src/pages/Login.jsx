import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form className="w-full">
            {/* Email */}
            <div className="form-control w-full">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control w-full mt-2">
              <label className="label">Password</label>

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div className="mt-2">
              <a href="#" className="link link-hover text-sm">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </form>

          <div className="divider">OR</div>

          {/* Google Signin */}
          <button
            type="button"
            className="flex items-center justify-center gap-3 rounded-sm cursor-pointer bg-black
            text-white px-5 py-2 rounded-1g w-full font-semibold"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="font-semibold text-center pt-5">
            Don't Have An Account?{" "}
            <Link className="text-pink-600 link link-hover" to={"/register"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
