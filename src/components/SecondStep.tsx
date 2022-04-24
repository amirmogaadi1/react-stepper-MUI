import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { AppContext } from '../Context'

export default function SecondStep() {
  const { formValues, handleChange, handleNext, handleBack } = useContext(AppContext)
  const { firstName, lastName, email,phone } = formValues

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, email,phone }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, firstName, lastName, email,phone]
  )

  return (
    <>
     <Box sx={{ my: 5 }}>
            <Typography variant='h4' sx={{ mt: 2 }}>
            Fill in your personal information
            Description
           </Typography>
          </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            label='First Name'
            name='firstName'
            placeholder='Your first name'
            value={firstName.value}
            onChange={handleChange}
            error={!!firstName.error}
            helperText={firstName.error}
            required={firstName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            label='Last Name'
            name='lastName'
            placeholder='Your last name'
            value={lastName.value}
            onChange={handleChange}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            label='Email'
            name='email'
            placeholder='Your email address'
            type='email'
            value={email.value}
            onChange={handleChange}
            error={!!email.error}
            helperText={email.error}
            required={email.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Phone'
            name='phone'
            placeholder='Your phone number'
            type='phone'
            value={phone.value}
            onChange={handleChange}
            error={!!phone.error}
            helperText={phone.error}
            required={phone.required}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
      <Button onClick={handleBack} sx={{ mr: 1 }} color='primary' variant='contained'>
         PREVIOUS
         </Button>
         <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
           NEXT
         </Button>
       </Box>
    </>
  )
}

