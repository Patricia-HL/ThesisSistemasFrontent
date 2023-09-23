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

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const name in values) {
      validateField(name, values[name]);
    }

    if (Object.keys(errors).length === 0) {
      // Realiza la acción de envío del formulario aquí
      // Por ejemplo, dispatch de una acción de Redux o llamada a una API
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
