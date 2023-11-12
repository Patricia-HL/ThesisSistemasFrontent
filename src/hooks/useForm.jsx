import { useState } from 'react';

const useForm = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // if (validationRules[name]) {
    //   validateField(name, value);
    // }
  };

  const validateField = (name, value) => {
    if (validationRules[name]) {
      const error = validationRules[name](value);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    setErrors,
    reset, // Agrega la función reset
  };
};

export default useForm;
