import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import StepForm from './components/StepForm'

const theme = createTheme()

const App = () => (
  <ThemeProvider theme={theme}>
    <Container component='main' maxWidth='md' sx={{ mb: 4 }}>
        <StepForm />
    </Container>
  </ThemeProvider>
)

export default App
