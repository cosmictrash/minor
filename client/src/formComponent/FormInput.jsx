import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormInput = (props) => {
  const { label, name, e, t, ...rest } = props;
  return (
    <div className="flex flex-col p-1">
      <label className='form__label' htmlFor={name}>{label}:</label>
      <Field id={name} name={name} { ...rest } className={`login__input ${(e && t) && "error__login--input"}`} />
      <ErrorMessage name={name} component="div" className='error__login--message' />
    </div>
  )
}

export default FormInput