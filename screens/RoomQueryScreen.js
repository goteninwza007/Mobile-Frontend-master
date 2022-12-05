import React, { useState } from 'react'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye'
import {
  Input,
  NativeBaseProvider,
  ScrollView,
  Button,
  Text,
  HStack,
  VStack,
} from 'native-base'
import { View } from 'react-native'
// import { Ionicons } from "@expo/vector-icons";
import { TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RoomCard from '../components/RoomCard'
import InterestRoomSwap from '../components/InterestRoomSwap'
import InterestBadge from '../components/InterestBadge'
export default function RoomQueryScreen({ route, navigation }) {
  const data = route.params.selectInterest
  const [selectCat, setSelectCat] = useState('')
  const [room, setRoom] = useState([
    {
      id: 1,
      name: 'ชีวิตก็เหมือนหมูลาบหมูแซ่บๆ',
      tag: ['pressing', 'ai'],
      code: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    },
    {
      id: 2,
      name: 'VAR ช่วยยังไง',
      tag: ['ai', 'football'],
      code: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    },
    {
      id: 3,
      name: 'NBA To Day',
      tag: ['basketball'],
      code: '58694a0f-3da1-471f-bd96-145571e29d72',
    },
    {
      id: 4,
      name: 'คุยหลังเกม อังกฤษ-เซเนกัล',
      tag: ['football'],
      code: '45734a0d-3th2-341d-df34-356721e29e72',
    },
    {
      id: 5,
      name: 'AI จะครองโลก',
      tag: ['ai'],
      code: '87544a2d-1dg2-423f-bdg6-168302e29f32',
    },
    {
      id: 6,
      name: 'สายงาน AI',
      tag: ['ai'],
      code: '58798a0f-4hg1-445k-bg34-126734e24f76',
    },
  ])
  const test = ['football']
  console.log(data, selectCat)
  const fontsLoaded = async () =>
    await useFonts({
      Ribeye_400Regular,
    })
  return (
    <NativeBaseProvider>
      <ScrollView style={[{ marginTop: '20%' }]}>
        <View styles={[{ flex: 1, flexDirection: 'row' }]}>
          <HStack>
            {data.includes('basketball') ? (
              <InterestRoomSwap
                text="basketball"
                onPress={() => {
                  setSelectCat('basketball')
                }}
              />
            ) : null}
            {data.includes('football') ? (
              <InterestRoomSwap
                text="football"
                onPress={() => {
                  setSelectCat('football')
                }}
              />
            ) : null}
            {data.includes('ai') ? (
              <InterestRoomSwap
                text="ai"
                onPress={() => {
                  setSelectCat('ai')
                }}
              />
            ) : null}
            {data.includes('pressing') ? (
              <InterestRoomSwap
                text="pressing"
                onPress={() => {
                  setSelectCat('pressing')
                }}
              />
            ) : null}
            {data.includes('newcomer') ? (
              <InterestRoomSwap
                text="newcomer"
                onPress={() => {
                  setSelectCat('newcomer')
                }}
              />
            ) : null}
            {data.includes('detective') ? (
              <InterestRoomSwap
                text="detective"
                onPress={() => {
                  setSelectCat('detective')
                }}
              />
            ) : null}
            {data.includes('invest') ? (
              <InterestRoomSwap
                text="invest"
                onPress={() => {
                  setSelectCat('invest')
                }}
              />
            ) : null}
          </HStack>
        </View>
        <View styles={[{ flex: 1 }]}>
          {/* <VStack space={4} alignItems="center">
            <InterestBadge text="a" dataLists={["a"]} />
            <InterestBadge text="a" dataLists={["a"]} />
            <InterestBadge text="a" dataLists={["a"]} />
            <InterestBadge text="a" dataLists={["a"]} />
          </VStack> */}
        </View>
        {room.map((room, index) => {
          for (let i = 0; i < data.length; i++) {
            if (room.tag.includes(data[i]))
              return (
                <RoomCard
                  key={room.name}
                  name={room.name}
                  tag={room.tag}
                  code={room.code}
                  navigation={navigation}
                />
              )
          }
        })}
        <View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              width: '80%',
              marginTop: '5%',
              backgroundColor: '#9D746B',
              padding: 8,
              borderRadius: 10,
              position: 'relative',
              bottom: '0%',
            }}
          >
            <Text
              style={{ textAlign: 'center', fontFamily: 'Ribeye_400Regular' }}
              onPress={() => {
                navigation.navigate('CreateRoom', { setRoom })
              }}
            >
              Create Room
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  JoinBut: {
    display: 'flex',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 1,
  },
})
