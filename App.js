import React from 'react'
import {
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  NativeBaseProvider,
  VStack,
  Box,
} from 'native-base'
import NativeBaseIcon from './components/NativeBaseIcon'
import { Platform } from 'react-native'
import LoginScreen from './screens/LoginScreen'
import InterestBadge from './components/InterestBadge'
import { Text, View } from 'react-native'
import InterestSelectScreen from './screens/InterestSelectScreen'
import RegisterScreen from './screens/RegisterScreen'
import RoomQueryScreen from './screens/RoomQueryScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FriendStatusScreen from './screens/FriendStatusScreen'
import CreateRoomScreen from './screens/CreateRoomScreen'
import RoomScreen from './screens/RoomScreen'
import ProfileScreen from './screens/ProfileScreen'
import RoomCard from './components/RoomCard'
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="InterestSelection"
          component={InterestSelectScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RoomQuery"
          component={RoomQueryScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="CreateRoom"
          component={CreateRoomScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="RoomScreen"
          component={RoomScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="FriendStatus"
          component={FriendStatusScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
