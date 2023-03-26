import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goBack, logo1 } from '../../../CommonCss/pagesCss'
import {AntDesign} from 'react-native-vector-icons'
import logo from '../../../../assets/logo.jpg'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/FormCss'

const Signup_Verification = ({navigation}) => {
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
     <Text style={formHead3}>A verification code has been sent to your email</Text>
     <TextInput placeholder='Enter 6 digit code here' style={formInput}/>

    <Text
     style={formbtn}
     onPress={()=>navigation.navigate('SignupUsername')}
    >Next</Text>

  </View>
  )
}

export default Signup_Verification

const styles = StyleSheet.create({})