import React, { useState } from 'react'
import { View, Text, Button, Image, Animated, FlatList,ScrollView,TouchableOpacity } from 'react-native'
import { COLORS, IMAGES, FONTS, SHADOW } from '../../constraints/Index'
import { SHADOWBOX } from '../../constraints/Theme'
import Icon from 'react-native-vector-icons/Ionicons'


const LoginSelect = ({navigation, route}) => {

  const[id,setid] = useState("")

  
  const handleSelection = (item) => {
    setid(item.id)

    setTimeout(() => {
      if (item.route == 'Login') {
        navigation.navigate(item.route,{ navi: "goPatient" })
        setid("") 
      }
      else{
        navigation.navigate(item.route)
        setid("") 
      }
      
    
    }, 500);
  
  }



  function logoContent() {
    return(
      <View style={{ marginTop: 90, marginBottom: -10 }}>

      <View style={{ alignItems: 'center', }}>
        <Image
          style={{
            width: 158,
            height: 80,
            resizeMode: 'contain'
          }}
          source={IMAGES.soslogoheading}
        />
      </View>

      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            ...FONTS.p2,
            marginTop: 35,
            fontWeight: '700',
            color: COLORS.black
          }}>
          Continue as a
        </Text>
      </View>

      </View>
    )
  }


  function renderCard() {
    

    const arrayObj = [
      {
        id: 1,
        pic: IMAGES.ProviderPic,
        text: 'Provider',
        route: "ProviderOptionScreen"
      },
      {
        id: 2,
        pic: IMAGES.patientPic,
        text: 'Patient',
        route: "Login"
    }
    ]


    const renderItem = ({ item }) => {
      return (
        // navigation.navigate(item.route),
        <TouchableOpacity activeOpacity={1} onPress={()=>{ handleSelection(item)}} >
      <View key={item.id} style={{ alignItems: 'center' }}>
          <View style={{
            height: 185,
            width: 230,
            backgroundColor: COLORS.white,
            ...SHADOWBOX,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
            borderRadius: 5
          }}>
          <Image style={{
              width: 75,
              height: 75,
              marginTop: 10,
              // backgroundColor: "#f2aa4c",
              resizeMode: 'contain'
            }}
            source={item.pic} />
          <View>
            <Text style={{
                ...FONTS.p1,
                color: COLORS.black,
                fontWeight: '600',
                marginTop: 10,
              }}>{item.text}
            </Text>
          </View>
          {id == item.id ? <Text style={{ alignSelf: "flex-end", fontWeight: "bold", height: 20, width: 20, backgroundColor: "#f2aa4c", borderRadius: 10, }} ><Icon name="checkmark" size={18} color={COLORS.black} /></Text>:  <Text style={{ alignSelf: "flex-end", fontWeight: "bold" }} ></Text>}
          </View>
      </View>
        </TouchableOpacity>
      )
    }

    return (
      <View>
          <FlatList
            data={arrayObj}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
          />
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightmainColor,
        justifyContent: 'center',
      }}>
          <ScrollView>
     
      {logoContent()}
      {renderCard()}
          </ScrollView>

    </View>
  )
}

export default LoginSelect
