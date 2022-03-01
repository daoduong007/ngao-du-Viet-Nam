import * as Yup from 'yup';
export   const validationSchema = Yup.object({
  firstName: Yup.string().required('this is a required field'),
  lastName: Yup.string().required(),
  email: Yup.string().email('email is not valid').required('this is a required field'),
  phoneNumber: Yup.string().required('this is a required field'),
  address: Yup.string().required(),
  city: Yup.string().required(),
  province: Yup.string().required(),
  zipCode: Yup.string().required(),
  country: Yup.string().required(),
  specialRequiment: Yup.string().required(),
  paymentMethod: Yup.string().required(),
});