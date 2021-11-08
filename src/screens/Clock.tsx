import React, {useEffect, useRef, useState} from 'react'
import {StyleSheet, Image, ImageBackground} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
// prettier-ignore
import {View, Text, NavigationHeader, TopBar, MaterialCommunityIcon as Icon} from '../theme'
import {useInterval} from '../hooks'

import type {AppState} from '../store'
import * as C from '../store/clock'

import NaverMapView, {Circle, Marker, Path, Polyline, Polygon, Align} from "react-native-nmap";
import {PermissionsAndroid, Platform, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from 'react-native-safe-area-context'
//import { LayerGroup } from '../../map/index';

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

// prettier-ignore
export default function Clock() {
    useEffect(() => {
    requestLocationPermission();
  }, []);


  const mapView = useRef(null);
  const [enableLayerGroup, setEnableLayerGroup] = useState(true);

  

  const P0 = {latitude: 37.5562916, longitude: 126.9092961};
  const P1 = {latitude: 37.553626, longitude: 126.911618};
  const P2 = {latitude: 37.564557, longitude: 126.923443};
  const P3 = {latitude: 37.557518, longitude: 126.904265};
  const P4 = {latitude: 37.564394, longitude: 126.917490};
  const P5 = {latitude: 37.563537, longitude: 126.926112};
    

  return  (
  <>
    <View style={[styles.flex]}>
      <SafeAreaView>
      <View style={[styles.flex]}>
        <Text style={[styles.text]}>공간 지도</Text>
        <Text style={[styles.stext]}>제로웨이스트샵과 자원순환공간을 알려드려요.</Text>
      </View>

      <View style={[styles.flex]}>
        <Icon name="storefront" size={16} style={styles.menu1} />
        <Icon name="cup-water" size={16} style={styles.menu2} />
        <Icon name="basket" size={16} style={styles.menu3} />
        <Icon name="delete-variant" size={16} style={styles.menu4} />
        <Text style={[styles.text1]}>샵인샵</Text>
        <Text style={[styles.text2]}>세제/화장품 리필</Text>
        <Text style={[styles.text3]}>무포장 식재료</Text>
        <Text style={[styles.text4]}>자원수거</Text>
      </View>

      <NaverMapView 
        ref={mapView}
        style={{width: '96%', height: '80%', marginTop: 140, marginLeft: 12}}
        showsMyLocationButton={true}
        center={{...P0, zoom: 14}}
        onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
        onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
        onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
        useTextureView>

        <Marker 
          coordinate={P1}
            onClick={() => {
              console.warn('onClick! p1')
            }}
            />

        <Marker 
          coordinate={P2}
            onClick={() => {
              console.warn('onClick! p2')
            }}
            />

        <Marker 
          coordinate={P3}
            onClick={() => {
              console.warn('onClick! p3')
            }}
            />

        <Marker 
          coordinate={P4}
            onClick={() => {
              console.warn('onClick! p4')
            }}
            />

        <Marker 
          coordinate={P5}
            onClick={() => {
              console.warn('onClick! p5')
            }}
            />

      </NaverMapView>
      </SafeAreaView>

    </View>


 
    <TouchableOpacity style={{position: 'absolute', bottom: '10%', right: 8}}  onPress={() => {} }>
      <View style={{backgroundColor: 'grey', padding: 16}}>
      </View>
    </TouchableOpacity>                             
  </>
  )
}

// prettier-ignore
const styles = StyleSheet.create({
  flex: {flex: 1, backgroundColor: 'white'},
  text: {fontFamily: 'NotoSansKR-Bold', fontSize: 30, marginTop: 10, marginLeft: 12, position: 'absolute'},
  stext: {fontFamily: 'NotoSansKR-Medium', fontSize: 16, marginTop: 50, marginLeft: 14, position: 'absolute'},
  text1: {fontFamily: 'NotoSansKR-Light', fontSize: 16, marginTop: 25, marginLeft: 300, position: 'absolute'},
  text2: {fontFamily: 'NotoSansKR-Light', fontSize: 16, marginTop: 50, marginLeft: 300, position: 'absolute'},
  text3: {fontFamily: 'NotoSansKR-Light', fontSize: 16, marginTop: 75, marginLeft: 300, position: 'absolute'},
  text4: {fontFamily: 'NotoSansKR-Light', fontSize: 16, marginTop: 100, marginLeft: 300, position: 'absolute'},
  top : {marginTop: 0},
  logo : {width: 30, height: 30},
  menu1: {marginTop: 36, marginLeft: 284, position: 'absolute'},
  menu2: {marginTop: 61, marginLeft: 284, position: 'absolute'},
  menu3: {marginTop: 86, marginLeft: 284, position: 'absolute'},
  menu4: {marginTop: 111, marginLeft: 284, position: 'absolute'}
})