import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goBack, logo1, row } from '../../../CommonCss/pagesCss'
import {AntDesign} from 'react-native-vector-icons'
import logo from '../../../../assets/logo.jpg'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/FormCss'
import {MaterialCommunityIcons} from 'react-native-vector-icons'


const ForgetPasswordAccounRecoverd = ({navigation}) => {
  return (
    <View style={containerFull}>
    {/* <Text>Signup_Email</Text> */}
    <TouchableOpacity
    onPress={()=>navigation.navigate('Login')}
    style={goBack}
    >
      <AntDesign name='back' size={26} color="white" />
      <Text style={{color:'gray', fontSize:16,
       marginLeft:8,
    }}>Go Back</Text>
    </TouchableOpacity>
     <Image source={logo} style={logo1} />
   <View style={row}>
      <MaterialCommunityIcons name='check-decagram' size={24} color="green" />
      <Text style={formHead2}>Account Recovered Successfully</Text>
   </View>
   <Text
    style={formbtn}
    onPress={()=>navigation.navigate('Login')}
   >Let's Roll</Text>
  </View>
  )
}

export default ForgetPasswordAccounRecoverd

const styles = StyleSheet.create({})