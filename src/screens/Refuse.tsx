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
      <TopBar>
      <Icon name="arrow-left" size={26} onPress={goBack} style={styles.back} />
      </TopBar>
      <View style={[styles.view]}>
        <AutoFocusProvider
          contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View style={[styles.textView]}>
            <Text style={[styles.mtop]}>REFUSE</Text>
            <Text style={[styles.mtext]}>불필요한 물건은 거절하기</Text>
          </View>
          <View style={[styles.textView]}>  
            <Text style={[styles.stext]}>거절은 쉽지 않은 선택입니다.{'\n'}영수증, 비닐봉투</Text>
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