import React, {useCallback} from 'react'
import {StyleSheet} from 'react-native'
// prettier-ignore
import {View, Text, NavigationHeader, UnderlineText,
MaterialCommunityIcon as Icon, Switch} from '../theme'
import type {FC} from 'react'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'
import {DrawerContentScrollView} from '@react-navigation/drawer'
import {DrawerActions} from '@react-navigation/native'
import {Avatar} from '../components'
import * as D from '../data'
import {useSelector} from 'react-redux'
import type {AppState} from '../store'
import * as L from '../store/login'

// prettier-ignore
const DrawerContent: FC<DrawerContentComponentProps> = props => {
  const login = useSelector<AppState, L.State>((state) => state.login)
  const {loggedIn, loggedUser} = login
  const {email, name} = loggedUser
  
  const {navigation} = props
  const close = useCallback(
    () => navigation.dispatch(DrawerActions.closeDrawer()), [])
  

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
      <NavigationHeader Right={() =>
        <Icon name="close" size={24} onPress={close} />} />
      <View style={[styles.content]}>
        <View style={[styles.row]}>
          <Text style={[styles.text, styles.m]}>일상에서 만나는{'\n'}친환경 라이프 스타일</Text>
        </View>
        <View style={[styles.row]}>
          <UnderlineText numberOfLines={1} ellipsizeMode="tail"
            style={[styles.text, styles.m]}>Less to Zero</UnderlineText>
        </View>
        <View style={[styles.row, {marginTop: 20}]}>
        </View>
      </View>
    </DrawerContentScrollView>
  )
}
export default DrawerContent
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  row: {flexDirection: 'row', padding: 5, alignItems: 'center'},
  m: {marginLeft: 5},
  text: {fontSize: 20},
  content: {flex: 1, padding: 5}
})