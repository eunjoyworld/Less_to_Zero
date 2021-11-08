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
            <Text style={[styles.mtop]}>RECYCLE</Text>
            <Text style={[styles.mtext]}>일회용품보다 다회용 제품을 이용하기</Text>
          </View>
          <View style={[styles.textView]}>  
            <Text style={[styles.stext]}>생각보다 많이 사용해야 효과가 나타난다?{'\n'}그렇다면, 그동안 사용되는 일회용품은 어떻게 설명이 될까?</Text>
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