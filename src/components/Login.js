import React, { useState } from "react";
import Form from "./LoginForm/Form";
import { useNavigate } from "react-router";
export default function Login() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? <Form submittedForm={submitForm} /> : navigate("/")}
    </div>
  );
}
