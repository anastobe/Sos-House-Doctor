import React, { useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Vibration,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, FONTS, SHADOW, SIZES, IMAGES } from '../constraints/Index'
import ImagePicker  from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import { IONICONS } from '../constraints/Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProfileImgSelect = ({ onPress1  = ()=>{}, onPress2  = ()=>{} ,show, Img, ...props  }) => {


    const refRBSheet = useRef();
  
    const Data = [
      {
        type: 'camera',
        title: 'Take Photo',
        icon: IONICONS?.camera
      },
      {
        type: 'gallery',
        title: 'Choose From Library',
        icon: IONICONS?.image
      },
      {
        type: 'cancel',
        title: 'Cancel',
        icon: IONICONS?.close
      },
    ]; 
  
  
    const renderBottomSheetItems = ({ item, index }) => {
  
      return (
        <View>
          <Pressable
            style={{
              height: 56,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 30,
              alignItems: 'center',
              borderBottomColor: "#fff",
            }}
            onPress={() => {        
              if (item?.type == 'camera') {
                onPress2();
                refRBSheet.current.close();

              } else if (item?.type == 'gallery') {
                
                onPress1();
                refRBSheet.current.close();
                
              }
              else if (item?.type == 'cancel') {
  
                refRBSheet.current.close();

              
              }
            }}>
            <Text
              style={{
                color: '#FFF',
                textAlign: 'center',
                ...FONTS.p5
              }}>
              {item?.title}
            </Text>

            <Icon name={item?.icon} size={25} color={COLORS.lightwhite} />


          </Pressable>
          
        </View>
      );
    };
  


  return (
    <>
  
  <View
  style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightmainColor,
  }}
>

{/* showing content */}


  <TouchableOpacity onPress={() => refRBSheet.current.open()} >

<View style={{ alignItems: 'center' }} >
<View style={{ backgroundColor: COLORS.lightmainColor, width: 100, height: 100, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderColor: COLORS.white, borderWidth: 5 }} >

{show ? 
<Image
  style={{
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain'
  }}
  source={{ uri: Img}}
/>

  :

<Image
  style={{
    width: 90,
    height: 90,
    borderRadius: 50,
    resizeMode: 'contain'
  }}
  source={IMAGES.ProviderPic}
/>}

<View style={{  width: 25, height: 25,backgroundColor: COLORS.btnColor, justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 0, right: -5,borderRadius: 50, borderColor: COLORS.white, borderWidth: 2   }} >
  <Image
  style={{
    width: 13,
    height: 13,
    resizeMode: 'contain'
  }}
  source={IMAGES.camerapic}
  />
</View>


</View>
</View>


</TouchableOpacity>



{/* showing content when sheet open */}

  <RBSheet
    height={250}
    ref={refRBSheet}
    closeOnDragDown={true}
    closeOnPressMask={true}
    style={{ backgroundColor: "#000" }}
    animationType={"fade"}
    openDuration={1000}
    closeDuration={1000}
    customStyles={{
      container: {
      backgroundColor: COLORS.mainColor
      }
    }}
  >
          <FlatList
          showsHorizontalScrollIndicator={false}
          // horizontal
          data={Data}
          renderItem={renderBottomSheetItems}
          keyExtractor={(item, index) => index}
        />

  </RBSheet>
</View>





</>
  )
}

export default ProfileImgSelect
