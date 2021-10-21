import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeNavigator from './HomeNavigator'
import Counter from './Counter'
import Clock from './Clock'
import People from './People'
import UseReducer from './UseReducer'

import type {RouteProp, ParamListBase} from '@react-navigation/native'
type TabBarIconProps = {focused: boolean; color: string; size: number}

const icons: Record<string, string[]> = {
  HomeNavigator: ['home', 'home-outline'],
  Counter: ['check', 'check-outline'],
  Clock: ['map-marker-radius', 'map-marker-radius-outline'],
  People: ['message-text', 'message-text-outline'],
  UseReducer: ['pin', 'pin-outline']
}

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => {
  return {
    headerShown : false,
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const {name} = route
      const focusedSize = focused ? size + 2 : size
      const focusedColor = focused ? Colors.lightGreen500 : color
      const [icon, iconOutline] = icons[name]
      const iconName = focused ? icon : iconOutline
      return <Icon name={iconName} size={focusedSize} color={focusedColor} />
    }
  }
}

const Tab = createBottomTabNavigator()
// prettier-ignore
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} options={{tabBarLabel: '메인'}} />
      <Tab.Screen name="Counter" component={Counter} options={{tabBarLabel: '제안'}} />
      <Tab.Screen name="Clock" component={Clock} options={{tabBarLabel: '지도'}} />
      <Tab.Screen name="People" component={People} options={{tabBarLabel: "커뮤니티", tabBarBadge: 1}} />
      <Tab.Screen name="UseReducer" component={UseReducer} options={{tabBarLabel: '기타'}} />
    </Tab.Navigator>
  )
}