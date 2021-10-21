import React, {useCallback, useEffect} from 'react'
import {StyleSheet, FlatList, Image, Text} from 'react-native'
import {SafeAreaView, View, UnderlineText, TopBar} from '../theme/navigation'
import {ScrollEnabledProvider, useScrollEnabled} from '../contexts'
import * as D from '../data'
import Person from './Person'
import {useSelector, useDispatch} from 'react-redux'
import {AppState} from '../store'
import * as P from '../store/people'

export default function People() {
  const [scrollEnabled] = useScrollEnabled()
  const people = useSelector<AppState, P.State>(({people}) => people)
  const dispatch = useDispatch()
  const addPerson = useCallback(() => {
    dispatch(P.addAction(D.createRandomPerson()))
  }, [])
  const removeAllPersons = useCallback(() => {
    dispatch(P.deleteAllAction())
  }, [])
  const deletePerson = useCallback(
    (id: string) => () => {
      dispatch(P.deleteAction(id))
    },
    []
  )
  useEffect(() => D.makeArray(5).forEach(addPerson), [])

  return (
    <SafeAreaView>
      <View style={[styles.view]}>
        <TopBar>
        <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} />
      </TopBar>
      <View style={[styles.view, styles.top]}>
        <Text style={[styles.text]}>누군가의 이야기</Text>
        <Text style={[styles.ltext]}>#용기내</Text>
        <Text style={[styles.ltext]}>#플라스틱어택</Text>
        <Text style={[styles.ltext]}>#지구를지켜요</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {flex: 1},
  text: {marginRight: 10, fontSize: 20},
  top: {marginTop: 20},
  text: {fontSize: 30, marginLeft: 20},
  ltext: {fontSize: 60, marginLeft: 20},
  stext: {fontSize: 16, marginLeft: 20, marginTop: 4, marginRight: 16, marginBottom: 16},
  logo: {width: 30, height: 30}
})