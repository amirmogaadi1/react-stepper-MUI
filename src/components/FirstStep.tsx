import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// import FormHelperText from '@mui/material/FormHelperText'
// import Checkbox from '@mui/material/Checkbox'
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import { AppContext } from '../Context'

export default function FirstStep() {
  const { formValues, handleChange, handleNext } = useContext(AppContext)
  const { traitment } = formValues

  const isError = useCallback(
    () =>
      Object.keys({ traitment }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues,traitment]
  )

  return (
    <>
          <Box sx={{ my: 5 }}>
            <Typography variant='h4' sx={{ mt: 2 }}>
            Choose your type of treatment
           </Typography>
          </Box>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label="traitment"
            name="traitment"
            value={traitment.value}
            onChange={handleChange}
            error={!!traitment.error}
            helperText={traitment.error}
            required={traitment.required}
          >
            <option value=""> </option>
            <option value="Yoga">Yoga</option>
            <option value="Massage">Massage</option>
          </TextField>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
