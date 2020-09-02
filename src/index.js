import React from 'react'
import { render } from 'react-dom'
import App from './App'

import '@/assets/css/reset.css' // reset css

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
render(<App />, document.getElementById('root'))