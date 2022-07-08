import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import { store } from './stores/index'
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
      <FlashMessage position="top" duration={6000} />
    </Provider>
  )
}

export default App
