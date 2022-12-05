import { NativeBaseProvider, ScrollView, Box, Input, Button, Circle, Icon, Center} from 'native-base'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useFonts, Ribeye_400Regular } from '@expo-google-fonts/ribeye';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import {db} from '../firebase'
export default function RegisterScreen({navigation}) {
  const fontsLoaded = async ()=> await useFonts({
    Ribeye_400Regular,
  });
  const [visible, setVisible] = useState(true)
  const [name, setName] = useState("")
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [cfpassword, setCfPassword] = useState("")
  const [email, setEmail] = useState("")
  async function regis(){
    try{
    await db.collection('user').add({"name":name,"username":username,"email":email,"password":password})
    navigation.goBack()
  }
  catch(err){
    console.log(err);
  }
}

  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={[{alignItems:'center',justifyContent:'center',marginTop:"10%"}]}>
          <Box style={[{ marginTop: "10%" }]}>
            <Box alignSelf="center" alignItems="center" borderWidth="2" borderColor="#736868" bg="white" maxW="80" rounded="lg" pt="0" pr="5" pl="5" pb="5">
              <Box pb="5" pt="8">
                <View>
                  <TouchableOpacity style={styles.roundedButton}>
                  <View onMouseEnter={()=>{setVisible(false)}} onMouseLeave={()=>{setVisible(true)}}>
                  {visible?<FontAwesome name="user-o" size={15} color="black"/>:
                  <MaterialIcons name="file-upload" size={15} color="black"/>}
                  </View>
                  </TouchableOpacity>
                </View>
              </Box>
              <Input size="md" placeholder="Name" mt="2" mb="3" borderWidth="1" borderColor="#736868" onChangeText={(text)=>{setName(text)}}/>
              <Input size="md" placeholder="Username" mt="2" mb="3" borderWidth="1" borderColor="#736868" onChangeText={(text)=>{setUserName(text)}} />
              <Input size="md" placeholder="Email" mt="2" mb="3" borderWidth="1" borderColor="#736868" onChangeText={(text)=>{setEmail(text)}}/>
              <Input type="password" size="md" placeholder="Password" my="3" borderWidth="1" borderColor="#736868" onChangeText={(text)=>{setPassword(text)}}/>
              <Input type="password" size="md" placeholder="Confirm Password" my="3" borderWidth="1" borderColor="#736868" onChangeText={(text)=>{setCfPassword(text)}}/>
              <Button alignSelf="flex-end" mt="4" mb="3" bgColor="#B4948D" borderWidth="1" borderColor="#9D746B" shadow="7" _text={{ fontSize: "md" }} onPress={()=>{regis()}}>Register</Button>
            </Box>
          </Box>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  roundedButton:{
    backgroundColor:"lightgrey",
    width:60,
    height:60,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:"#9D746B"
  },

})
