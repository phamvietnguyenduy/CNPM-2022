import React, { useState } from "react";
import { Navigate } from "react-router";
//Validate
import validate from "./validateInfo";
//Hooks
import useForm from "../hooks/useForm";
//Styles
import { Wrapper } from "./Form.styles";
//INFORMATION
const INFORMATION = {
  username: "",
  password: "",
  conpassword: "",
  email: "",
  firstname: "",
  lastname: "",
};

export default function Form({ submittedForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submittedForm,
    validate,
    INFORMATION
  );

  return (
    <>
      <Wrapper className="main">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} id="form" noValidate>
          <div className="row">
            <div className="form-group col">
              <h2>Username</h2>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="form-control"
                value={values.username}
                onChange={handleChange}
                required
              />
              <p className="input-alert">
                {errors.username && errors.username}
              </p>
            </div>
            <div className="form-group col">
              <h2>Password</h2>
              <input
                type="password"
                name="password"
                id="input-pass"
                value={values.password}
                placeholder="Enter your password"
                className="form-control"
                onChange={handleChange}
                required
              />
              <p className="input-alert">
                {errors.password && errors.password}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <h2>Firstname</h2>

              <input
                type="text"
                name="firstname"
                id="input-pass"
                value={values.firstname}
                placeholder="Enter your firstname"
                className="form-control"
                onChange={handleChange}
                required
              />
              <p className="input-alert">
                {errors.firstname && errors.firstname}
              </p>
            </div>

            <div className="form-group col">
              <h2>Lastname</h2>

              <input
                type="text"
                name="lastname"
                id="input-pass"
                value={values.lastname}
                placeholder="Enter your lastname"
                className="form-control"
                onChange={handleChange}
                required
              />
              <p className="input-alert">
                {errors.lastname && errors.lastname}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <h2>Confirm Password</h2>

              <input
                type="password"
                name="conpassword"
                placeholder="Confirm password"
                className="form-control"
                value={values.conpassword}
                onChange={handleChange}
                required
              />
              <p className="input-alert">
                {errors.conpassword && errors.conpassword}
              </p>
            </div>

            <div className="form-group col">
              <h2>Email</h2>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                value={values.email}
                onChange={handleChange}
                required
              />
              <p className="input-alert">{errors.email && errors.email}</p>
            </div>
          </div>

          <input
            type="submit"
            value="Click here"
            className="btn-outline-success"
          />
        </form>
      </Wrapper>
    </>
  );
}
