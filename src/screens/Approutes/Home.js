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
import Box from '../../components/Box'
import Header from '../../components/Header'
import { IONICONS } from '../../constraints/Icons'
import { COLORS, IMAGES, SHADOWBOX,SHADOW, SIZES, FONTS } from '../../constraints/Index'
import Icon from 'react-native-vector-icons/Ionicons'
import { SHADOWBOXDARK, SHADOWELEV_2 } from '../../constraints/Theme'
import ToggleSwitch from 'toggle-switch-react-native'
import HeaderDrawer from '../../components/HeaderDrawer'

const Home = ({ navigation, route }) => {

  const[onlineOffline, setonlineOffline] = useState(true)
  const[Teleconsult, setTeleconsult] = useState(true)
  const[Housecall, setHousecall] = useState(true)
  
  console.log("1",onlineOffline );
  console.log("2",Teleconsult );
  console.log("3",Housecall );

  List = [  
    {
      id: 1,
      Speciality: "Covid Testing"
    },
    {
      id: 2,
      Speciality: "DV1"
    },
  ]
  const renderAboveCard = () =>{
    return(

      <View style={{ height: 93, marginTop: 5 ,width: SIZES.width -20, backgroundColor: COLORS.white,
        
        ...SHADOWELEV_2, 
       
       flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 4, alignSelf: "center"  }} >
      
      <View style={{ marginRight: 10, justifyContent: "center" }} >
      <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain'
          }}
          source={IMAGES.ProviderPic}
          />
      </View>

      <View>

        <View style={{ flexDirection: 'row', alignItems: "center" }} >
        <Text style={{ color: COLORS?.textColor , fontWeight: 'bold', ...FONTS.p3 }} >Welcome</Text>
        <Text style={{ fontWeight: "bold", height: 12, width: 12, backgroundColor: COLORS.btnColor , borderRadius: 10, marginLeft: 10 }} ><Icon name="checkmark" size={12} color={COLORS.white} /></Text>
        </View>

        <Text style={{ color: COLORS.btnColor, fontWeight: 'bold', ...FONTS.p3 }} >Edward William</Text>
  
        <View style={{ flexDirection: 'row' }} >
        {List && List.map((v)=>{
          return(
          <View key={v.id} style={{ borderWidth: 1, borderColor: COLORS.btnColor ,borderRadius: 5, paddingHorizontal: 5,marginHorizontal: 1, marginVertical: 2 }} >
            <Text style={{ color: COLORS.black, ...FONTS.p3 }} >{v?.Speciality}</Text>
          </View>
          )
        }) }
        </View>

        <View>
         <Text style={{ color: COLORS.black, ...FONTS.p3 }} >Medical License: T168894</Text>
        </View>

      </View>


      </View>

    )
  }


  const renderCardList = [
    {
      id: 1,
      pic: IMAGES?.commingAppoinments,
      text: 'Upcoming Appointments',
      route: "MyAppoinment"
    },
    {
      id: 2,
      pic: IMAGES?.visitHistory,
      text: 'Visit History',
      route: "MyAppoinment"
  },
  {
    id: 3,
    pic: IMAGES?.totalEarning,
    text: 'Total Earning',
    route: "Earning"
  },
  {
    id: 4,
    pic: IMAGES?.requestApproval,
    text: 'Requests Pending Approval',
    route: "Request"
}
  ]

const renderCards = () =>{
  
  const renderItem = ({item , index}) =>{
    console.log("item==>",item);
    return(
      <View style={{flex:1,alignItems:'center',marginVertical: 3}}>  
        <TouchableOpacity onPress={()=>{ navigation.navigate(item?.route) }} style={{ width: 165, height: 85, ...SHADOWELEV_2, borderRadius: 5 ,backgroundColor: "#fff", justifyContent:'center',alignItems:'center', }} >    
      <Image style={{
            width: 35,
            height: 35,
            resizeMode: 'contain'
          }}
          source={item?.pic} />
        <View>
          <Text style={{
              ...FONTS.p3,
              color: COLORS.black,
              fontWeight: '700',
              textAlign: "center",
              paddingTop: 10
            }}>
              {item?.text}
          </Text>
        </View>
        </TouchableOpacity>
      </View>
      )
  }
  

  return(
    <FlatList
      data={renderCardList}
      numColumns={2}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
    />
  )
}


const supportTeam = () =>{
  return(
    <TouchableOpacity activeOpacity={1} onPress={()=> navigation?.navigate("Contact") } >
    <View style={{ height: 65, backgroundColor: "#fff", marginHorizontal: 10, borderRadius: 5, ...SHADOWELEV_2, flexDirection: "row" ,justifyContent: "space-around", alignItems: "center" }} >
   
    <Image style={{
        width: 35,
        height: 35,
        resizeMode: 'contain'
      }}
      source={IMAGES.supportTeam} 
      />

    <Text style={{ ...FONTS.p5, color: COLORS.black }} >Support Team</Text>

    </View>
      </TouchableOpacity>
  )
}

const statusBars = (barTxt, onlineofflineStatus ,barStatus, handleStatus ) =>{
  
  return(
    <View style={{ height: 70, marginTop: 8 ,backgroundColor: "#fff", marginHorizontal: 10, borderRadius: 5, ...SHADOWELEV_2, justifyContent: "space-around", paddingHorizontal: 15 }} >
      <Text style={{ ...FONTS.p5, fontWeight: "bold", color: COLORS.black }}  >{barTxt}</Text>

      <View
       style={{
        marginTop: -7,
        borderBottomColor:  COLORS.lightTxtColor,
        borderBottomWidth: 1,
       }}
      />

      <View style={{ justifyContent: "space-between", flexDirection: "row" }} >
        <Text style={{ ...FONTS.p3, color: COLORS?.textColor, fontWeight: "bold" }}  >{barStatus}</Text>
         <ToggleSwitch  isOn={onlineofflineStatus} onColor={COLORS?.btnColor} offColor={COLORS?.textColor}  size="small" onToggle={handleStatus} />    
      </View>

    </View>
  )
}

const onchangeStatus = () =>{
  setonlineOffline(!onlineOffline)
}
const onchangeTeleconsult = () =>{
  setTeleconsult(!Teleconsult)
}
const onchangeHousecalls = () =>{
  setHousecall(!Housecall)
}


const StatusPending = () =>{
  return(
  <View style={{ height: 50, marginBottom: 25, marginTop: 15 ,backgroundColor: COLORS.redCOLOR, marginHorizontal: 15, borderRadius: 5, ...SHADOWELEV_2, justifyContent: "space-around", paddingHorizontal: 15 }} >
    <Text style={{ ...FONTS.p5, fontWeight: "bold", color: COLORS.white }}  >Status: Pending</Text>
  </View>
  )
}


  return ( 
    <>
      <StatusBar backgroundColor={COLORS.lightmainColor} />
      <View style={{ flex: 1, 
        backgroundColor: COLORS.lightmainColor}}
        >
        <ScrollView>

          {renderAboveCard()}
          <View style={{ marginVertical: 8 }} >
          {renderCards()}
          </View>
          
          {supportTeam()}
          {statusBars("Status", onlineOffline ,"Online/ Offline",onchangeStatus)}
          {statusBars("Teleconsult Status",Teleconsult ,"Online/ Offline",onchangeTeleconsult)}
          {statusBars("Housecall Status", Housecall ,"Online/ Offline",onchangeHousecalls)}
          {StatusPending()}

          

        </ScrollView>
      </View>
    </>
  )
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default Home

































