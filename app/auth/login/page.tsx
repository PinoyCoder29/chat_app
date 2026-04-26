export default function login() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #090a0a, #4e575a, #3d393d)",
      }}
    >
      <div className="p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 shadow rounded-4">
              <h2 className="text-center mb-3 text-light">
                Sign in with email
              </h2>
              <form action="">
                <div className="mb-2">
                  {/* email */}
                  <div className="mb-3">
                    <div className="input-group shadow">
                      <span className="input-group-text">
                        <i className="bi bi-envelope"></i>
                      </span>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    {/* password */}
                  </div>
                  <div className="mb-3 input-group">
                    <i className="bi bi-lock input-group-text"></i>
                    <input
                      type="password"
                      placeholder="password"
                      className="form-control shadow"
                    />
                  </div>
                  <div className="text-center ">
                    <button
                      className="btn btn-light text-center px-5"
                      type="submit"
                    >
                      Get Started
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
