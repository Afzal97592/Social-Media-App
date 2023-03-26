import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {Fontisto} from 'react-native-vector-icons'
import {Ionicons} from 'react-native-vector-icons'
import {FontAwesome} from 'react-native-vector-icons'
import { icon1 } from '../CommonCss/pagesCss'

const BottomNavbar = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name = 'home-variant' size={24} color='black' style={icon1} />
      <Fontisto name = 'search' size={24} color='black' style={icon1}/>
      <Ionicons name = 'ios-heart' size={24} color='black' style={icon1}/>
      <FontAwesome name = 'user-circle' size={24} color='black' style={icon1}/>
    </View>
  )
}

export default BottomNavbar

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        width:'100%',
        zIndex:100,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#111111',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderTopWidth:1,
        paddingVertical:10,
    }
})