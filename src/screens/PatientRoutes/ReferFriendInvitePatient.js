import React, { useEffect, useRef, useState } from 'react'
import {View,Text,StatusBar,Image,ScrollView,TouchableOpacity ,Button,TextInput,FlatList} from 'react-native'
import Header from '../../components/Header'
import SingleInputField from '../../components/InputFields/SingleInputField'
import { IONICONS } from '../../constraints/Icons'
import { COLORS,IMAGES, FONTS, SIZES , SHADOW} from '../../constraints/Index'
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonNoLogo from '../../components/ButtonNoLogo'
import { SHADOWELEV_2 } from '../../constraints/Theme'
// import { PermissionsAndroid } from 'react-native';
// import Contacts from 'react-native-contacts';

const ReferFriendInvitePatient = ({...props}) => {

    const [email, setemail] = useState('')

    console.log("email==>",email);

//     useEffect(()=>{
// callcontacts();
//     },[])
  
// const callcontacts = () => { 

//   Contacts.getAll().then(contacts => {
//     // setContacts(contacts);
// });

      
// }



 const InputFields = () =>{
    return (
        <View style={{ marginHorizontal: 15 , marginVertical:  SIZES.padding }} >
          <Text style={{ fontWeight: '500', color: COLORS.black, ...FONTS.p4, marginBottom: 5,    }} >Email</Text>
          <View style={{ borderColor: COLORS.white, borderWidth: 1, borderRadius: 4, backgroundColor: "#fff", ...SHADOW, height: 45, flexDirection: "row", justifyContent: "space-between",  }}>
            <TextInput 
            value={email} 
            onChangeText={setemail} 
            placeholder={"Enter your email"}  
            />
             <TouchableOpacity style={{ marginRight: 15, justifyContent: "center" }}  onPress={ ()=> console.log("Login") } >
       
          <View style={{  height: 22, width: 30 ,justifyContent: "center", alignItems: "center", backgroundColor: COLORS.btnColor2, borderRadius: 5 }} >
             <Icon name={IONICONS.add} color={"#fff"} size={22} onPress={ ()=> navigation.navigate("Profile") } />
          </View>
             
        </TouchableOpacity>
          </View>
        </View>
      )
 }

const SearchFields = () =>{

  return (
    <View style={{ marginHorizontal: 15 , marginVertical:  SIZES.padding }} >
   <View style={{ borderColor: COLORS.white, borderWidth: 1, borderRadius: 4, backgroundColor: "#fff", ...SHADOWELEV_2, height: 45, flexDirection: "row", justifyContent: "space-between",  }}>
      <TextInput 
      value={email} 
      onChangeText={setemail} 
      placeholder={"Search Your Contact Here"}  
      />
       <TouchableOpacity style={{ marginRight: 15, justifyContent: "center" }}  onPress={ ()=> console.log("Btn Pressed") } >
 
    <View style={{  height: 22, width: 30 ,justifyContent: "center", alignItems: "center",  borderRadius: 5 }} >
       <Icon name={IONICONS.searchIcon} color={"#000"} size={22} onPress={ ()=> console.log("Pressed") } />
    </View>
       
  </TouchableOpacity>
    </View>
  </View>
)
} 

const InviteFriendsBtn = () =>{
     return(

      <ButtonNoLogo
      title="Invite a friends"
      backcolor={COLORS.btnColor2}
      txtcolor={COLORS.white}
      verticlePadding={22}
      width={120}
      onPress1={()=>{ console.log("Btn Pressed"); }}
      FontsBoldness={'600'}
    />

     )
 }

 const Ortxt = () =>{
     return(
         <Text style={{ alignSelf: "center", ...FONTS.p5, fontWeight: "bold", color: COLORS.black, marginBottom: 15 }} >Or</Text>
     )
 } 

 const data =  [
    {
        "id": 1,
        "user_name": "AnasAhmed",
        "email": null,
        "phone_no": "03322731663"
    },
    {
        "id": 2,
        "user_name": "AnasAhmedm",
        "email": null,
        "phone_no": "03322731663"
    },
    {
        "id": 3,
        "user_name": "AnasAhmed",
        "email": null,
        "phone_no": "03322731663"
    },
    {
        "id": 4,
        "user_name": "AnasAhmedm",
        "email": null,
        "phone_no": "03322731663"
    },
    {
        "id": 5,
        "user_name": "AnasAhmed",
        "email": null,
        "phone_no": "03322731663"
    },
    {
        "id": 6,
        "user_name": "AnasAhmedm",
        "email": null,
        "phone_no": "03322731663"
    }
]

 const renderList = () => {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 22,
          marginBottom: 120,
          borderRadius: 10,
          
          ...SHADOWELEV_2

        }}>
        <FlatList
          // scrollEnabled={true}
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={1}
              style={{
                height: 75,
                
                ...SHADOWELEV_2

              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                  // backgroundColor: Colors.yellow,
                  alignItems: 'center',
                  marginLeft: 11,
                  marginRight: 11,

                  
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      width: 42,
                      height: 42,
                    }}
                    source={IMAGES.homeProfilePic}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                    }}>
                    <Text
                      style={{
                        color: COLORS.black,
                        ...FONTS.p4,
                        fontWeight: "bold"
                      }}>
                          {item?.user_name}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.black,
                        fontSize: 12
                    }}>
                          {item?.phone_no}
                    </Text>
                  </View>
                </View>
                <View>
                <TouchableOpacity style={{ flexDirection: "row", height: 35 ,backgroundColor: COLORS.btnColor2, borderRadius: 4, justifyContent: "space-around", alignItems: "center" ,width: 90 }}  onPress={()=>{ console.log("I am Pressed")}} >
                
                <Icon name={IONICONS.personAdd} color={"#fff"} size={18} onPress={ ()=> console.log("Pressed") } />
                <Text style={{ ...FONTS.p3, color: COLORS.white, fontWeight: "700", paddingRight: 5 }} >Invite</Text>
                
                </TouchableOpacity>

                </View>
              </View>

            </TouchableOpacity>
          )}
          numColumns={1}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  };

  return (
    <>
    <StatusBar backgroundColor={COLORS.mainColor} />
    {/* <Header rightIcon={IONICONS?.notificationIcon} rightIconColor={COLORS?.btnColor}  leftIconColor={COLORS?.black} titleColor={COLORS?.black}  title="Refer friend(s)" backgroundColor={COLORS.lightmainColor}  showLeftIcon={true} showRightIcon={true} {...props}  />  */}
     <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
        justifyContent: "center"
      }}>

        {InputFields()}
        {InviteFriendsBtn()}
        {Ortxt()}
        {SearchFields()}

          <ScrollView>
        {renderList()}
          </ScrollView>
    </View>
    </>
  )
}

export default ReferFriendInvitePatient
