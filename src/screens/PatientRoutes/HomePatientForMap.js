import React, { useEffect, useRef, useState } from 'react';
import { 
  Dimensions, 
  StyleSheet, 
  Text, 
  View, 
  PermissionsAndroid , 
  ActivityIndicator, 
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Vibration,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  Image

} from 'react-native';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
const windowHeight = Dimensions.get('window').height;
import Geolocation from 'react-native-geolocation-service'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';


function HomePatientForMap({navigation}) {

  const [logitude, setLongitude] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [permission, setPermission] = useState(false)

  useEffect(() => {
    getCurrentLocations()
  }, [latitude, logitude])

 const getCurrentLocations = () =>{
  
   Geolocation.getCurrentPosition(
    position => {
      console.log('mypostion', position)
      mylatitude(position.coords.latitude, position.coords.longitude)
    },
    error => {
      console.log(error.code, error.message)
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  )
  requestCameraPermission()

 }

 
  const requestCameraPermission = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      ]).then(result => {
        if (
          result['android.permission.ACCESS_COARSE_LOCATION'] &&
          result['android.permission.CAMERA'] &&
          result['android.permission.ACCESS_FINE_LOCATION'] &&
          result['android.permission.READ_EXTERNAL_STORAGE'] &&
          result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
        ) {
          setPermission(true)
        } else if (
          result['android.permission.ACCESS_COARSE_LOCATION'] ||
          result['android.permission.CAMERA'] ||
          result['android.permission.ACCESS_FINE_LOCATION'] ||
          result['android.permission.READ_EXTERNAL_STORAGE'] ||
          result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            'never_ask_again'
        ) {
          requestCameraPermission()

        }
      })
    }
  }
  
  const mylatitude = (e, v) => {
    setLatitude(e)
    setLongitude(v)  
  }
  
// const RegnChangeCompleted = (e) =>{
//     console.log("RegnChangeCompleted===>",e);
// }







  return (          
   <View style={{ flex: 1 }} >
       <View style={{ flex: 1 }} >

    { (latitude && logitude) && <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      showsUserLocation={true}
      showsMyLocationButton={true}
      rotateEnabled={false}
    //   onRegionChange={()=>RegnChangeCompleted()}

      initialRegion={{
        latitude: latitude,
        longitude: logitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      />
    }
    
          <View style={{ width: 150, height: 50, backgroundColor: "#000", position: "absolute", zIndex: 9999 }} >
              
              <Text style={{ fontSize: 40 }} >asdasdasdasd</Text>
              <Text style={{ fontSize: 40 }} >asdasdasdasd</Text>
              <Text style={{ fontSize: 40 }} >asdasdasdasd</Text>
              <Text style={{ fontSize: 40 }} >asdasdasdasd</Text>
              
            </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: '#F3F4F9',
  },
  header: {
    // alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHandle: {
    width: 25,
    height: 3,
    backgroundColor: '#BEC3C5',
    borderRadius: 4
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },

//maps
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // map: {
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height,
  // },

});

export default HomePatientForMap;




















































