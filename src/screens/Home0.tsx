import React, {useState, useCallback, useEffect, useRef} from 'react'
import {StyleSheet, FlatList, Image, Text} from 'react-native'
import {useNavigation, DrawerActions} from '@react-navigation/native'

// prettier-ignore
import {SafeAreaView, View, UnderlineText, TopBar,
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

  // for people
  
  const leftRef = useRef<LeftRightNavigationMethods | null>(null)
  
  return (
    <SafeAreaView>
      <TopBar>
          <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} />
          <Icon name="menu" size={30} style={styles.menuicon} onPress={open} />
          <LeftRightNavigation ref={leftRef} distance={40} onLeftToRight={goLeft} onRightToLeft={goRight} />
      </TopBar>
          <View style={[styles.container]}>
            <Image style={[styles.image]} source={require('../assets/images/trash001.jpg')} />
            <Text style={[styles.text, styles.firtext]}>쌓여가는{'\n'}쓰레기 더미 </Text>
            <Text style={[styles.text, styles.stext]}>편리하게 사용하는 일상의 도구들은 모두 쓰레기가 되어갑니다. </Text>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
  topBar: {flexDirection: 'row', padding: 5, justifyContent: 'space-between'},
  logo: {width: 30, height: 30, justifyContent: 'space-between'},
  menuicon: {marginLeft: 330, color: 'grey'},
  container: {flex: 1, backgroundColor: 'white'},
  image: {width: 360, height: 600, resizeMode: 'contain', marginTop: 35, marginLeft: 25},
  filter: {tintColor: 'gray', opacity: 0.3},

  base: {color: 'white', position: 'absolute'},
  title: {fontFamily: 'NotoSansKR-Bold', fontSize: 44, textAlign: 'left', marginTop: 245, marginLeft: 50},
  body: {fontFamily: 'NotoSansKR-Medium', fontSize: 20, marginTop: 450, marginLeft: 50, marginRight: 50}
})