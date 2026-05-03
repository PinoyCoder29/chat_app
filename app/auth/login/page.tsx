"use client";
import { useState } from "react";

export default function login() {
  const [show, setShow] = useState(false);
  return (
    <main>
      <div className="p-5 text-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 shadow bg-dark rounded-5 p-5">
              <div className="text-center">
                <h2 className="mt-4">Sign In</h2>
                <h6>Welcome back</h6>
                <p className="text-secondary">Login your Chat app Account</p>
              </div>

              <form action=" " className="">
                {/* email */}
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <div className="input-group">
                    <i className="bi bi-envelope input-group-text"></i>
                    <input
                      type="email"
                      placeholder="Example@gmail.com"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                {/* password */}
                <div className="mb-3">
                  <label htmlFor="">Password</label>
                  <div className="input-group">
                    <i className="bi bi-lock  input-group-text"></i>
                    <input
                      type={show ? "text" : "password"}
                      className="form-control"
                      placeholder="*********"
                    />
                    <button
                      type="button"
                      className="input-group-text"
                      onClick={() => setShow(!show)}
                    >
                      <i className={show ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </button>
                  </div>
                </div>

                <div className="mb-2 text-center">
                  <button
                    className="btn text-light w-100 rounded-5"
                    type="button"
                    style={{
                      background:
                        "linear-gradient(154deg,rgb(197, 31, 183),rgb(121, 29, 182),rgb(54, 78, 218))",
                    }}
                  >
                    Sign In
                  </button>
                </div>

                <div className="mb-3 text-end">
                  <span className="">
                    Don't have an account?
                    <a
                      href="/auth/signup"
                      className="text-decoration-none ms-1"
                    >
                      Sign Up
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
