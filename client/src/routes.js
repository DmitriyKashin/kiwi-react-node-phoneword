import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { PhonewordsPage } from './pages/PhonewordsPage'
import { AddPhonewordPage } from './pages/AddPhonewordPage'

export const useRoutes = () => {
  return  (
    <Switch>
      <Route path="/phonewords" exact>
        <PhonewordsPage />
      </Route>
      <Route path="/phonewords/add" exact>
        <AddPhonewordPage />
      </Route>
      <Redirect to="/phonewords"></Redirect>
    </Switch>
  )
}