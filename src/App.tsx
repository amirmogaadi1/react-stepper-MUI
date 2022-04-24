import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'

const theme = createTheme()

const App = () => (
  <ThemeProvider theme={theme}>
    <Container component='main' maxWidth='md' sx={{ mb: 4 }}>
       <Typography>React app</Typography>
    </Container>
  </ThemeProvider>
)

export default App
