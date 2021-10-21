import React from 'react'
import type {FC} from 'react'
import {StyleSheet} from 'react-native'
import {useTheme} from '@react-navigation/native'
import {Switch} from './Switch'
import {View} from './View'
import type {ViewProps} from './View'

export type TopBarProps = ViewProps & {
  noSwitch?: boolean
}
// prettier-ignore
export const TopBar: FC<TopBarProps> = ({noSwitch, children, style, ...props}) => {
  const {dark} = useTheme()
  return (
    <View card={!dark} primary={dark} style={[styles.topBar, style]} {...props}>
      {children}
      <View style={[styles.flex]} />
    </View>
  )
}
const styles = StyleSheet.create({
  topBar: {flexDirection: 'row', padding: 12, alignItems: 'center'},
  flex: {flex: 1}
})