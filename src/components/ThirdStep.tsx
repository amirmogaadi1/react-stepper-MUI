
import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import { AppContext } from '../Context'

export default function ThirdStep() {
  const { formValues, handleChange, handleBack, handleNext} = useContext(AppContext)
  const { agreenemt0,agreenemt1,agreenemt2,agreenemt3 } = formValues

  const isError = useCallback(
    () =>
      Object.keys({ agreenemt0,agreenemt1,agreenemt2,agreenemt3 }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues,agreenemt0,agreenemt1,agreenemt2,agreenemt3]
  )
  return (
    <>
     <Box sx={{ my: 5 }}>
            <Typography variant='h4' sx={{ mt: 2 }}>
            Fill in your Privacy Policy 
           </Typography>
          </Box>
      <Grid container spacing={2}>
      <Grid item xs={12}>
            <FormControlLabel
            control={
              <Checkbox
                checked={agreenemt0.value}
                onChange={handleChange}
                name='agreenemt0'
                color='primary'
                required={agreenemt0.required}
              />
            }
            label='I agree to allow the company to process the data that I have filled in'
          />
          <FormHelperText error={!!agreenemt1.error}>{agreenemt1.error}</FormHelperText>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel
            control={
              <Checkbox
                checked={agreenemt1.value}
                onChange={handleChange}
                name='agreenemt1'
                color='primary'
                required={agreenemt1.required}
              />
            }
            label='I want to receive a newsletter from the company every week'
          />
          <FormHelperText error={!agreenemt1.error}>{agreenemt1.error}</FormHelperText>
        </Grid>
       
        <Grid item xs={12}>
            <FormControlLabel
            control={
              <Checkbox
                checked={agreenemt2.value}
                onChange={handleChange}
                name='agreenemt2'
                color='primary'
                required={agreenemt2.required}
              />
            }
            label='I agree to be informed via email of future offers for my chosen treatments'
          />
          <FormHelperText error={!agreenemt1.error}>{agreenemt1.error}</FormHelperText>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel
            control={
              <Checkbox
                checked={agreenemt3.value}
                onChange={handleChange}
                name='agreenemt3'
                color='primary'
                required={agreenemt3.required}
              />
            }
            label='I allow tracking of basic user interaction to help the company improve user experience'
          />
          <FormHelperText error={!agreenemt1.error}>{agreenemt1.error}</FormHelperText>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }} >
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

