import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Screens/LoginSignup/Login/Login';
import Signup_Email from './src/Screens/LoginSignup/Signup/Signup_Email';
import Signup_Password from './src/Screens/LoginSignup/Signup/Signup_Password';
import Signup_Verification from './src/Screens/LoginSignup/Signup/Signup_Verification';
import SignupUsername from './src/Screens/LoginSignup/Signup/SignupUsername';
import SignUp_Message from './src/Screens/LoginSignup/Signup/SignUp_Message';
import ForgetPassworNewPasswordPage from './src/Screens/LoginSignup/ForgetPoss/ForgetPassworNewPasswordPage'
import ForgetPasswordEmailPage from './src/Screens/LoginSignup/ForgetPoss/ForgetPasswordEmailPage'
import ForgetPasswordVerificationPage from './src/Screens/LoginSignup/ForgetPoss/ForgetPasswordVerificationPage'
import ForgetPasswordAccounRecoverd from './src/Screens/LoginSignup/ForgetPoss/ForgetPasswordAccounRecoverd'
import MainPage from './src/Screens/MainPages/MainPage';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerShown:false,
      animation:'slide_from_right'
     }}
    >
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Signup_Email' component={Signup_Email} />
    <Stack.Screen name='SignupUsername' component={SignupUsername} />
    <Stack.Screen name='Signup_Password' component={Signup_Password} />
    <Stack.Screen name='Signup_Verification' component={Signup_Verification} />
    <Stack.Screen name='SignUp_AccountCreatedMessage' component={SignUp_Message} />
    <Stack.Screen name='ForgetPasswordEmailPage' component={ForgetPasswordEmailPage} />
    <Stack.Screen name='ForgetPassworNewPasswordPage' component={ForgetPassworNewPasswordPage} />
    <Stack.Screen name='ForgetPasswordVerificationPage' component={ForgetPasswordVerificationPage} />
    <Stack.Screen name='ForgetPasswordAccountrecoverd' component={ForgetPasswordAccounRecoverd} />
    <Stack.Screen name='MainPage' component={MainPage} />


    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
