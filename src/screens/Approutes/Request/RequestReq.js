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
import { COLORS, FONTS, SHADOW, SHADOWELEV_1, SHADOWELEV_2, SIZES } from '../../../constraints/Theme';
import { IMAGES } from '../../../constraints/Index';
import { IONICONS } from '../../../constraints/Icons';
import CommentsInputField from '../../../components/InputFields/CommentsInputField';
import { scrollTo } from 'react-native-reanimated';

const RequestReq = ({ navigation, route,  }) => {


  const scrollRef = useRef();
    
        const[Comments,setComments] = useState("")
        const[Commentsrequired,setCommentsrequired] = useState("")
        console.log("Comments==>",Comments);
        console.log("Fee==>",Fee);
        console.log("Date==>",Date);
    
    
        const[Fee,setFee] = useState("")
        const[Date,setDate] = useState("")
        const[Time,setTime] = useState("")
    
    
    
        const renderTabs = () =>{
          return(
              <>
              <View style={{ alignItems: "center", flexDirection: "row", justifyContent: 'center', justifyContent: "space-around",  marginHorizontal: 15, marginTop: 22 }} >
     
                <TouchableOpacity onPress={()=> console.log("Submit")} style={{ height: 45, width: '49%', backgroundColor: COLORS.btnColor2, alignItems: "center", justifyContent: "center", borderRadius: 5, ...SHADOWELEV_2  }} >
                 <Text style={{ ...FONTS.p4, fontWeight: "700", color: COLORS.white }} >Submit</Text>
                </TouchableOpacity>  
     
                <TouchableOpacity onPress={()=> console.log("Skip")}  style={{ height: 45, width: '49%', backgroundColor: "#d2024d", alignItems: "center", justifyContent: "center", borderRadius: 5, ...SHADOWELEV_2   }} >
                <Text style={{ ...FONTS.p4, fontWeight: "700", color: COLORS.white }} >Skip</Text>
                </TouchableOpacity>  
     
              </View>
              </>
          )
      }
    
        return (
        //  <Card />
        <View style={{ flex: 1, backgroundColor: COLORS.lightmainColor, marginTop: 15}} >
    <ScrollView>
        <View style={{ height: 450 ,backgroundColor: COLORS?.white, borderRadius: 5, ...SHADOWELEV_2 , marginHorizontal: 15, marginBottom: 10}} >
    
    
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
    
         <View style={{ margin: 10 }} >
           <Text>Edward William</Text>
           <Text>Location: 850 Heritage St. Hanford </Text>
           <Text> CA 93230 </Text>
           <Text>Speciality: Caregiver  </Text>
           <Text>Symptoms: Agitation </Text>
           <Text>  Mobile Number: (235) *** 000  </Text>
           <Text> Request Type: Teleconsult </Text>
         </View>
    
        </View>
    
    {/* Comment Input Field */}
         <View>
            <CommentsInputField fontSizes={12} title="Comments"  required={Commentsrequired} value={Comments} ChangeText={setComments} title="First Name" placeholdertxt="Enter your comment here" />
         </View>
    
    
    {/* lower twoinput */}
         <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15 }} >
     
          <View>
            <Text>Fee</Text>
          <View style={{ borderColor: COLORS.white, borderWidth: 1, borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, height: 50, width: 140 }}>
            <TextInput style={{ fontSize: 11 }} value={Fee} onChangeText={(e)=>{setFee(e)}} placeholder={"Enter Your Fee Here"} />
          </View>
          </View>
    
          <View>
            <Text>ETA</Text>
          <View style={{ borderColor: COLORS.white, borderWidth: 1, borderRadius: 4, backgroundColor: COLORS.white, ...SHADOWELEV_2, height: 50, width: 140 }}>
            <TextInput style={{ fontSize: 11 }} value={Date} onChangeText={(e)=>{setDate(e)}} placeholder={`Enter your estimated ${"\n"}Date and time of arrival`} />
          </View>
          </View>
    
         </View>
    
         <View>
           {renderTabs()}
         </View>

        </View>

    
    </ScrollView>
        </View>
        );
 
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default RequestReq

































