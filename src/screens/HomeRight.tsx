import React, {useCallback} from 'react'
import {StyleSheet, Alert} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
// prettier-ignore
import {SafeAreaView, View, Text, TopBar,
NavigationHeader, MaterialCommunityIcon as Icon} from '../theme'
import {LeftRightNavigation} from '../components'

const title = 'HomeRight'
// prettier-ignore
export default function HomeRight() {
  const navigation = useNavigation()
  const route = useRoute()
  const goBack = useCallback(
    () => navigation.canGoBack() && navigation.goBack(), [])
  const goHome = useCallback(() => navigation.navigate('Home'), [])
  
  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <NavigationHeader
          Left={() => (<Icon name="arrow-left" size={40} onPress={goBack} />)}
          Right={() => (<Icon name="bookmark" size={30}
              onPress={() => Alert.alert('menu pressed')} />)} />
        
        <TopBar>
          <Text onPress={goBack}>이전으로</Text>
          <Text onPress={goHome} style={{marginLeft: 10}}>메인</Text>
        </TopBar>

        <LeftRightNavigation distance={40} onLeftToRight={goHome}>
          <View style={[styles.content]}>
            <Text style={[styles.text]}>
              메뉴를 넣어볼까요? </Text>
          </View>
        </LeftRightNavigation>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5},
  text: {fontSize: 20},
  content: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})