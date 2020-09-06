import React, { Suspense } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import ErrorBoundary from '@/components/errorBoundary'
import Layout from '@/components/layout'
import Login from '@/pages/login'
import NotFound from '@/pages/notFound'
import store from '@/store'
import { BASE_PATH } from '@/utils/config'

import 'antd/dist/antd.css' // antd 默认样式

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path={BASE_PATH} component={Layout} />
              <Route path='/login' component={Login} exact />
              <Route path='/404' component={NotFound} exact />
              <Redirect from='/' to={`${BASE_PATH}/home`} exact />
              <Redirect to='/404' />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </HashRouter>
    </Provider>
  )
}

export default App
