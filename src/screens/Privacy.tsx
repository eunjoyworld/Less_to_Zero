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

          <View style={[styles.textView]}>
            <Text style={[styles.text]}>개인정보 처리방침</Text>
          </View>
          
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  text: {fontSize: 20, marginLeft: 19},
  textView: {width: '100%', padding: 5, marginBottom: 10},
})
