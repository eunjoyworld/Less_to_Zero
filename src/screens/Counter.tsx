import React, {useCallback} from 'react'
import {StyleSheet, ScrollView, Image} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigation, DrawerActions} from '@react-navigation/native'
import {LeftRightNavigation} from '../components'
import type {LeftRightNavigationMethods} from '../components'
// prettier-ignore
import {View, Text, NavigationHeader, TopBar, TouchableView,
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

  const goRefuse = useCallback(() => navigation.navigate('Refuse'), [])
  const goReuse = useCallback(() => navigation.navigate('Reuse'), [])
  const goHome = useCallback(() => navigation.navigate('Login'), [])
  
  return (
    <ScrollView contentContainerStyle={[styles.view]}>
    <View style={[styles.flex]}>
      <TopBar>
        <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} onPress={open} />
      </TopBar>
      <View style={[styles.suflex, styles.sutop]}>
        <Text style={[styles.sutext]}>일상의 선택, {'\n'}친환경 라이프 스타일</Text>
        <Text style={[styles.sustext]}>크고 작은 선택에서 시작하는 환경의 변화</Text>
      </View>
      <View style={[styles.flex]}>
        <Text style={[styles.text, styles.top]}>첫번째 제안, {'\n'}쓰레기 다시보기</Text>
        <Text style={[styles.stext]}>하루의 일과를 떠올려봅시다.{'\n'}생각보다 우리의 주변에서 당연하게 사용하는 많은 물건들.</Text>
        <Text style={[styles.stext, styles. top]}>저마다의 용도에 따라 생겨난 수많은 생산품들이 쌓여갑니다. </Text>
        <Image style={[styles.image]} source={require('../assets/images/trash010.jpg')} />
      </View>
      <View style={[styles.flex]}>
      <Text style={[styles.text, styles.top]}>생각보다 가까이에서 만날 수 있는, {'\n'}친환경 실천</Text>
      <Text style={[styles.stext]}>환경을 생각한다는 것이 지금부터 당장 모든 생활을 완전히 바꾸자는 이야기가 아닙니다.
      일상에서 생겨나는 쓰레기를 살펴보는 것에서부터, 환경에 대한 관심이 시작됩니다.</Text>
      <Image style={[styles.image]} source={require('../assets/images/jup1.jpg')} />
      </View>
      <View style={[styles.flex]}>
      <Text style={[styles.text, styles.top]}>제로웨이스트라는 이름, {'\n'}어쩌면 미니멀라이프</Text>
      <Text style={[styles.stext]}>레스투제로는 일상에서 만나는 친환경 라이프 스타일을 제안합니다.
      일상에서 마주하는 쓰레기를 줄이는 것에서부터(LESS),{'\n'}나아가 쓰레기를 생겨나지 않게 하는 삶까지(Zero){'\n'}제안합니다.</Text>
      <Image style={[styles.image]} source={require('../assets/images/lessismore.jpg')} />
      </View>

      <TouchableView notification style={[styles.touchableView]}
            onPress={goRefuse}>
      <Text style={[styles.mtop]}>REFUSE</Text>
      <Text style={[styles.mtext]}>불필요한 물건은 거절하기</Text>
      </TouchableView>
      <TouchableView notification style={[styles.touchableView]}
            onPress={goHome}>
      <Text style={[styles.mtop]}>REDUCE</Text>
      <Text style={[styles.mtext]}>쓰레기의 양을 살펴 줄여보기</Text>
      </TouchableView>
      <TouchableView notification style={[styles.touchableView]}
            onPress={goReuse}>
      <Text style={[styles.mtop]}>REUSE</Text>
      <Text style={[styles.mtext]}>일회용품이 아닌 다회용 제품 이용하기</Text>
      </TouchableView>
      <TouchableView notification style={[styles.touchableView]}
            onPress={goHome}>
      <Text style={[styles.mtop]}>RECYCLE</Text>
      <Text style={[styles.mtext]}>재활용하기</Text>
      </TouchableView>
      <TouchableView notification style={[styles.touchableView]}
            onPress={goHome}>
      <Text style={[styles.mtop]}>ROT</Text>
      <Text style={[styles.mtext]}>자연으로 돌아갈 썩는 제품 사용하기</Text>
      </TouchableView>
      <Text style={[styles.last]} />
      </View>
    </ScrollView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  view: {flexDirection: 'row'},
  suflex: {flex: 1, backgroundColor: 'white'},
  flex: {flex: 1},
  logo : {width: 30, height: 30},
  image: {width: 384, height: 250, marginLeft: 14, marginBottom: 20},
  sutop: {marginTop: 0},
  sutext: {fontFamily: 'NotoSansKR-Bold', fontSize: 30, marginTop: 10, marginLeft: 12, lineHeight: 40},
  sustext: {fontFamily: 'NotoSansKR-Medium', fontSize: 16, marginLeft: 14, marginBottom: 30, lineHeight: 20},
  top: {marginTop: 20},
  mtop: {fontFamily: 'NotoSansKR-Medium', fontSize: 30, textAlign: 'center', marginTop: 80, lineHeight: 40},
  mtext: {fontFamily: 'NotoSansKR-Light', fontSize: 28, textAlign: 'center', lineHeight: 40},
  text: {fontSize: 26, marginLeft: 14},
  stext: {fontSize: 17, marginLeft: 14, marginTop: 4, marginRight: 16, marginBottom: 16},
  touchableView: {flexDirection: 'row', height: 200, borderRadius: 10, width: '50%',
    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 80},
  last: {marginBottom: 80}
})