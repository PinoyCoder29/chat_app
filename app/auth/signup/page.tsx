"use client";
import { useState } from "react";

export default function signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <main>
      <div className="p-5 text-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 shadow bg-dark rounded-5 p-5">
              <div className="text-center">
                <h1 className="mt-2">Sign Up</h1>
                <h4>Create Your Account</h4>
                <p className="text-secondary">
                  Join Chat app to start your journey
                </p>
              </div>
              <form action="">
                {/* Name */}
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Name
                  </label>

                  <div className="input-group">
                    <i className="bi bi-person input-group-text "></i>
                    <input
                      type="text"
                      placeholder="(e.g., juan_dela_cruz)"
                      className="form-control"
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Email Address
                  </label>

                  <div className="input-group">
                    <i className="bi bi-envelope  input-group-text "></i>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="form-control"
                    />
                  </div>
                </div>
                {/*Password */}
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Password
                  </label>

                  <div className="input-group">
                    <i className="bi bi-lock input-group-text"></i>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="*******"
                      className="form-control"
                    />
                    <button
                      className="input-group-text"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i
                        className={
                          !showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
                {/* Confirm Password */}
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Confirm Password
                  </label>

                  <div className="input-group">
                    <i className="bi bi-lock input-group-text"></i>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="*******"
                      className="form-control"
                    />
                    <button
                      className="input-group-text"
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      <i
                        className={
                          !showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
