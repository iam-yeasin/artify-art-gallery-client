import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Register</h2>

          <form className="w-full">
            <label className="label">Name</label>
            <div className="relative w-full">
              <input
                name="name"
                type="text"
                className="input input-bordered w-full pr-10 
               focus:outline-none focus:ring-0 focus-visible:outline-none"
                placeholder="Name"
                required
              />
            </div>

            {/* Photo */}
            <label className="label">Photo URL</label>
            <div className="relative w-full">
              <input
                name="photo"
                type="text"
                className="input input-bordered w-full pr-10 
               focus:outline-none focus:ring-0 focus-visible:outline-none"
                placeholder="Photo URL"
                required
              />
            </div>

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

            {/* Submit */}
            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </form>

          <p className="font-semibold text-center pt-5">
            Already Have An Account?{" "}
            <Link className="text-pink-600 link link-hover" to={"/login"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
