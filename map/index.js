import { COMPLETIONSTATEMENT_TYPES } from '@babel/types';
import React, {Component} from 'react'
import {requireNativeComponent, findNodeHandle, UIManager, Platform, NativeModules, Image} from 'react-native'

const RNnaverMapView = requireNativeComponent('RNNaverMapView')
const RNNaverMapViewTexture = Platform.select({
  android: () => requireNativeComponent('RNNaverMapViewTexture'),
  ios: () => RNNaverMapView
}) ();
const RNNaverMapMarker = requireNativeComponent('RNNaverMapMarker')
const RNNaverMapPathOverlay = requireNativeComponent('RNNaverMapPathOverlay')
const RNNaverMapPolylineOverlay = requireNativeComponent('RNNaverMapPolylineOverlay')
const RNNaverMapCircleOverlay = requireNativeComponent('RNNaverMapCircleOverlay')
const RNNaverMapPolygonOverlay = requireNativeComponent('RNNaverMapPolygonOverlay')

export var TrackingMode
(function (TrackingMode) {
  TrackingMode[TrackingMode["None"] = 0] = "None"
  TrackingMode[TrackingMode["NoFollow"] = 0] = "NoFollow"
  TrackingMode[TrackingMode["Follow"] = 0] = "Follow"
  TrackingMode[TrackingMode["Face"] = 0] = "Face"
})(TrackingMode || (TrackingMode = {}))

export var MapType
(function (MapType) {
  MapType[MapType["Basic"] = 0] = "Basic"
  MapType[MapType["Navi"] = 0] = "Basic"
  MapType[MapType["Satellite"] = 0] = "Satellite"
  MapType[MapType["Hybrid"] = 0] = "Hybrid"
  MapType[MapType["Terrain"] = 0] = "Terrain"
})(MapType || (MapType = {}))

export var LayerGroup
(function (LayerGroup) {
  LayerGroup["LAYER_GROUP_BUILDING"] = "building"
  LayerGroup["LAYER_GROUP_TRANSIT"] = "transit"
  LayerGroup["LAYER_GROUP_BICYCLE"] = "bike"
  LayerGroup["LAYER_GROUP_TRAFFIC"] = "ctt"
  LayerGroup["LAYER_GROUP_CADASTRAL"] = "landparcel"
  LayerGroup["LAYER_GROUP_MOUNTAIN"] = "mountain"
})(LayerGroup || (LayerGroup = {}))

export var Gravity
(function (Gravity) {
  Gravity[Gravity["NO_GRAVITY"] = 0] = "NO_GRAVITY"
  Gravity[Gravity["AXIS_SPECIFIED"] = 0] = "AXIS_SPECIFIED"
  Gravity[Gravity["AXIS_PULL_BEFORE"] = 0] = "AXIS_PULL_BEFORE"
  Gravity[Gravity["AXIS_PULL_AFTER"] = 0] = "AXIS_PULL_AFTER"
  Gravity[Gravity["AXIS_X_SHIFT"] = 0] = "AXIS_X_SHIFT"
  Gravity[Gravity["AXIS_Y_SHIFT"] = 0] = "AXIS_Y_SHIFT"
  Gravity[Gravity["TOP"] = 0] = "TOP"
  Gravity[Gravity["BOTTOM"] = 0] = "BOTTOM"
  Gravity[Gravity["LEFT"] = 0] = "LEFT"
  Gravity[Gravity["RIGHT"] = 0] = "RIGHT"
  Gravity[Gravity["CENTER_VERTICAL"] = 0] = "CENTER_VERTICAL"
  Gravity[Gravity["CENTER_HORIZONTAL"] = 0] = "CENTER_HORIZONTAL"
}) (Gravity || (Gravity = {}))

