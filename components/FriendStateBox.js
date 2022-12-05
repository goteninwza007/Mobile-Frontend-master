import React, { useState } from 'react'
import { HStack, Center, ReactNativeBaseProvider, VStack, Text } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function FriendStateBox(props) {
    const [status,setStatus] = useState(props.status)
  return (
    <HStack space={0} justifyContent="center">
    <Center h="20" w="20%" bg={status!="offline"?"white":"grey"} borderColor="#9D746B" borderWidth="3" shadow={3}><FontAwesome name="user-o" size={15} color={status=="offline"?"black":status=="joining"?"#EEA73C":"green"}/></Center>
    <Center h="20" w={status!="joining"?"80%":"80%"}  bg={status!="offline"?"white":"grey"} borderColor="#9D746B" borderWidth="3" shadow={3}><VStack alignSelf="flex-start" ml="5"><Text>{props.name}</Text><Text>{props.statusAx}</Text></VStack></Center>
    {/* {status=="joining"?<Center  h="20" w={status!="joining"?"0%":"20%"} bg="#EEA73C" borderColor="#9D746B" borderWidth="3" shadow={3}><TouchableOpacity style={[{height:'100%', width:"100%", alignItems:'center', justifyContent:'center'}]}><Text justifyContent="center">Join</Text></TouchableOpacity></Center>:""} */}
  </HStack>
  )
}
