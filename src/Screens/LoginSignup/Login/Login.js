import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import logo from '../../../../assets/logo.jpg'
import { containerFull, hr80, logo1 } from '../../../CommonCss/pagesCss'
import {formHead, formInput, formTextLinkRight, formbtn, formTextLinkCenter} from '../../../CommonCss/FormCss'
const Login = ({navigation}) => {
  return (
    <View style={containerFull}>
        <Image source={logo}  style={logo1}/>
        <Text style={formHead}>Login</Text>
        <TextInput placeholder='Enter your email' style={formInput} />
        <TextInput placeholder='Password' style={formInput}
        secureTextEntry={true} />
        <Text
        style={formTextLinkRight}
        onPress={()=>navigation.navigate('ForgetPasswordEmailPage')}
        >
            Forget Password?
        </Text>
        <Text style={formbtn}
         onPress={()=>navigation.navigate('MainPage')}
        >Submit</Text>
        <View style={hr80}></View>
        <Text style={formTextLinkCenter} >Don't have an account? 
            <Text onPress={()=>navigation.navigate('Signup_Email')}
             style={{color:'white'}}
            >  Signup</Text>
        </Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})