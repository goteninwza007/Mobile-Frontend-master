import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Input,
  Button,
  Center,
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import { io } from 'socket.io-client'
import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  StyleSheet,
  ImageBackground,
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native'
export default function RoomScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [reportPerson, setReportPerson] = useState('')
  const [micStatus, setMicStatus] = useState(true)
  const socketRef = useRef(null)
  const roomId = route.params.id
  const [users, setUsers] = useState([])
  const ban = {
    name: '',
    reason: '',
  }
  const [gotReport, setGotReport] = useState()
  const mic = {
    uri: 'https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png',
  }
  const mute = {
    uri: 'https://cdn-icons-png.flaticon.com/512/39/39517.png',
  }
  // const room = [
  //   {
  //     id: 1,
  //     name: "ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ",
  //     tag: ["กับข้าว", "ปัญหาชีวิต"],

  //   },
  // ];
  const room = [
    {
      id: 1,
      name: route.params.name,
      tag: ['pressing', 'ai'],
      user_in_room: [
        {
          id: 1,
          name: 'Trda',
          profile: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          },
          role: 'host',
        },
        {
          id: 2,
          name: 'Natanon',
          profile: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          },
          role: 'speaker',
        },
        {
          id: 3,
          name: 'Chaowat',
          profile: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          },
          role: 'speaker',
        },
        {
          id: 4,
          name: 'Santhitak',
          profile: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          },
          role: 'audience',
        },
      ],
    },
    {
      id: 2,
      name: 'chat',
      tag: ['ai', 'football'],
      user_in_room: [
        {
          id: 1,
          name: 'Trda',
          profile: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          },
          role: 'host',
        },
        {
          id: 2,
          name: 'Natanon',
          profile: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
          },
          role: 'speaker',
        },
      ],
    },
  ]
  function report() {
    return alert('test')
  }
  useEffect(() => {
    socketRef.current = io.connect('http://localhost:8000/')
    socketRef.current.emit('join room', roomId)
    socketRef.current.on('all users', (users) => {
      console.log(users)
      setUsers(users)
    })
  }, [])
  return (
    <NativeBaseProvider>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                You want to report {reportPerson}?
              </Text>
              <TextInput
                placeholder={'Reason why you report ' + reportPerson}
                multiline={true}
                style={{
                  flexWrap: 'wrap',
                  height: 'auto',
                  width: 250,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 10,
                  alignSelf: 'center',
                  borderColor: '#9D746B',
                }}
              />

              <Pressable
                style={[
                  styles.button,
                  styles.buttonSubmit,
                  { marginVertical: 5 },
                ]}
                onPress={() => {
                  setModalVisible(!modalVisible), report()
                }}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  styles.buttonClose,
                  { marginVertical: 5 },
                ]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.Nav}>
        <View style={styles.Title}>
          <Text
            style={{ fontSize: 20, paddingVertical: 8, paddingHorizontal: 5 }}
          >
            {room[0].name}
          </Text>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <View style={styles.Speaker}>
            {users.map((user, index) => {
              return (
                <View style={styles.Profile}>
                  <TouchableOpacity
                    style={{ height: '100%' }}
                    onPress={() => {
                      setModalVisible(true), setReportPerson(user.name)
                    }}
                  >
                    <ImageBackground
                      imageStyle={{ borderRadius: 100 }}
                      style={styles.Image}
                      source={room[0].user_in_room[index].profile}
                      resizeMode="cover"
                    ></ImageBackground>
                    <Text style={{ textAlign: 'center' }}>
                      {room[0].user_in_room[index].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            })}
          </View>
        </View>
        <View style={{ width: '100%' }}>
          <View style={{ width: '40%' }}>
            <Text style={{ textAlign: 'right' }}>Speaker</Text>
          </View>
          <View style={styles.Line}></View>
          <View style={{ width: '40%' }}>
            <Text style={{ textAlign: 'right' }}></Text>
          </View>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <View style={styles.Audience}>
            {room[0].user_in_room.map((user, index) => {
              if (user.role === 'audience')
                return (
                  <View style={styles.Profile}>
                    <TouchableOpacity
                      style={{ height: '100%' }}
                      onPress={() => {
                        setModalVisible(true), setReportPerson(user.name)
                      }}
                    >
                      <ImageBackground
                        imageStyle={{ borderRadius: 100 }}
                        style={styles.Image}
                        source={user.profile}
                        resizeMode="cover"
                      ></ImageBackground>
                      <Text style={{ textAlign: 'center' }}>{user.name}</Text>
                    </TouchableOpacity>
                  </View>
                )
            })}
          </View>
        </View>

        <View style={styles.Footer}>
          <View
            style={{
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                {
                  micStatus ? setMicStatus(false) : setMicStatus(true)
                }
              }}
            >
              {micStatus ? (
                <ImageBackground
                  imageStyle={{ borderRadius: 100 }}
                  style={styles.Icon}
                  source={mic}
                  resizeMode="cover"
                ></ImageBackground>
              ) : (
                <ImageBackground
                  imageStyle={{ borderRadius: 100 }}
                  style={styles.Icon}
                  source={mute}
                  resizeMode="cover"
                ></ImageBackground>
              )}
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text>Audience</Text>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text>Speaker</Text>
          </View>
          <View style={{ paddingHorizontal: 20 }}>
            <AntDesign
              name="smileo"
              size={24}
              color="black"
              onPress={() => {
                navigation.navigate('Profile')
              }}
            />
          </View>
          {/* <View></View>
          <View></View> */}
        </View>
      </View>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  BtnSelection: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '10%',
    // maxHeight:"50%"
  },
  BtnStyle: {
    borderColor: 'white',
  },
  Title: {
    marginTop: 80,
    borderColor: 'white',
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: 'white',
    opacity: 0.5,
    width: '80%',
    height: 'auto',
    justifyContent: 'center',
  },
  Speaker: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 80,
    width: '80%',
    height: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  Nav: {
    display: 'flex',
    backgroundColor: '#9D746B',
    height: '100%',
    alignItems: 'center',
  },
  Profile: {
    height: 70,
    paddingHorizontal: 8,
    marginVertical: 10,
  },
  Image: {
    flex: 1,
    height: 60,
    width: 60,
  },
  Line: {
    height: 6,
    width: '40%',
    backgroundColor: 'white',
  },
  Audience: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    height: 'auto',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  Footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '8%',
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'gray',
  },
  buttonSubmit: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  Icon: {
    height: 30,
    width: 30,
  },
})
