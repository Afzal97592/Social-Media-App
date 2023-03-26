import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/pagesCss'
import { formHead } from '../../CommonCss/FormCss'
import BottomNavbar from '../../components/BottomNavbar'
import TopNavbar from '../../components/TopNavbar'

const MainPage = ({navigation}) => {
  return (
    <View style={containerFull}>
      <StatusBar />
      <TopNavbar />
      <BottomNavbar />
      <Text style={formHead}>MainPage</Text>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})