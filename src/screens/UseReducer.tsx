import React, {Component} from 'react'
import {StyleSheet, Text, View, Image} from 'react-native'
import {TopBar, MaterialCommunityIcon as Icon} from '../theme'

// prettier-ignore

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={[styles.flex]}>
      <TopBar>
        <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} />
      </TopBar>

        <View style={[styles.elem, styles.vTop]}>
          <View style={styles.userInfo}>
          <View style={styles.profile} />
            <Text style={styles.name}> 문의하기 </Text>
        </View>
        </View>
        <View style={styles.line} />

        <View style={styles.elem}>
          <View style={styles.userInfo}>
          <View style={styles.profile} />
            <Text style={styles.name}> 개인정보 처리방침 </Text>
        </View>
        </View>
        <View style={styles.line} />

        <View style={styles.elem}>
          <View style={styles.userInfo}>
          <View style={styles.profile} />
          <Text style={styles.name}> 이용약관 </Text>
        </View>
        </View>
        <View style={styles.line} />

        <View style={styles.elem}>
          <View style={styles.userInfo}>
          <View style={styles.profile} />
          <Text style={styles.name}> 위치기반서비스 이용약관 </Text>
        </View>
        </View>
        <View style={styles.line} />

        <View style={styles.elem}>
          <View style={styles.userInfo}>
          <View style={styles.profile} />
          <Text style={styles.name}> 운영정책 </Text>
        </View>
        </View>
        <View style={styles.line} />

        <View style={styles.elem}>
          <View style={styles.userInfo}>
          <View style={styles.profile} />
          <Text style={styles.name}> 오픈소스 라이센스 </Text>
        </View>
        </View>
        <View style={styles.line} />

        <View style={styles.elem}>
          <View style={styles.userInfo}>
          <View style={styles.profile} />
          <Text style={styles.name}> 팀 소개 </Text>
        </View>
        </View>
        <View style={styles.line} />

        <View style={[styles.elem, styles.vBottom]}>
          <View style={styles.userInfo}>
          <View style={styles.profile} />
          <Text style={styles.name}> 버전 </Text>
        </View>
        </View>
        <View style={[styles.line, styles.vBottom]} />

      </View>
    )
  }
}


const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: 'white'},
  logo : {width: 30, height: 30},
  container: {flex: 1},
  header: {height: 60, backgroundColor: 'green'},
  footer: {height: 60, backgroundColor: 'red'},
  content: {flex: 1},

  line: {width: '76%', borderBottomWidth: 1, borderColor: '#444', marginLeft: 44},
  
  elem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingLeft: 80,
    paddingTop: 20,
  },
  userInfo: {flexDirection: 'row', alignItems: 'center'},
  profile: {width: 20, height: 20, borderRadius: 25, backgroundColor: 'green'},
  vTop: {paddingTop: 100},
  name: {paddingLeft: 10, fontSize: 16}
  })
