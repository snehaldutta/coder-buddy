import React from 'react'
import { Route, Switch } from 'wouter'

import HeaderComponent from './components/header'
import TextareaCompontent from './components/chat-input'
import './index.css'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/c/header' component={() => <HeaderComponent />} /> 
        <Route path='/c/textarea' component={() => <TextareaCompontent />} /> 
      </Switch>
    </React.Fragment>
  )
}

export default App
