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

const RequestSchedule = ({ navigation, route,  }) => {


    return (
        <View>
          <Text>W8 for Api</Text>
        </View>
        );
 
}

const styleUser = StyleSheet.create({
  borderBottomWidth: 1,
  borderColor: '#eee',
  padding: 1,
  marginTop: 10
})

export default RequestSchedule

































