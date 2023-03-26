import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goBack, logo1 } from '../../../CommonCss/pagesCss'
import {AntDesign} from 'react-native-vector-icons'
import logo from '../../../../assets/logo.jpg'
import { formbtn, formHead2, formInput } from '../../../CommonCss/FormCss'

const ForgetPasswordEmailPage = ({navigation}) => {
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
       <Text style={formHead2}>Verify your Email</Text>
       <TextInput placeholder='Enter Your Email' style={formInput}/>

      <Text
       style={formbtn}
       onPress={()=>navigation.navigate('ForgetPasswordVerificationPage')}
      >Next</Text>

    </View>
  )
}

export default ForgetPasswordEmailPage

const styles = StyleSheet.create({})