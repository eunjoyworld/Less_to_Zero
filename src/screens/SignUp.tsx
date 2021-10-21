import React, {useState, useCallback} from 'react'
import {StyleSheet, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
// prettier-ignore
import {SafeAreaView, View, Text, TextInput, TouchableView, UnderlineText}
from '../theme'
import * as D from '../data'
import {useAutoFocus, AutoFocusProvider} from '../contexts'
import * as L from '../store/login'

// prettier-ignore
export default function SignUp() {
  const [email, setEmail] = useState<string>(D.randomEmail())
  const [name, setName] = useState<string>(D.randomName())
  const [password, setPassword] = useState<string>('1')
  const [confirmPassword, setConfirmPassword] = useState<string>(password)
  const focus = useAutoFocus()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  
  const goTabNavigator = useCallback(() => {
    if (password === confirmPassword) {
      dispatch(L.loginAction({name, email, password}))
      navigation.navigate('TabNavigator')
    }
    else
      Alert.alert('password is invalid')
  }, [password, confirmPassword])
  const goLogin = useCallback(() => navigation.navigate('Login'), [])

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <AutoFocusProvider
          contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>이용약관</Text>
            <Text style={[styles.stext]}>일상에서 만나는 친환경 라이프 스타일 플랫폼 'Less to Zero'의 서비스 이용약관은 다음과 같습니다.</Text>
          </View>
          <View style={[styles.textView]}>  
            <Text style={[styles.stext]}>제1조(목적){'\n'}본 약관은 서비스를 이용하는 데 필요한 권리, 의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정하고 있으므로 주의 깊게 읽어주시기 바랍니다.</Text>
          </View>
          <TouchableView notification style={[styles.touchableView]}
            onPress={goLogin}>
            <Text style={[styles.btext]}>이전으로 돌아가기</Text>
          </TouchableView>
        </AutoFocusProvider>
      </View>
    </SafeAreaView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  text: {fontSize: 20},
  stext: {fontSize: 15},
  btext: {fontSize: 20, color: 'white'},
  keyboardAwareFocus: {flex: 1, padding: 5, alignItems: 'center',
    justifyContent: 'center'},
  textView: {width: '100%', padding: 5, marginBottom: 10},
  touchableView: {flexDirection: 'row', height: 50, borderRadius: 10, width: '50%',
    justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}
})