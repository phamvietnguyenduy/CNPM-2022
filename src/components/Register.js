import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Form from "./Form/Form";
//Navigate

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Header />
      {!isSubmitted ? <Form submittedForm={submitForm} /> : navigate("/")}
      <Footer />
    </>
  );
}
