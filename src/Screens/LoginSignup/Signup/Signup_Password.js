import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goBack, logo1 } from '../../../CommonCss/pagesCss'
import {AntDesign} from 'react-native-vector-icons'
import logo from '../../../../assets/logo.jpg'
import { formbtn, formHead2, formHead3, formInput } from '../../../CommonCss/FormCss'

const Signup_Password = ({navigation}) => {
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
     <Text style={formHead2}>Choose a  strong Password</Text>
     <TextInput placeholder='Enter  password' style={formInput}
      secureTextEntry={true}
     />
     <TextInput placeholder='Confirm  password' style={formInput}
      secureTextEntry={true}
     />

    <Text
     style={formbtn}
     onPress={()=>navigation.navigate('SignUp_AccountCreatedMessage')}
    >Next</Text>

  </View>
  )
}

export default Signup_Password

const styles = StyleSheet.create({})