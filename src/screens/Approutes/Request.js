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
import Contact from './Contact';
import Earning from './Earning';
import { COLORS, FONTS, SHADOW, SHADOWELEV_1, SHADOWELEV_2, SIZES } from '../../constraints/Theme';
import { IMAGES } from '../../constraints/Index';
import { IONICONS } from '../../constraints/Icons';
import Header from '../../components/Header';
import HeaderDrawer from '../../components/HeaderDrawer';
import Profile from './Profile';
import Setting from './Setting';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from '../../components/Card';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import CommentsInputField from '../../components/InputFields/CommentsInputField';
import ButtonNoLogo from '../../components/ButtonNoLogo';
import RequestReq from './Request/RequestReq';
import RequestPending from './Request/RequestPending';
import RequestSchedule from './Request/RequestSchedule';


const Request = ({ navigation, route,  }) => {
  

  const[tabIndex,settabIndex] = useState("")

  const CustomTabBar = ({...props})=>{
    console.log("props==>",props);
    settabIndex(props?.activeTab)
    return(
      <View style={{ backgroundColor: COLORS?.lightmainColor, flexDirection: "row" }} >

        <ScrollView horizontal={true} 
         showsHorizontalScrollIndicator={false}
         tabBarBackgroundColor={ "#000" }
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
        <RequestReq tabLabel="Request" />
        <RequestPending tabLabel="Pending"  />
        <RequestSchedule tabLabel="Schedule"  />
    </ScrollableTabView>
    
    
    <View>
 


    </View>


    </>
  )
}

export default Request





// return (
//   <ScrollableTabView
//   style={{ marginTop: 20 }}
//   initialPage={0}
//   renderTabBar={() => <ScrollableTabBar />}
// >
//   <Text tabLabel='Tab #1'>My</Text>
//   <Text tabLabel='Tab #2'>favorite</Text>
//   <Text tabLabel='Tab #3'>project</Text>
//   <Text tabLabel='Tab #4'>favorite</Text>
//   <Text tabLabel='Tab #5'>project</Text>
// </ScrollableTabView>
// )



{/* <View>
<TouchableOpacity
style={{
height: 42,
width: 100,
backgroundColor: COLORS.btnColor,
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
...SHADOW
}}
>
<Text style={{ ...FONTS.p3, color: COLORS.black }}>Pending Patient’s Approval</Text>
</TouchableOpacity>
</View> */}




























































