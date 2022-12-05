import React, { useEffect, useState } from 'react'
import InterestBadge from '../components/InterestBadge'
import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Input,
  Button,
} from 'native-base'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye'
import { Ionicons } from '@expo/vector-icons'
// import { color } from "react-native-elements/dist/helpers";
import { TouchableOpacity } from 'react-native'
import { db } from '../firebase'
import uuid from 'react-native-uuid'
export default function CreateRoomScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Ribeye_400Regular,
  })
  const [search, setSearch] = React.useState('')
  const [select, setSelect] = React.useState([])
  const [name, setName] = React.useState('')
  async function createRoom() {
    try {
      const id = uuid.v4()
      await db.collection('room').add({ name: name, interestTag: select })
      navigation.navigate('RoomScreen', {
        id: id,
        name: name,
      })
    } catch (err) {
      console.log(err)
    }
  }
  function selectHandle(name) {
    let clone = [...select]

    if (!clone.includes(name)) {
      clone.push(name)
    } else {
      clone.splice(clone.indexOf(name), 1)
    }

    setSelect(clone)
  }
  useEffect(() => {
    console.log(select)
  }, [select])

  useEffect(() => {
    console.log(search)
    console.log(
      interestName.filter((name) => name.includes(search.toLowerCase())),
    )
  }, [search])

  const interestName = [
    'basketball',
    'football',
    'ai',
    'pressing',
    'newcomer',
    'detective',
    'invest',
    'noice',
  ]
  return (
    <NativeBaseProvider>
      <ScrollView style={[{ marginTop: '10%' }]}>
        <View style={styles.textIcon}>
          <View style={{ paddingHorizontal: 20 }}>
            <Text
              fontSize="3xl"
              style={[{ textAlign: 'left', fontFamily: 'Ribeye_400Regular' }]}
            >
              Room Name
            </Text>
            {/* <Input style={{ borderRadius: 20 }}></Input> */}
            <TextInput
              placeholder="Room Name"
              style={{
                height: 40,
                width: '100%',
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                alignSelf: 'center',
                borderColor: '#9D746B',
              }}
              onChangeText={(text) => setName(text)}
            />
            <Text
              fontSize="3xl"
              style={[{ textAlign: 'left', fontFamily: 'Ribeye_400Regular' }]}
            >
              interest topic
            </Text>
            {/* <Input onChangeText={setSearch} placeholder={"Search"}></Input> */}
            <TextInput
              placeholder="Interest Name"
              onChangeText={setSearch}
              style={{
                height: 40,
                width: '100%',
                margin: 12,
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                alignSelf: 'center',
                borderColor: '#9D746B',
              }}
            />
            {
              <View style={styles.BtnSelection}>
                {select.map((name, index) => (
                  <InterestBadge
                    key={name}
                    idx={index}
                    text={name}
                    onToggled={() => selectHandle(name)}
                    dataLists={select}
                  />
                ))}
              </View>
            }
            <TouchableOpacity
              style={{
                marginTop: '5%',
                backgroundColor: '#9D746B',
                padding: 8,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ textAlign: 'center' }}
                onPress={() => {
                  createRoom()
                }}
              >
                Create Room
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {
          <View style={styles.BtnSelection}>
            {interestName
              .filter((name) => name.includes(search.toLowerCase()))
              .map((name, index) => {
                if (!select.includes(name))
                  return (
                    <InterestBadge
                      key={name}
                      idx={index}
                      text={name}
                      onToggled={() => selectHandle(name)}
                      dataLists={select}
                    />
                  )
              })}
          </View>
        }
      </ScrollView>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  textIcon: {
    textAlign: 'center',
    marginTop: '15%',
  },
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
})
