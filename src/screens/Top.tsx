import React, {useState, useCallback, useEffect, useRef} from 'react'
import {StyleSheet, FlatList, Image, Text} from 'react-native'
import {useNavigation, DrawerActions} from '@react-navigation/native'
// prettier-ignore
import {SafeAreaView, View, UnderlineText,TopBar,
NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts'
import {LeftRightNavigation} from '../components'
import type {LeftRightNavigationMethods} from '../components'
import {useDispatch} from 'react-redux'
import * as L from '../store/login'
import { assets } from '../../react-native.config'

// prettier-ignore
export default function Home() {
  // navigation
  const navigation = useNavigation()
  const goLeft = useCallback(() => navigation.navigate('HomeLeft'), [])
  const goRight = useCallback(
    () => navigation.navigate('HomeRight', {name: 'Jack', age: 32}), [])
  const open = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer())}, [])
  const logout = useCallback(() => {
    navigation.navigate('Login')
  }, [])

  // for people
  
  const leftRef = useRef<LeftRightNavigationMethods | null>(null)
  
  return (
    <SafeAreaView>
      <TopBar>
          <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} />
          <Icon name="menu" size={30} style={styles.icon} onPress={open} />
          <LeftRightNavigation ref={leftRef} distance={40} onLeftToRight={goLeft} onRightToLeft={goRight} />
      </TopBar>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
  topBar: {flexDirection: 'row', padding: 5, justifyContent: 'space-between'},
  logo: {width: 30, height: 30, justifyContent: 'space-between'},
  icon: {marginLeft: 330, color: 'grey'},
  container: {flex: 1, backgroundColor: 'white'},
  image: {width: 360, height: 600, resizeMode: 'contain', marginTop: 35, marginLeft: 25},
  filter: {tintColor: 'gray', opacity: 0.3},

  text: {color: 'white', position: 'absolute'},
  firtext: {fontFamily: 'NotoSansKR-Bold', fontSize: 44, textAlign: 'left', marginTop: 245, marginLeft: 50},
  stext: {fontFamily: 'NotoSansKR-Medium', fontSize: 20, marginTop: 450, marginLeft: 50, marginRight: 50}
})