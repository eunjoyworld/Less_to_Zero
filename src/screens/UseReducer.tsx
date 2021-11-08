import React, {useCallback, useRef} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {useNavigation, DrawerActions} from '@react-navigation/native'
import {LeftRightNavigation} from '../components'
import type {LeftRightNavigationMethods} from '../components'
import {TopBar, TouchableView, MaterialCommunityIcon as Icon, SafeAreaView} from '../theme'

// prettier-ignore

type Props = {};

export default function UseReducer() {
    // navigation
  const navigation = useNavigation()
  const goLeft = useCallback(() => navigation.navigate('HomeLeft'), [])
  const goRight = useCallback(
      () => navigation.navigate('HomeRight', {name: 'Jack', age: 32}), [])
  const open = useCallback(() => {
      navigation.dispatch(DrawerActions.openDrawer())}, [])
  // for people
  const leftRef = useRef<LeftRightNavigationMethods | null>(null)


  const goSignUp = useCallback(() => navigation.navigate('SignUp'), [])
  const goAsk = useCallback(() => navigation.navigate('Ask'), [])
  const goPrivacy = useCallback(() => navigation.navigate('Privacy'), [])
  const goTac = useCallback(() => navigation.navigate('Tac'), [])
  const goTacforplace = useCallback(() => navigation.navigate('Tacforplace'), [])
  const goManagementp = useCallback(() => navigation.navigate('Managementp'), [])
  const goOpensource = useCallback(() => navigation.navigate('Opensource'), [])
  const goTeamintro = useCallback(() => navigation.navigate('Teamintro'), [])
  const goVersion = useCallback(() => navigation.navigate('Version'), [])

    return (
      <SafeAreaView>
      <TopBar>
          <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} />
          <Icon name="menu" size={30} style={styles.menuicon} onPress={open} />
          <LeftRightNavigation ref={leftRef} distance={40} onLeftToRight={goLeft} onRightToLeft={goRight} />
      </TopBar>

      <View style={[styles.flex]}>
      <TouchableView notification style={[styles.top, styles.touchableView]}
            onPress={goAsk}>
            <Icon name="wrench" size={24} style={styles.icon} />
            <Text style={styles.name}> 문의하기 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goPrivacy}>
            <Icon name="alert-circle" size={24} style={styles.icon} />
            <Text style={styles.name}> 개인정보 처리방침 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTac}>
            <Icon name="account" size={24} style={styles.icon} />
          <Text style={styles.name}> 이용약관 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTacforplace}>
            <Icon name="map-marker" size={24} style={styles.icon} />
          <Text style={styles.name}> 위치기반서비스 이용약관 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goManagementp}>
            <Icon name="text-box-search" size={24} style={styles.icon} />
          <Text style={styles.name}> 운영정책 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goOpensource}>
            <Icon name="text-box-multiple-outline" size={24} style={styles.icon} />
          <Text style={styles.name}> 오픈소스 라이센스 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTeamintro}>
            <Icon name="home-modern" size={24} style={styles.icon} />
          <Text style={styles.name}> 팀 소개 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goVersion}>
            <Icon name="check-circle-outline" size={24} style={styles.icon} />
          <Text style={styles.name}> 버전 </Text>
        </TouchableView>
        <View style={[styles.line, styles.vBottom]} />
      </View>
      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: 'white'},
  logo : {width: 30, height: 30},
  container: {flex: 1},
  header: {height: 60, backgroundColor: 'green'},
  footer: {height: 60, backgroundColor: 'red'},
  content: {flex: 1},

  line: {width: '76%', borderBottomWidth: 1, borderColor: '#444', marginLeft: 44, marginBottom: 5},
  
  elem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingLeft: 80,
    paddingTop: 20
  },
  userInfo: {flexDirection: 'row', alignItems: 'center'},
  profile: {width: 20, height: 20, borderRadius: 25, backgroundColor: 'green'},
  vTop: {paddingTop: 100},
  name: {paddingLeft: 10, fontSize: 18, lineHeight: 20},
  icon: {marginLeft: 40},
  menuicon: {marginLeft: 330, color: 'grey'},
  top: {marginTop: 100},
  gap: {padding: 16, paddingLeft:80, paddingTop:20},
  touchableView:
    {flexDirection: 'row', height: 50, borderRadius: 10, width: '80%', alignItems: 'center', backgroundColor: 'white'}
  })
