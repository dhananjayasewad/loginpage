import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={submitHandler}
            >
              LOGIN
            </button>
          </div>

          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
