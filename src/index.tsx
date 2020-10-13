import React from 'react'
import ReactDOM from 'react-dom'
import UploadsPage from 'pages/UploadsPage'
import UploadDetailPage from 'pages/UploadDetailPage'
import * as serviceWorker from './serviceWorker'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const AppWrapper = styled.div``

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/uploads" />
          </Route>

          <Route exact path="/uploads">
            <UploadsPage />
          </Route>

          <Route path="/uploads/:id">
            <UploadDetailPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