export var Align
(function (Align) {
  Align[Align["Center"] = 0] = "Center"
  Align[Align["Left"] = 0] = "Left"
  Align[Align["Right"] = 0] = "Right"
  Align[Align["Top"] = 0] = "Top"
  Align[Align["Bottom"] = 0] = "Bottom"
  Align[Align["TopLeft"] = 0] = "TopLeft"
  Align[Align["TopRight"] = 0] = "TopRight"
  Align[Align["BottomRight"] = 0] = "BottomRight"
  Align[Align["BottomLeft"] = 0] = "BottomLeft"
})(Align || (Align = {}))

export default class NaverMapView extends Component {
  constructor() {
    super(...arguments)
    this.resolveRef = (ref) => {
      this.ref = ref
      this.nodeHandle = findNodeHandle(ref)
    }
    this.animateToCoordinate = (coord) => {
      this.dispatchViewManagerCommand('animateToCoordinate', [coord])
    }
    this.animateToTwoCoordinates = (c1, c2) => {
      this.dispatchViewManagerCommand('animateToTwoCoorinates'), [c1, c2]
    }
    this.animateToCoordinates = (coords, bounds) => {
      this.dispatchViewManagerCommand('animateToCoordinates, [coords, bounds')
    }
    this.animateToRegion = (region) => {
      this.dispatchViewManagerCommand('animateToRegion', [region])
    }
    this.setLocationTrackingMode = (mode) => {
      this.dispatchViewManagerCommand('setLocationTrackingMode', [mode])
    }
    this.showsMyLocationButton = (show) => {
      this.dispatchViewManagerCommand('showMyLocationButton', [show])
    }
    this.dispatchViewManagerCommand = (command, arg) => {
      return Platform.select({
        // @ts-ignore
        android: () =>
        UIManager.dispatchViewManagerCommand(this.nodeHandle, 
          // @ts-ignore
        UIManager.getViewManagerConfig('RNNaverMapView').Commands[command], arg),
        ios: () => NativeModules[`RNNaverMapView`][command]
        (this.nodeHandle, ...arg),
      })();
    };
    this.handleOnCameraChange = (event) => this.props.onCameraChange &&
    this.props.onCameraChange(event.nativeEvent)
      this.handleOnMapClick = (event) => this.props.onMapClick &&
      this.props.onMapClick(event.nativeEvent)
  }
  render() {
    const {onlnitialized, center, tilt, bearing, mapPadding, logoMargin, nightMode, useTextureView} = this.props
    const ViewClass = useTextureView ? RNNaverMapViewTexture : RNNaverMapView
    return React.createElement(ViewClass, Object.assign({ref: this.resolveRef}, this.props,
      {onlnitialized: onlnitialized,
        center: center,
        mapPadding: mapPadding,
        logoMargin: logoMargin,
        tilt: tilt,
        bearing: bearing,
        nightMode: nightMode,
        onCameraChange: this.handleOnCameraChange,
        onMapClick: this.handleOnMapClick}))
       }
    }

export class Marker extends Component {
  render() {
    return React.createElement(RNNaverMapMarker, Object.assign({},
      this.props, {image: getImageUri(this.props.image)}))
  }
}

export class Circle extends Component {
  render() {
    return React.createElement(RNNaverMapCircleOverlay, Object.assign({},
      this.props))
  }
}

export class Polyline extends Component {
  render() {
    return React.createElement(RNNaverMapPolylineOverlay, Object.assign({},
      this.props))
  }
}

export class Polygon extends Component {
  render() {
    return React.createElement(RNNaverMapPolygonOverlay, Object.assign({},
      this.props))
  }
}

export class Path extends Component {
  render() {
    return React.createElement(RNNaverMapPathOverlay, Object.assign({},
      this.props, {pattern: getImageUri(this.props.pattern)}))
  }
}

function getImageUri(src) {
  let imageUri = null
  if (src) {
    let image = Image.resolveAssetSource(src) || {uri : null}
    imageUri = image.uri
  }
  return imageUri
}