import React, {useState, useCallback} from 'react'
import {StyleSheet, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
// prettier-ignore
import {SafeAreaView, View, Text, TextInput, TouchableView, MaterialCommunityIcon as Icon, TopBar}
from '../theme'
import * as D from '../data'
import {useAutoFocus, AutoFocusProvider} from '../contexts'
import * as L from '../store/login'

// prettier-ignore
export default function Refuse() {
  const navigation = useNavigation()  
  const goBack = useCallback(() => navigation.navigate('Counter'), [])

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <AutoFocusProvider
          contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View style={[styles.textView]}>
            <Text style={[styles.mtop]}>ROT</Text>
            <Text style={[styles.mtext]}>자연으로 돌아갈 생분해 제품 사용하기</Text>
          </View>
          <View style={[styles.textView]}>  
            <Text style={[styles.stext]}>어쩌면 신중을 기하는 소비{'\n'}되도록이면 자연유래</Text>
          </View>
        </AutoFocusProvider>
      </View>
    </SafeAreaView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  view: {flex: 1, justifyContent: 'space-between', alignItems: 'center'},
  mtop: {fontFamily: 'NotoSansKR-Medium', fontSize: 30, textAlign: 'center', marginTop: 80, lineHeight: 40},
  mtext: {fontFamily: 'NotoSansKR-Light', fontSize: 28, textAlign: 'center', lineHeight: 40},
  btext: {fontSize: 20, color: 'white'},
  keyboardAwareFocus: {flex: 1, padding: 5, alignItems: 'center',
    justifyContent: 'center'},
  textView: {width: '100%', padding: 5, marginBottom: 10},
  touchableView: {flexDirection: 'row', height: 50, borderRadius: 10, width: '50%',
    justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'},
    back: {}
})