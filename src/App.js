import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routers from '@/router'
import ErrorBoundary from '@/components/errorBoundary'
import store from '@/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <Routers />
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>

  )
}

export default App
