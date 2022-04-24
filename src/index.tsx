import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StepsProvider } from './Context'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <StepsProvider>
      <App />
    </StepsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
reportWebVitals()
