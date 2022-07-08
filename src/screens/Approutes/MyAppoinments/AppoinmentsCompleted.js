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
  FlatList,
  ScrollView,
  Image
} from 'react-native'
import { IMAGES, COLORS, SHADOW, FONTS } from '../../../constraints/Index';
import { SHADOWELEV_2 } from '../../../constraints/Theme';

const AppoinmentsCompleted = ({ navigation, route,  }) => {
  
    return (
        //  <Card />
        <View style={{ flex: 1, backgroundColor: COLORS.lightmainColor, marginTop: 25 }} >
    
        <View style={{ height: 180  ,backgroundColor: COLORS?.white, borderRadius: 5, ...SHADOWELEV_2 , marginHorizontal: 15,}} >
    
    {/* upper Content   */}
        <View style={{ flexDirection: "row" }} >
    
        <View style={{ margin: 10 }} >
          <Image
              style={{
                width: 50,
                height: 50,
                resizeMode: 'contain'
              }}
              source={IMAGES.homeProfilePic}
              />
        </View>
    
         <View style={{ marginTop: 10, width: 250 }} >
    
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center",  }} >
    
            <View  >
            <Text style={{ ...FONTS.p4, fontWeight: 'bold', color: COLORS.black }} >Emma Alaxander</Text>
            </View>
    
           <TouchableOpacity
          style={{
            height: 40,
            width: 55,
            backgroundColor: COLORS.btnColor,
            borderRadius: 5,
            justifyContent: "center",
    
          }}
          >
              <Text style={{
                ...FONTS.p3,
                color: COLORS.white,
                fontWeight: '700',
                textAlign: "center",
              }}>
         $40.00
            </Text>
    
        </TouchableOpacity>
          </View>
           <Text>************ </Text>
         </View>
    
        </View>

{/* //toal width 250 left is 190 and right is 60 */}
        <View style={{ width: 250, alignSelf: "flex-end", flexDirection: "row" ,marginHorizontal: 15 }} >
            <View style={{width: 190}} >
                <Text>Date: 10/04/2022</Text>
                <Text>Time: 8:50 PM</Text>
                <Text>Address: Catherine Avenue</Text>
                <Text>Los Angeles, CA 90026</Text>
            </View>

            <View style={{width: 60, flexDirection: "row", justifyContent: "space-between"}} >
            <Image
          style={{
            width: 20,
            height: 22,
            resizeMode: 'contain'
          }}
          source={IMAGES.TrashBin}
        />
        <Image
          style={{
            width: 20,
            height: 22,
            resizeMode: 'contain'
          }}
          source={IMAGES.FileManagement}
        />
        
            </View>
        </View>
    



    
        </View>
        </View>
        );
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default AppoinmentsCompleted































