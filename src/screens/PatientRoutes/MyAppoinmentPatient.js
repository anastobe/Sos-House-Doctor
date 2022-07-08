// import React, { useState } from 'react';
 
// import { View, StyleSheet, SafeAreaView, FlatList, Text, Button } from 'react-native';
 
// export default function MyAppoinmentPatient() {
 
//   // Generating Data
//   const TEMP_DATA = Array.from({ length: 50 }, (v, i) => i);
 
//   const [ref, setRef] = useState(null);
 
//   const ItemRender = ({ item }) => (
//     <View style={{ padding: 12 }}>
//       <Text style={styleSheet.itemText}> Element : {item} </Text>
//     </View>
//   );
 
//   const Divider = () => {
//     return (
//       <View
//         style={{
//           height: 1,
//           width: "100%",
//           backgroundColor: 'black',
//         }}
//       />
//     );
//   }
 
//   return (
//     <SafeAreaView style={styleSheet.MainContainer}>
 
//       <View style={styleSheet.buttonView}>
 
//         <Button title="Scroll To Given Index" onPress={() => {
//           ref.scrollToIndex({
//             animated: true,
//             index: 12,
//             viewPosition: 0
//           })
//         }} />
 
//       </View>
 
//       <FlatList
//         data={TEMP_DATA}
//         ref={(ref) => {
//           setRef(ref);
//         }}
//         renderItem={(itemData) => <ItemRender item={itemData.item} />}
//         ItemSeparatorComponent={Divider}
//         keyExtractor={itemData => itemData.toString()}
//       />
 
//     </SafeAreaView>
//   );
// }
 
// const styleSheet = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//   },
 
//   itemText: {
//     fontSize: 25,
//     color: 'black',
//   },
 
//   buttonView: {
//     height: 50,
//     width: "100%",
//     backgroundColor: "#2aff00",
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
 
// });























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
import AppoinmentsSchedulePatient from './MyAppoinmentsPatients/AppoinmentsSchedulePatient';
import AppoinmentsCompletedPatient from './MyAppoinmentsPatients/AppoinmentsCompletedPatient';
import AppoinmentsArchievedPatient from './MyAppoinmentsPatients/AppoinmentsArchievedPatient';
import AppoinmentsDeclinedPatient from './MyAppoinmentsPatients/AppoinmentsDeclinedPatient';
import AppoinmentsCanceledPatient from './MyAppoinmentsPatients/AppoinmentsCanceledPatient';


const MyAppoinmentPatient = ({ navigation, route,  }) => {


  const[tabIndex,settabIndex] = useState("")

  const CustomTabBar = ({...props})=>{
    settabIndex(props?.activeTab)
    return(
      <View style={{ backgroundColor: COLORS?.lightmainColor, flexDirection: "row" }} >

        <ScrollView 
         horizontal={true} 
         showsHorizontalScrollIndicator={false}

        //  onScrolltoIndex={{ animated: true, index: 3 }}

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

  // const[index, setIndex] = useState(0)
  
    return (
    <>

    <ScrollableTabView 
    style={{ backgroundColor: COLORS.lightmainColor }}
    // initialPage={index}


    renderTabBar={(props) => 
      <CustomTabBar {...props}  />}
  >
        <AppoinmentsSchedulePatient tabLabel="Scheduled" />
        <AppoinmentsCompletedPatient tabLabel="Completed"  />
        <AppoinmentsArchievedPatient tabLabel="Archieved"  />
        <AppoinmentsDeclinedPatient tabLabel="Declined"  />
        <AppoinmentsCanceledPatient tabLabel="Canceled"  />
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

export default MyAppoinmentPatient




















{/* <View>
    <Text>dasdasdasdasdasdasadasasdadasasdasdasdasdasdsdasdasdasdsdsa</Text>
    <View>
        <Button title="Screen 1" onPress={() => { this.scroll.scrollTo({ x: 0 }) }} />
    </View>
    <View>
        <Button title="Screen 2" onPress={() => { this.scroll.scrollTo({ x: '100%' }) }} />
    </View>
    <View>
        <Button title="Screen 3" onPress={() => { this.scroll.scrollTo({ x: '100%' * 2 }) }} />
    </View>
    <Text>dasdasasdasdasdasdasdsdasasddasasdasdasdasdasdasdasdasdasda</Text>
    <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={(node) => this.scroll = node}
    >
    <Text>daasdasdasdasdasdasdadssddasasdasdasdasdasddasasdasdasdasdasdsa</Text>
    </ScrollView>
</View > */}



















