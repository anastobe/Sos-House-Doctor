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
import { COLORS, FONTS, IMAGES, SHADOW, SIZES } from '../constraints/Index'
import RBSheet from "react-native-raw-bottom-sheet";
import { IONICONS } from '../constraints/Icons';
import Icon from 'react-native-vector-icons/Ionicons'

const UploadImageInput = ({ onPress1  = ()=>{}, onPress2  = ()=>{}, show, Img, ...props  }) => {

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


<TouchableOpacity onPress={() => refRBSheet.current.open()}>
    <View style={{ marginHorizontal: SIZES.padding + 5, }} >
        <Text  style={{ marginBottom: 5, ...FONTS.p4, color: COLORS.black }}  >Upload</Text>
      <View style={{ justifyContent: "center", alignItems: 'center', }}>
       
      {show ? 

   <Image
   style={{
    width: 48,
    height: 42,
     resizeMode: 'contain'
   }}
   source={{ uri: Img}}
 />
      :
      
    <Image
      style={{
        width: 48,
        height: 42,
        resizeMode: 'contain'
      }}
      source={IMAGES?.uploadimage}
    />}
     
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

export default UploadImageInput
