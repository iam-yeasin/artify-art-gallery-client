import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      // console.log("pass didn't match");
      // setError(
      //   "Use at least 6 characters with one uppercase and one lowercase letter.",
      // );
      toast.error(
        "Use at least 6 characters with one uppercase and one lowercase letter.",
      );
      return;
    }

    // reset status success or error
    // setError("");
    // setSuccess(false);

    createUser(email, password)
      .then(async (result) => {
        // console.log(result.user);
        await updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });

        updateUser({
          ...result.user,
          displayName: name,
          photoURL: photo,
        });
        // setSuccess(true);
        toast.success("Signup Sucessful");
        e.target.reset();

        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });

        console.log(location.state);
        console.log(result);
      })
      .catch((err) => {
        // console.log(error);
        // setError(err.message);
        toast.error(err.message);
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            Register for ARTIFY
          </h2>

          <form onSubmit={handleRegister} className="w-full">
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
                name="email"
                type="email"
                className="input input-bordered w-full pr-10 
               focus:outline-none focus:ring-0 focus-visible:outline-none"
                placeholder="Email"
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
                  className="input input-bordered w-full pr-12 focus:outline-none focus:ring-0"
                  placeholder="Password"
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

            {/* Submit */}
            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </form>

          <p className="font-semibold text-center pt-5">
            Already Have An Account?{" "}
            <Link className="text-pink-600 link link-hover" to={"/auth/login"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
