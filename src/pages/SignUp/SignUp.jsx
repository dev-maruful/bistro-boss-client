import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-0">
        <div className="text-center mb-3">
          <h1 className="text-4xl font-bold">Sign Up</h1>
        </div>
        <div className="card">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body p-0 gap-0"
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
                <span className="label-text text-xl font-semibold">Email</span>
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
                {...register("password", { required: true, minLength: 6 })}
                placeholder="password"
                className="input input-bordered text-[#A1A1A1] w-full"
              />
              {errors.password && (
                <span className="text-error">
                  Password must be at least 6 characters
                </span>
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
              //   onClick={handleGoogleLogin}
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
  );
};

export default SignUp;
