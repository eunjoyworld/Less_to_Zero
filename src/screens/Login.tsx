import React, {useState, useCallback} from 'react'
import {StyleSheet} from 'react-native'
import {useNavigation} from '@react-navigation/native'
// prettier-ignore
import {SafeAreaView, View, Text, TextInput, TouchableView, UnderlineText}
from '../theme'
import * as D from '../data'
import {useAutoFocus, AutoFocusProvider} from '../contexts'
import {useDispatch} from 'react-redux'
import * as L from '../store/login'

// prettier-ignore
export default function Login() {
  const [email, setEmail] = useState<string>(D.randomEmail())
  const [name, setName] = useState<string>(D.randomName())
  const [password, setPassword] = useState<string>(
    D.random(10000, 1000000).toString())
  const focus = useAutoFocus()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const goTabNavigator = useCallback(() => {
    dispatch(L.loginAction({email, name, password}))
    navigation.navigate('TabNavigator')
  }, [])
  const goSignUp = useCallback(() => navigation.navigate('SignUp'), [])
  
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <AutoFocusProvider contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View style={[styles.textView]}>
            <Text style={[styles.stitle]}>일상에서 만나는</Text>
            <Text style={[styles.title]}>친환경{'\n'}라이프{'\n'}스타일</Text>
            <Text style={[styles.text]}>
              일상에서 선택할 수 있는 방법을 알아보아요{'\n'}
              주변의 환경 친화적 공간을 알려드려요{'\n'}
              다양한 이야기 그리고 커뮤니티와 만나요
            </Text>
          </View>
          <UnderlineText style={[styles.stext, {marginTop: 20, marginBottom: 15}]} onPress={goSignUp}>
            이용약관 살펴보기
          </UnderlineText>
          <TouchableView notification style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Text style={[styles.btext]}>이용약관에 동의하고 시작하기</Text>
          </TouchableView>
        </AutoFocusProvider>
      </View>
    </SafeAreaView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  title: {fontFamily: 'NotoSansKR-Bold', fontSize: 36, fontWeight: '900', textAlign: 'center', lineHeight: 40},
  stitle: {fontFamily: 'NotoSansKR-Thin', fontSize: 16, textAlign: 'center', lineHeight: 30},
  text: {fontFamily: 'NotoSansKR-Thin', fontSize: 18, textAlign: 'center'},
  stext: {fontSize: 15},
  btext: {fontSize: 20, color: 'white'},

  keyboardAwareFocus: {flex: 1, padding: 5, alignItems: 'center', justifyContent: 'center'},
  textView: {width: '100%', padding: 5, marginBottom: 10},
  textInput: {fontSize: 24, padding: 10},
  textInputView: {marginTop: 5, borderRadius: 10},
  touchableView:
    {flexDirection: 'row', height: 50, borderRadius: 10, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellowgreen'}
})