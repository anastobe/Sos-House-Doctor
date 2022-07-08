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
  Image,
  Modal,
  Pressable
} from 'react-native'
import { useDispatch } from 'react-redux';
import { COLORS, SIZES, IMAGES,FONTS } from '../constraints/Index'
import { HandleModalSignOut } from '../stores/actions/form.action';


const CustomDrawer = ({ navigation, route,  }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const dispatch =  useDispatch()
    
    function DrawerProfile(params) {
        return(
            <View style={{ alignItems: 'center', height: 200, backgroundColor: COLORS.mainColor, justifyContent: 'center'  }} >

            <View style={{ height: 100, width: 100, justifyContent: "center", alignItems: 'center' , backgroundColor: COLORS.white, borderColor: "#fff", borderWidth: 1, borderRadius: 50, }} >
            <Image
         style={{
          width: 92,
          height: 92,
           resizeMode: 'contain'
         }}
         source={IMAGES?.drWilliam}
       />
            </View>
            <View style={{ alignItems: 'center'}}  >
                <Text style={{ ...FONTS.p5, color: COLORS.white }} >DR: Anas Ahmed</Text>
                <Text style={{ ...FONTS.p5, color: COLORS.btnColor }} >View Profile</Text>
            </View>
      
      
          </View>
        )
    }

    const DrawerMenus = [
        {
            id: 1,
            screenName: "Home",
            route: "Home"
        },
        {
            id: 2,
            screenName: "Profile",
            route: "Profile"
        },
        {
            id: 3,
            screenName: "Request",
            route: "Request"
        },
        {
            id: 4,
            screenName: "My Appointments",
            route: "MyAppoinment"
        },
        {
            id: 5,
            screenName: "Refer a Friend",
            route: "ReferFriend"
        },
        {
            id: 6,
            screenName: "Earning",
            route: "Earning"
        },
        {
            id: 7,
            screenName: "Settings",        
            route: "Setting"
        },
        {
            id: 8,
            screenName: "Contact",
            route: "Contact"
        },
    ]

    const Menus = () =>{

       function renderItem(item) {
        return(
            <View style={{ height: 50, borderBottomWidth: 1, borderBottomColor: COLORS.lightTxtColor ,justifyContent: "center", paddingLeft: 20 }} >
             <TouchableOpacity onPress={()=> navigation.navigate(item?.item?.route) } >
                <Text style={{ ...FONTS.p5, color: COLORS.black }} >{item?.item?.screenName}</Text>
             </TouchableOpacity>


            </View>
        )   
       } 

        return(
        <FlatList
        scrollEnabled={true}
            data={DrawerMenus}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
          />
        )
    }

    const SignOut = ()=>{
    return(
        <View style={{ height: 50, borderBottomWidth: 1, borderBottomColor: COLORS.lightTxtColor ,justifyContent: "center", paddingLeft: 30 }} >
       
        <TouchableOpacity onPress={()=>{ 
         dispatch(HandleModalSignOut({
            visibility: true,
            title: "SignOut",
           }))
            , navigation.closeDrawer() 
            }} >
                   <Text style={{ ...FONTS.p5, color: COLORS.black }} >SignOut</Text>
        </TouchableOpacity>
        
        </View>
    )
    }

    const RenderLogo = () =>{
    return(
        <View style={{ alignItems: "center" }} >
             <Image
         style={{
          width: 130,
          height: 130,
           resizeMode: 'contain'
         }}
         source={IMAGES?.soslogoheading}
       />
        </View>
    )
}




    return (
    <View>
        <ScrollView>

     {DrawerProfile()}
     {Menus()}
     {SignOut()}
     {RenderLogo()}
        

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default CustomDrawer

































