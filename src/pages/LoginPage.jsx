import { useContext, useState } from "react";

import "./loginStyle.css";
import { useNavigate } from "react-router-dom";
import { LoginInfo } from "../useContext/LoginContext";
const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setAuth} = useContext(LoginInfo);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(username);
    setPassword(password);
    if (username === "Saloxiddin" && password === "Creed2302") {
      navigate("/teachers");
      setAuth(true);
      localStorage.setItem("auth",true)
    }
  };
  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">

              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-block">
              LOGIN
            </button>
            <div className="message">
              <div>
                <input type="checkbox" /> Remember ME
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
