import React, { useEffect, useRef, useState } from "react";
import bg from "../../assets/others/authentication.png";
import loginImage from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { login, googleLogin } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Login Successful");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.code);
      });
  };

  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
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
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-0">
          <div className="text-center mb-3">
            <h1 className="text-4xl font-bold">Login</h1>
          </div>
          <div className="card">
            <form
              onSubmit={handleLogin}
              className="card-body p-0 gap-0 w-[530px]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-[#A1A1A1] w-full"
                />
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
                  placeholder="password"
                  className="input input-bordered text-[#A1A1A1] w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    <LoadCanvasTemplate />
                  </span>
                </label>
                <input
                  onMouseLeave={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="input input-bordered text-[#A1A1A1] w-full"
                />
              </div>
              <div className="form-control mt-6 mb-5">
                <button
                  disabled={disabled}
                  className="btn bg-[#D1A054B2] border-none text-xl font-bold"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-base font-bold text-center text-[#D1A054B2] mb-3">
              New here?{" "}
              <Link to="/register" className="hover:underline">
                Create a New Account
              </Link>
            </p>
            <p className="text-center mb-3 text-xl font-medium">
              Or sign in with
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

export default Login;
