import React, {useState, useCallback} from 'react'
import {StyleSheet, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
// prettier-ignore
import {SafeAreaView, View, Text, TextInput, TopBar, TouchableView, UnderlineText, MaterialCommunityIcon as Icon}
from '../theme'
import * as D from '../data'
import {useAutoFocus, AutoFocusProvider} from '../contexts'
//import {loginAction} from '../store'
import * as L from '../store/login'

export default function Ask() {
  const [email, setEmail] = useState<string>(D.randomEmail())
  const [name, setName] = useState<string>(D.randomName())
  const [password, setPassword] = useState<string>('1')
  const [confirmPassword, setConfirmPassword] = useState<string>(password)
  const focus = useAutoFocus()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const goTabNavigator = useCallback(() => {
    if (password === confirmPassword) {
      //dispatch(L.loginAction({email, name, password}))
      dispatch(L.signUpAction({email, name, password}))

      navigation.navigate('TabNavigator')
    } else Alert.alert('password is invalid')
  }, [password, confirmPassword])
  const goUseReducer = useCallback(() => navigation.navigate('UseReducer'), [])
  const goBack = useCallback(() => navigation.navigate('UseReducer'), [])

  return (
    <SafeAreaView>
      <TopBar>
      <Icon name="arrow-left" size={26} onPress={goBack} style={styles.back} />
      </TopBar>
      <View style={[styles.view]}>
        <AutoFocusProvider contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>문의유형</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>문의내용</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInputbody]}
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>성함(단체)</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                onChangeText={setPassword}
                placeholder=""
              />
            </View>
          </View>
          <View style={[styles.textView]}>
            <Text style={[styles.text]}>이메일</Text>
            <View border style={[styles.textInputView]}>
              <TextInput
                onFocus={focus}
                style={[styles.textInput]}
                onChangeText={setConfirmPassword}
                placeholder=""
              />
            </View>
          </View>
          <TouchableView
            notification
            style={[styles.touchableView]}
            onPress={goTabNavigator}>
            <Text style={[styles.textbutton]}>작성하기</Text>
          </TouchableView>
          <UnderlineText
            style={[styles.text, {marginTop: 15}]}
            onPress={goUseReducer}>
          </UnderlineText>
        </AutoFocusProvider>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  text: {fontSize: 20, marginLeft: 19},
  textbutton: {fontFamily: 'NotoSansKR-Thin', fontSize: 20, color: 'white', lineHeight: 30},
  keyboardAwareFocus: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView: {width: '100%', padding: 5, marginBottom: 10},
  textInput: {fontSize: 20},
  textInputbody: {fontSize: 20},
  textInputView: {width: '90%', marginTop: 5, marginLeft: 19, borderWidth: 0},
  touchableView: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: 40,
    width: '88%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  back: {}
})
