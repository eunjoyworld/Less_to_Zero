import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Login'
import SignUp from './SignUp'
import TabNavigator from './TabNavigator'
import DrawerContent from './DrawerContent'

import Top from './Top'
import Ask from './Ask'

import Refuse from './Refuse'
import Reuse from './Reuse'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="SignUp" component={SignUp} />
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
      />
      <Stack.Screen name="Refuse" component={Refuse} />
      <Stack.Screen name="Reuse" component={Reuse} />
      <Stack.Screen name="Ask" component={Ask} />
    </Drawer.Navigator>
  )
}