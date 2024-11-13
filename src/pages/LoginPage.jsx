import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedIn } from "../app/loginSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(userLoggedIn(data)).then((action) => {
      if (action.type === "auth/userLoggedIn/fulfilled") {
        navigate("/");
      } else if (action.type === "auth/userLoggedIn/rejected") {
        setError(action.payload);
      }
    });

    setData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div className="min-h-[72.5vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-sky-200 py-7 px-5 w-[280px] h-[300px] m-auto rounded"
        >
          <h1 className="text-center">Login</h1>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={data.email}
            onChange={handleChange}
            className="w-full my-2 px-4 py-1 rounded bg-slate-100 border-none outline-none ring-1"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
            value={data.password}
            onChange={handleChange}
            className="w-full my-2 px-4 py-1 rounded bg-slate-100 border-none outline-none ring-1"
          />

          <button
            type="submit"
            className="bg-slate-500 text-white py-1 px-4 rounded text-center"
          >
            submit
          </button>

          <div className="text-sm py-5">
            Do not have an account ?
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </div>

          <small className="text-red-500">
            {error ? `error: ${error}` : ""}
          </small>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
