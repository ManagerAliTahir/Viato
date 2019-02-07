import React, { Component } from 'react'
import { createStackNavigator,createAppContainer} from 'react-navigation'

import ConfirmMobile from './ConfirmMobile'
import EnterName from './EnterName'
import EnterMobileNumber from './EnterMobileNumber'


const LoginStack = createStackNavigator({
  EnterMobileNumber: {
    screen: EnterMobileNumber,
  },

  ConfirmMobile: {
    screen: ConfirmMobile
  },
    EnterName: {
    screen: EnterName,
  }
}, {

        initialRouteName:'EnterName',


});


const AppContainer =createAppContainer(LoginStack);



export default class Stack extends React.Component {
  render() {
    return <AppContainer />;
  }
}
