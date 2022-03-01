import React from 'react';
import { Field } from 'formik';
interface IFormikItem {
  title: string;
  name: string;
  id: string;
  placeholder: string;
}

export const FormikItem = (props: IFormikItem) => {
  const { name, id, placeholder, title } = props;

  return (
    <>
      <label htmlFor={id}>{title}</label>
      <Field id={id} name={name} placeholder={placeholder} />
    </>
  );
};
