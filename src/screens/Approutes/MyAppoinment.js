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
import { COLORS, FONTS, SHADOW, SHADOWELEV_1, SHADOWELEV_2, SIZES } from '../../constraints/Theme';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import AppoinmentsSchedule from './MyAppoinments/AppoinmentsSchedule';
import AppoinmentsCompleted from './MyAppoinments/AppoinmentsCompleted';
import AppoinmentsArchieved from './MyAppoinments/AppoinmentsArchieved';
import AppoinmentsDeclined from './MyAppoinments/AppoinmentsDeclined';
import AppoinmentsCanceled from './MyAppoinments/AppoinmentsCanceled';
import Animated from 'react-native-reanimated';


const MyAppoinment = ({ navigation, route,  }) => {


  const[tabIndex,settabIndex] = useState("")

  const CustomTabBar = ({...props})=>{
    console.log("propss==>",props);
    settabIndex(props?.activeTab)
    return(
      <View style={{ backgroundColor: COLORS?.lightmainColor, flexDirection: "row" }} >

        <ScrollView horizontal={true} 
         showsHorizontalScrollIndicator={false}
         scrollWithoutAnimation={ (v)=> console.log("we get==>",v) }
        >
      {props.tabs && props.tabs.map((v,i)=>{
        return(

        <View style={{ width: 140, backgroundColor:  ( i == tabIndex ) ? COLORS?.mainColor : "#efefef" , height: 42, justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft: 7, marginBottom: 5, ...SHADOWELEV_2 }} >
          { ( i == tabIndex ) ? <Text style={{ color:"#fff", ...FONTS.p4, fontWeight: "500" }} >{v}</Text> : <Text  style={{ color: '#9fa3a8', ...FONTS.p4, fontWeight: "500" }}   >{v}</Text> }
        </View>
        )
      })}
      </ScrollView>
      
      </View>
    )
  }

  

  
    return (
    <>
           

<ScrollableTabView 
    style={{ backgroundColor: COLORS.lightmainColor }}
    renderTabBar={(props) => 
    // <ScrollableTabBar {...props} /> 
    <CustomTabBar {...props}  />
  } 
    >
        <AppoinmentsSchedule tabLabel="Schedule" />
        <AppoinmentsCompleted tabLabel="Completed"  />
        <AppoinmentsArchieved tabLabel="Archieved"  />
        <AppoinmentsDeclined tabLabel="Declined"  />
        <AppoinmentsCanceled tabLabel="Canceled"  />
    </ScrollableTabView>
    </>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default MyAppoinment






































