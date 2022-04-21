import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export   const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Fist Name is a required field'),
  lastName: Yup.string().required('Last Name is a required field'),
  email: Yup.string().email('Email is not valid').required('Email is a required field'),
  phoneNumber: Yup.string().matches(phoneRegExp,'Phone Number is not valid').required('Phone number is a required field'),
});

export const validationSchemaContactUs = Yup.object().shape({
  yourEmail: Yup.string().email('Email is not valid'),
  yourPhone: Yup.string().matches(phoneRegExp,'Your phone is not valid'),
})

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string().email('Email is not valid').required('Email is a required field'),
  password: Yup.string().required('Password is a required field'),
})


export const validationSchemaSignUp = Yup.object().shape({
  firstName: Yup.string().required('First name is a required field'),
  lastName: Yup.string().required('Last name is a required field'),
  email: Yup.string().required('Email is a required field').email('Email is not valid'),
  password: Yup.string().required('Password is a required field'),
})

export * from './filter';
export * from './debounce'