"use client"

import React from 'react'
import AppLayout from '../AppLayout'
import store from './store'
import { Provider } from 'react-redux'

function ReduxProvider({ children }) {
  return (
    <Provider store={store} >

    <AppLayout>
      { children }
    </AppLayout>

    </Provider>
  )
}

export default ReduxProvider