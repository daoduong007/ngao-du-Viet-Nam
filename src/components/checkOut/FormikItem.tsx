import React from 'react';
import { Field } from 'formik';
interface IFormikItem {
  title: string;
  name: string;
  id: string;
  placeholder: string;
  requid?: boolean;
}

export const FormikItem = (props: IFormikItem) => {
  const { name, id, placeholder, title, requid } = props;

  return (
    <>
      <label htmlFor={id}>
        {title}{' '}
        {requid === true ? (
          <span className='red-asterisk'>*</span>
        ) : null}
      </label>
      <Field id={id} name={name} placeholder={placeholder} />
    </>
  );
};
