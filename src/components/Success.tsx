import React, { useContext } from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper/Paper'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import { AppContext } from '../Context'


export default function Success() {
  const { formValues,handleBack } = useContext(AppContext)
  const { firstName, lastName, email ,traitment,phone} = formValues
  return (
  <>
     <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} className="stepper-header">

      <Typography variant='h2' align='center' sx={{ py: 4 }}>
      RESULTS
      </Typography>
      </Paper>
      <Grid container spacing={3}>
     
      <Grid item xs={4}>
      <Typography>
        USER PERSONAL INFO
        </Typography>  
          <ListItemText primary='Full Name' secondary={firstName.value + lastName.value} />
          <ListItemText primary='Email Address' secondary={email.value } />
          <ListItemText primary='phone' secondary={phone.value || 'Not Provided'} />

     </Grid>
    
      <Grid item xs={4}>
      <Typography>
      USER TYPE OF TREATMENT 
      </Typography>  
       <ListItemText primary='traitment' secondary={traitment.value || 'Not Provided'} />
      </Grid>
      
    </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
       
      </Box>
      </>
  )
}


