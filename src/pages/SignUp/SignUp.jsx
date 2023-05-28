import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { createUser, googleLogin, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            toast.success("Registration Successful");
            reset();
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.code);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.code);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-0">
          <div className="text-center mb-3">
            <h1 className="text-4xl font-bold">Sign Up</h1>
          </div>
          <div className="card">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body p-0 gap-0 w-[530px]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered text-[#A1A1A1] w-full"
                />
                {errors.name && (
                  <span className="text-error">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered text-[#A1A1A1] w-full"
                />
                {errors.photoURL && (
                  <span className="text-error">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered text-[#A1A1A1] w-full"
                />
                {errors.email && (
                  <span className="text-error">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered text-[#A1A1A1] w-full"
                />
                {errors.password?.type === "required" && (
                  <p className="text-error">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-error">
                    Password must be at least 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-error">
                    Password must be include at least one UPPERCASE, one
                    lowercase, one number and one special character.
                  </p>
                )}
              </div>

              <div className="form-control mt-6 mb-5">
                <button
                  // disabled={disabled}
                  className="btn bg-[#D1A054B2] border-none text-xl font-bold"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-base font-bold text-center text-[#D1A054B2] mb-3">
              Already registered?{" "}
              <Link to="/login" className="hover:underline">
                Go to login
              </Link>
            </p>
            <p className="text-center mb-3 text-xl font-medium">
              Or sign up with
            </p>
            <div className="flex justify-center gap-5">
              <button className="btn btn-circle btn-outline hover:bg-[#D1A054B2] hover:border-none">
                <FaFacebookF></FaFacebookF>
              </button>
              <button
                onClick={handleGoogleLogin}
                className="btn btn-circle btn-outline hover:bg-[#D1A054B2] hover:border-none"
              >
                <FaGoogle></FaGoogle>
              </button>
              <button className="btn btn-circle btn-outline hover:bg-[#D1A054B2] hover:border-none">
                <FaGithub></FaGithub>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
