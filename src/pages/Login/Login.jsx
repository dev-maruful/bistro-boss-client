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

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-0">
        <div className="text-center mb-3">
          <h1 className="text-4xl font-bold">Login</h1>
        </div>
        <div className="card max-w-lg">
          <form onSubmit={handleLogin} className="card-body p-0 gap-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-semibold">Email</span>
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
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered text-[#A1A1A1] w-full"
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-success btn-xs mt-2"
              >
                Validate Captcha
              </button>
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
          <p className="text-base font-bold text-center text-[#D1A054B2]">
            New here?{" "}
            <Link to="/register" className="hover:underline">
              Create a New Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
