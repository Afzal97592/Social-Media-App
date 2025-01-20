import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  SafeAreaView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const dummyMessages = [
  {
    id: '1',
    text: 'Hey, how are you?',
    sender: 'other',
    timestamp: '09:30 AM',
  },
  {
    id: '2',
    text: "'I'm doing great! How about you?",
    sender: 'me',
    timestamp: '09:31 AM',
  },
  {
    id: '3',
    text: "'Let's meet for coffee tomorrow?",
    sender: 'other',
    timestamp: '09:32 AM',
  },
  {
    id: '4',
    text: 'Sure, sounds good! What time?',
    sender: 'me',
    timestamp: '09:33 AM',
  },
  {
    id: '5',
    text: "'Let's meet for coffee tomorrow?",
    sender: 'other',
    timestamp: '09:32 AM',
  },
  {
    id: '6',
    text: 'Sure, sounds good! What time?',
    sender: 'me',
    timestamp: '09:33 AM',
  },
  {
    id: '7',
    text: "'Let's meet for coffee tomorrow?",
    sender: 'other',
    timestamp: '09:32 AM',
  },
  {
    id: '8',
    text: 'Sure, sounds good! What time?',
    sender: 'me',
    timestamp: '09:33 AM',
  },
  // Add more messages as needed
];

const LevelScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef(null);

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image
          source={{uri: 'https://via.placeholder.com/40'}}
          style={styles.profilePic}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userStatus}>Online</Text>
        </View>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.headerIcon}>
          <Text>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIcon}>
          <Text>VC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIcon}>
          <Text>...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderMessage = ({item}) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'me' ? styles.myMessage : styles.otherMessage,
      ]}>
      <View style={styles.messageContent}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: String(messages.length + 1),
        text: newMessage,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
      flatListRef.current?.scrollToEnd();
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
      {renderHeader()}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
        // onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          {/* <Icon name="attach-file" size={24} color="#666" /> */}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          {/* <Icon name="send" size={24} color="#fff" /> */}
        </TouchableOpacity>
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#075E54',
    height: 60,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStatus: {
    color: '#fff',
    fontSize: 12,
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 20,
  },
  messagesList: {
    padding: 10,
  },
  messageContainer: {
    maxWidth: '80%',
    marginVertical: 5,
  },
  myMessage: {
    alignSelf: 'flex-end',
  },
  otherMessage: {
    alignSelf: 'flex-start',
  },
  messageContent: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  attachButton: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#075E54',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LevelScreen;
