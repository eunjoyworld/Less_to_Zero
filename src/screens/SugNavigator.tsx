import React, {useMemo} from 'react'
import {StyleSheet, FlatList, Image, Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import type {StackNavigationOptions} from '@react-navigation/stack'
import {SafeAreaView, View, UnderlineText, TopBar,
  NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'

import {useNavigationHorizontalInterpolator} from '../hooks'

import Refuse from '../screens/Refuse'
import Reduce from '../screens/Reduce'
import Reuse from '../screens/Reuse'
import Recycle from '../screens/Recycle'
import Rot from '../screens/Rot'
import Counter from './Counter'

const Stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()


// prettier-ignore
export default function SugNavigator() {
  const interpolator = useNavigationHorizontalInterpolator()
  const leftOptions = useMemo<StackNavigationOptions>(() => ({
      gestureDirection: 'horizontal-inverted',
      cardStyleInterpolator: interpolator
    }), [])
  const rightOptions = useMemo<StackNavigationOptions>(() => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator
    }), [])
      
  return(
    <Tab.Navigator>
      <Tab.Screen name="Refuse" component={Refuse} />
      <Tab.Screen name="Reduce" component={Reduce} />
      <Tab.Screen name="Reuse" component={Reuse} />
      <Tab.Screen name="Recycle" component={Recycle} />
      <Tab.Screen name="Rot" component={Rot} />
    </Tab.Navigator>
  )
}