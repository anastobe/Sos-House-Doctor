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


const AppoinmentsDeclined = ({ navigation, route,  }) => {
  
  return (
    //  <Card />
    <View style={{ flex: 1, backgroundColor: COLORS.lightmainColor, marginTop: 25 }} >

    <View style={{ height: 250 ,backgroundColor: COLORS?.white, borderRadius: 5, ...SHADOWELEV_2 , marginHorizontal: 15,}} >

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
        <Text style={{ ...FONTS.p4, fontWeight: 'bold', color: COLORS.black }} >John Nicholas</Text>
        </View>

       <TouchableOpacity
      style={{
        height: 42,
        width: 127,
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
       Declined
        </Text>

    </TouchableOpacity>

  

      </View>

       <Text>Edward William</Text>
       <Text>Location: 850 Heritage St. Hanford </Text>
       <Text> CA 93230 </Text>
       <Text>Speciality: Caregiver  </Text>
       <Text>Symptoms: Agitation </Text>
       <Text>  Mobile Number: (235) *** 000  </Text>
       <Text> Request Type: Teleconsult </Text>
     </View>

    </View>

    <View>
      
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginTop: 13 }} >

        <View>
         <Text>Comments</Text>
         <Text>C</Text>
        </View>

        <View>
        <Text>Fees</Text>
        <Text>ETA</Text>
        </View>

        <View>
        <Text> $4.00</Text>
        <Text>08:01PM</Text>
        </View>

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

export default AppoinmentsDeclined































