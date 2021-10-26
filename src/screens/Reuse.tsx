import React, {useState, useCallback} from 'react'
import {StyleSheet, Image, ScrollView, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useDispatch} from 'react-redux'
// prettier-ignore
import {SafeAreaView, View, Text, TextInput, TouchableView, MaterialCommunityIcon as Icon}
from '../theme'
import * as D from '../data'
import {useAutoFocus, AutoFocusProvider} from '../contexts'
import * as L from '../store/login'

// prettier-ignore
export default function Refuse() {
  const navigation = useNavigation()  
  const goBack = useCallback(() => navigation.navigate('Counter'), [])

  return (
    <ScrollView>
    <SafeAreaView>
      <Icon name="arrow-left" size={30} onPress={goBack} style={styles.back} />
      <View style={[styles.view]}>
        <AutoFocusProvider
          contentContainerStyle={[styles.keyboardAwareFocus]}>
          <View>
          <Text style={[styles.mtop]}>REUSE</Text>
          <Image style={[styles.image]} source={require('../assets/images/Reuse001.jpg')} />
          </View>
          <View>  
          <Text style={[styles.mtext]}>일회용이 아닌 다회용 제품 이용하기</Text>
          </View>
          <View style={[styles.textView]}>  
            <Text style={[styles.btext]}>꼭 필요한 물품이라면{'\n'}고민해 볼 선택</Text>
          </View>

          <View>
          <Image style={[styles.limage]} source={require('../assets/images/Reuseprod001.jpg')} />
          <Text style={[styles.lbtext]}>소프넛 :{'\n'}다용도 천연세제</Text>
          </View>
          <View>
          <Image style={[styles.rimage]} source={require('../assets/images/Reuseprod002.jpg')} />
          <Text style={[styles.rbtext]}>다회용 화장솜 :{'\n'}다용도 천연세제</Text>
          </View>
        </AutoFocusProvider>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}
// prettier-ignore
const styles = StyleSheet.create({
  view: {flex: 1},
  image: {width: 360, height: 200, resizeMode: 'contain', position: 'absolute', marginLeft: 80},
  mtop: {fontFamily: 'NotoSansKR-Medium', fontSize: 30, marginTop: 170, marginLeft: 16, lineHeight: 40},
  mtext: {fontFamily: 'NotoSansKR-Light', fontSize: 28, textAlign: 'center', lineHeight: 40},
  btext: {fontSize: 20, marginLeft: 34},
  lbtext: {fontFamily: 'NotoSansKR-Light', fontSize: 20, marginTop: 180, marginLeft: 200, lineHeight: 40},
  limage: {width: 180, height: 180, position: 'absolute', marginTop: 80},
  rbtext: {fontFamily: 'NotoSansKR-Light', fontSize: 20, marginTop: 180, marginLeft: 90, lineHeight: 40},
  rimage: {width: 180, height: 180, position: 'absolute', marginTop: 60, marginLeft: 220},
  keyboardAwareFocus: {flex: 1, padding: 5},
  textView: {width: '100%', padding: 5, marginBottom: 10, flexDirection: 'row'},
  touchableView: {flexDirection: 'row', height: 50, borderRadius: 10, width: '50%',
    justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'},
    back: {marginTop: 20, marginLeft: 20}
})