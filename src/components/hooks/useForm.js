import { useState, useEffect } from "react";

const useForm = (callback, validate, information) => {
  const [values, setValues] = useState(information);
  console.log(values);
  const [errors, setErrors] = useState({});
  console.log(errors);
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
      callback();
    }
  }, [errors, isSubmitting, callback]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
