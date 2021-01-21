import React from 'react'
import { Formik, Field } from 'formik'
import PropTypes from 'prop-types'
import { View } from 'react-native'

const SignInForm = (props) => {
  return (
    <View>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={signInValidationRules}>
        {({ }) => {
          <View>
          <Field name='Email Address'/>
        </View>}}
      </Formik>
    </View>
  )
}

SignInForm.propTypes = {}

export default SignInForm
