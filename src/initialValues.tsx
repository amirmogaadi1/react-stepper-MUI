import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
  firstName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  lastName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  email: {
    value: '',
    error: '',
    validate: 'email'
  },
  traitment: {
    value: '',
    error: '',
    validate: 'select',
    required: true,

  },
 
  agreenemt0: {
    value: false,
    error: '',
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  agreenemt1: {
    value: false,
    error: '',
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  agreenemt2: {
    value: false,
    error: '',
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  agreenemt3: {
    value: false,
    error: '',
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  phone: {
    value: '',
    error: '',
    validate: 'phone',
    maxLength: 12
  }
}
