import React, { useContext } from 'react'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Paper from '@mui/material/Paper'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import Success from './Success'
import ThirdStep from './ThirdStep' 
import './style.css'
import { AppContext } from '../Context'

// Step titles
const labels = ['Choose Treatment', 'Personal Info', 'Privacy Policy']
const handleSteps = (step: number) => {
  switch (step) {
   
      case 0:
        return <FirstStep />
    case 1:
      return <SecondStep />
      case 2:
        return <ThirdStep/>
    default:
      throw new Error('Unknown step')
  }
}

const StepForm = () => {
  const { activeStep } = useContext(AppContext)

  return (
    <>
     {activeStep === labels.length ? (
        <Success />
      ) : ( 
        <>
          <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} className="stepper-header">
          <Stepper activeStep={activeStep} sx={{ py: 4 }} alternativeLabel  >
            {labels.map((label) => (
              <Step key={label} style={{display:"flex",flexDirection:"row"}}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          </Paper>
          {handleSteps(activeStep)}
        </>
       )} 
    </>
  )
}

export default StepForm
