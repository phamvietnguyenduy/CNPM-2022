import { useState, useEffect } from "react";
import api from "../api";

const useForm = (callback, validate, information) => {
  const [values, setValues] = useState(information);
  // console.log(values);
  const [errors, setErrors] = useState({});
  // console.log(errors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {      
      if (values.login !== true) {
        api.APIPost("register?name="+values.fullname+"&&password="+values.password+"&&email="+values.email).then(res =>{                           
          console.log(res.data.message);
          callback(res.data.message);          
        })
      }else{
        api.APIPost("login?email="+values.email+"&&password="+values.password).then(res =>{                           
          console.log(res.data.account.customer_id);
          callback(res.data.message);
          window.sessionStorage.setItem("loginid",res.data.account.customer_id);
          window.sessionStorage.setItem("loginname",res.data.account.name);
        })
      }      
    }
  }, [errors, isSubmitting, callback]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
