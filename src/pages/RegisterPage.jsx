import { Password } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIGNUP_URL } from "../api/api";

const RegisterPage = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((oldData) => ({ ...oldData, [name]: value }));
  };

  const { mutate } = useMutation({
    mutationFn: (data) => axios.post(`${SIGNUP_URL}`, data),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="min-h-[72.5vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-sky-200 py-7 px-5 w-[280px] h-[300px] m-auto rounded"
        >
          <h1 className="text-center">Register</h1>
          <input
            type="text"
            name="first_name"
            placeholder="enter first name"
            value={data.first_name}
            onChange={handleChange}
            className="w-full my-2 px-4 py-1 rounded bg-slate-100 border-none outline-none ring-1"
          />
          <input
            type="text"
            name="last_name"
            placeholder="enter last name"
            value={data.last_name}
            onChange={handleChange}
            className="w-full my-2 px-4 py-1 rounded bg-slate-100 border-none outline-none ring-1"
          />
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
            Have an account ?
            <span>
              <Link to="/login">Login </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
