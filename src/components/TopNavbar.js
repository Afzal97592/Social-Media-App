import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../../assets/logo.jpg'
import { icon1, logo2 } from '../CommonCss/pagesCss'
import {Ionicons } from 'react-native-vector-icons';

const TopNavbar = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logo2} />
      <Ionicons name = 'chatbubbles' size={24} color='black'
       style={icon1}
      />
    </View>
  )
}

export default TopNavbar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingVertical:10,
        paddingHorizontal:5,
        position:'absolute',
        top:0,
        zIndex:100,
        backgroundColor:'#111111'
    }
})