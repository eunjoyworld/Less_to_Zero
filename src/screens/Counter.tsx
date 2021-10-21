import React, {useCallback} from 'react'
import {StyleSheet, ScrollView, Image} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigation, DrawerActions} from '@react-navigation/native'
import {LeftRightNavigation} from '../components'
import type {LeftRightNavigationMethods} from '../components'
// prettier-ignore
import {View, Text, NavigationHeader, TopBar,
  MaterialCommunityIcon as Icon} from '../theme'

import type {AppState} from '../store'
import * as C from '../store/counter'

// prettier-ignore
export default function Counter() {
  const counter = useSelector<AppState, C.State>(state => state.counter)
  const dispatch = useDispatch()
  const increaseCounter = useCallback(() => {
    dispatch(C.increaseAction())
  }, [])
  const decreaseCounter = useCallback(() => {
    dispatch(C.decreaseAction())
  }, [])
  const navigation = useNavigation()
  const open = useCallback(() => {
    navigation.dispatch(DrawerActions.openDrawer())}, [])
  
  return (
    <ScrollView contentContainerStyle={[styles.view]}>
    <View style={[styles.flex]}>
      <TopBar>
        <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} onPress={open} />
      </TopBar>
      <View style={[styles.flex]}>
        <Text style={[styles.text, styles.top]}>일상의 제안, {'\n'}쓰레기 다시보기</Text>
        <Text style={[styles.stext]}>하루의 일과를 떠올려봅시다. 생각보다 우리의 주변에서 당연하게 사용하는 많은 물건들.</Text>
        <Text style={[styles.stext, styles. top]}>저마다의 용도에 따라 생겨난 수많은 생산품들이 쌓여갑니다. </Text>
        <Image style={[styles.image]} source={require('../assets/images/trash010.jpg')} />
      </View>
      <View style={[styles.flex]}>
      <Text style={[styles.text, styles.top]}>제로웨이스트라는 이름, {'\n'}어쩌면 미니멀라이프</Text>
      <Text style={[styles.stext]}>환경을 생각한다는 것이 지금부터 당장 생활습관을 완전히 바꾸자는 이야기는 아닙니다.</Text>

      </View>
    </View>
    </ScrollView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  view: {flexDirection: 'row'},
  flex: {flex: 1},
  logo : {width: 30, height: 30},
  image: {width: 350, height: 500, marginLeft: 20},
  top: {marginTop: 20},
  text: {fontSize: 30, marginLeft: 20},
  stext: {fontSize: 16, marginLeft: 20, marginTop: 4, marginRight: 16, marginBottom: 16}
})