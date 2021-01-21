import * as Yup from 'yup'

export const signInValidationRules = Yup.object().shape({
  email: Yup.string().required('Email is required.').email('Email must be a valid email format.'),
  password: Yup.string().required('Password is required.').min(6, 'Must be at least 6 characters').
})