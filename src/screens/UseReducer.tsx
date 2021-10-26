import React, {useCallback} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {TopBar, TouchableView, MaterialCommunityIcon as Icon} from '../theme'

// prettier-ignore

type Props = {};

export default function UseReducer() {
  const navigation = useNavigation()
  const goTabNavigator = useCallback(() => {
    navigation.navigate('TabNavigator')
  }, [])
  const goSignUp = useCallback(() => navigation.navigate('SignUp'), [])

    return (
      <View style={[styles.flex]}>
      <TopBar>
        <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} />
      </TopBar>
      <TouchableView notification style={[styles.top, styles.touchableView]}
            onPress={goTabNavigator}>
            <Icon name="wrench" size={24} style={styles.icon} />
            <Text style={styles.name}> 문의하기 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Icon name="alert-circle" size={24} style={styles.icon} />
            <Text style={styles.name}> 개인정보 처리방침 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Icon name="account" size={24} style={styles.icon} />
          <Text style={styles.name}> 이용약관 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Icon name="map-marker" size={24} style={styles.icon} />
          <Text style={styles.name}> 위치기반서비스 이용약관 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Icon name="text-box-search" size={24} style={styles.icon} />
          <Text style={styles.name}> 운영정책 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Icon name="text-box-multiple-outline" size={24} style={styles.icon} />
          <Text style={styles.name}> 오픈소스 라이센스 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Icon name="home-modern" size={24} style={styles.icon} />
          <Text style={styles.name}> 팀 소개 </Text>
        </TouchableView>
        <View style={styles.line} />

        <TouchableView notification style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Icon name="check-circle-outline" size={24} style={styles.icon} />
          <Text style={styles.name}> 버전 </Text>
        </TouchableView>
        <View style={[styles.line, styles.vBottom]} />

      </View>
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
  top: {marginTop: 100},
  gap: {padding: 16, paddingLeft:80, paddingTop:20},
  touchableView:
    {flexDirection: 'row', height: 50, borderRadius: 10, width: '80%', alignItems: 'center', backgroundColor: 'white'}
  })
