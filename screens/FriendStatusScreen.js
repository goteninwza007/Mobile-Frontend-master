import { Heading, NativeBaseProvider, ScrollView, VStack, Text } from 'native-base'
import React from 'react'
import { View } from 'react-native'
import FriendStateBox from '../components/FriendStateBox'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';

export default function FriendStatusScreen() {
    const fontsLoaded = async ()=> await useFonts({
        Ribeye_400Regular,
      });
  return (
    <NativeBaseProvider>
        <ScrollView style={[{backgroundColor:'#B4948D'}]}>
            <View style={[{marginTop:"20%", marginBottom:"10%", marginLeft:"3%"}]}>
                <Text fontSize="3xl" style={[{fontFamily:'Ribeye_400Regular'}]}>Friend</Text>
            </View>
            <View>
                <VStack space={3} alignItems="center">
                    <FriendStateBox status="joining" name="Goten" statusAx="joing in คุยเรื่องฟุตบอล"/>
                    <FriendStateBox status="avaliable" name="Bigbig" statusAx="ยังไม่ได้เข้าร่วมห้อง"/>
                    <FriendStateBox status="offline" name="Mewmew" statusAx="ไม่ได้ออนไลน์"/>
                    <FriendStateBox status="offline" name="Anim" statusAx="ไม่ได้ออนไลน์"/>
                    <FriendStateBox status="offline" name="BJimmy" statusAx="ไม่ได้ออนไลน์"/>
                    <FriendStateBox status="offline" name="Butler" statusAx="ไม่ได้ออนไลน์"/>
                    <FriendStateBox status="offline" name="Oliver" statusAx="ไม่ได้ออนไลน์"/>
                    
                </VStack>
            </View>
        </ScrollView>
    </NativeBaseProvider>
  )
}
