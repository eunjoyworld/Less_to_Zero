import React, {useEffect} from 'react'
import {StyleSheet, Image} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
// prettier-ignore
import {View, Text, NavigationHeader, TopBar, MaterialCommunityIcon as Icon} from '../theme'
import {useInterval} from '../hooks'

import type {AppState} from '../store'
import * as C from '../store/clock'

import NaverMapView, {Circle, Marker, Path, Polyline, Polygon, Align} from ''../map'
import {PermissionsAndroid, Platform, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

// prettier-ignore
export default function Clock() {
  const {currentDate, currentTime} = useSelector<AppState, C.State>(
    ({clock}) => clock)
  const dispatch = useDispatch()
  useInterval(() => {
    dispatch(C.setTimeAction(new Date()))
  }, 1000)


  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const P1 = {latitude: 37.565051, longitude: 126.978567};
  const P2 = {latitude: 37.565383, longitude: 126.976292};
  const P4 = {latitude: 37.564834, longitude: 126.977218};

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const MapViewScreen = ({navigation}) => {
    useEffect(() => {
      requestLocationPermission();
    }, []);
  }


  return <>
    <View style={[styles.flex]}>
      <TopBar>
        <Image style={[styles.logo]}
              source={require('../assets/images/recycle.png')} />
      </TopBar>
      <View style={[styles.flex, styles.top]}>
        <Text style={[styles.text]}>공간 지도</Text>
      </View>
    </View>
    <NaverMapView style={{width: '100%', height: '100%'}}
                  showsMyLocationButton={true}
                  center={{...P0, zoom: 16}}
                  onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
                  onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
                  onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
                  useTextureView>
                    <Marker coordinate={P0} onClick={() => console.warn('onClick! p0')}
                            caption={{text: "test caption", align: Align.Left}} />
                    <Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')} />
                    <Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')} />
                    <Marker coordinate={P4} onClick={() => console.warn('onClick! p4')}
                            image={require('./marker.png')} width={48} height={48} />
                    <Path coordinates={[P0, P1]} onClick={() => console.warn('onClick! path')} width={10} />
                    <Polyline coordinate={P1, P2} onClick={() => console.warn('onClick! polyline')} />
                    <Circle coordinate={P0} color={'rgba(255, 0, 0, 0.3'} radius={200} onClick={() => console.warn('onClick! circle')} />
                    <Polygon coordinates={P0, P1, P2} color={`rgba(0, 0, 0, 0.5)`} onClick={() => console.warn('onClick! polygon')} />
                  </NaverMapView>
                <TouchableOpacity style={{position: 'absolute', bottom: '10%', right: 8}}
                                  onPress={() => NavigationContainer.navigate('stack')}>
                                    <View style={{backgroundColor: 'gray', padding: 4}}
                                      <Text style= {{color: 'white'}}> open stack </Text>
                                    </View>
                                  </TouchableOpacity>                              </>
  }

  async function requestLocationPermission() {
    if (Platform.OS !== 'android') return;
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'show my location need Location permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
        console.warn(err);
    }
  }
export default Clock;


// prettier-ignore
const styles = StyleSheet.create({
  flex: {flex: 1},
  text: {fontSize: 30, marginLeft: 20},
  top : {marginTop: 20},
  logo : {width: 30, height: 30}
})