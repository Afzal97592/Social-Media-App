import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const LevelScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Animation values
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoPosition = useRef(new Animated.Value(0)).current;
  const emailAnim = useRef(new Animated.Value(0)).current;
  const passwordAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const linksAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // Initial logo scale animation
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      // Form elements and logo movement animation
      Animated.stagger(150, [
        Animated.parallel([
          Animated.timing(emailAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(logoPosition, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(passwordAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(buttonAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(linksAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  const logoTranslateX = logoPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -SCREEN_WIDTH / 2 + 40], // Adjust 40 based on your desired left position
  });

  const logoTranslateY = logoPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -SCREEN_HEIGHT / 2 + 80], // Adjust 80 based on your desired top position
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.innerContainer}>
          {/* Animated Logo */}
          <Animated.View
            style={[
              styles.logoContainer,
              {
                transform: [
                  {scale: logoScale},
                  {translateX: logoTranslateX},
                  {translateY: logoTranslateY},
                ],
              },
            ]}>
            <Text style={styles.logo}>P</Text>
          </Animated.View>

          {/* Email Input */}
          <Animated.View
            style={[
              styles.inputContainer,
              {
                opacity: emailAnim,
                transform: [
                  {
                    translateY: emailAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Animated.View>

          {/* Password Input */}
          <Animated.View
            style={[
              styles.inputContainer,
              {
                opacity: passwordAnim,
                transform: [
                  {
                    translateY: passwordAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Animated.View>

          {/* Sign In Button */}
          <Animated.View
            style={[
              styles.buttonContainer,
              {
                opacity: buttonAnim,
                transform: [
                  {
                    translateY: buttonAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Links */}
          <Animated.View
            style={[
              styles.linksContainer,
              {
                opacity: linksAnim,
                transform: [
                  {
                    translateY: linksAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [50, 0],
                    }),
                  },
                ],
              },
            ]}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Forgot password?</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  logo: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linksContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  linkText: {
    color: '#2196F3',
    fontSize: 14,
    marginBottom: 15,
  },
  signupContainer: {
    flexDirection: 'row',
  },
  signupText: {
    color: '#666',
    fontSize: 14,
  },
  signupLink: {
    color: '#2196F3',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LevelScreen;
