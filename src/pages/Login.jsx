import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate  } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const { signInWithGoogle, signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log("Logged in:", result.user);
        form.reset();
        setEmail("");
        navigate(location.state || "/", { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location.state || "/", { replace: true });
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Log in to ARTIFY</h2>

          <form onSubmit={handleLogin} className="w-full">
            {/* Email */}
            <div className="form-control w-full">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input input-bordered w-full pr-10  
               focus:outline-none focus:ring-0 focus-visible:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control w-full mt-2">
              <label className="label">Password</label>

              <div className="relative w-full">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full pr-12 focus:outline-none focus:ring-0"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
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
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center gap-3 rounded-sm cursor-pointer bg-black
            text-white px-5 py-2 rounded-lg w-full font-semibold"
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
