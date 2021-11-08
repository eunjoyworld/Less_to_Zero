import React, {useCallback, useRef} from 'react'
import {StyleSheet, Image, Text} from 'react-native'
import {useNavigation, DrawerActions, StackActions} from '@react-navigation/native'
import {SafeAreaView, View, UnderlineText, TopBar, NavigationHeader} from '../theme'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Top from './Top'
import HomeNavigator from './HomeNavigator'
import SugNavigator from './SugNavigator'
import Counter from './Counter'
import Clock from './Clock'
import People from './People'
import UseReducer from './UseReducer'

import type {RouteProp, ParamListBase} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

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
      return <Icon name={iconName} size={focusedSize} color={color} />
    },
    tabBarInactiveTintColor: 'grey',
    tabBarActiveTintColor: 'darkgreen'
  }
}

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
// prettier-ignore
export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} options={{tabBarLabel: '메인'}} />
      <Tab.Screen name="Counter" component={SugNavigator} options={{tabBarLabel: '제안'}} />
      <Tab.Screen name="Clock" component={Clock} options={{tabBarLabel: '지도'}} />
      <Tab.Screen name="People" component={People} options={{tabBarLabel: '커뮤니티'}} />
      <Tab.Screen name="UseReducer" component={UseReducer} options={{tabBarLabel: '기타'}} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
  topBar: {flexDirection: 'row', padding: 5, justifyContent: 'space-between'},
  logo: {width: 30, height: 30, justifyContent: 'space-between'},
  icon: {marginLeft: 330, color: 'grey'},
})