import {
  Box,
  NativeBaseProvider,
  Text,
  Input,
  Button,
  Link,
  ScrollView,
} from "native-base";
import React, { Component, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts, Ribeye_400Regular } from "@expo-google-fonts/ribeye";
import { db } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function LoginScreen({ navigation }) {
  const fontsLoaded = async () =>
    await useFonts({
      Ribeye_400Regular,
    });
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  async function checkUser() {
    const user = await db
      .collection("user")
      .where("username", "==", username)
      .where("password", "==", password)
      .onSnapshot((querySnap) => {
        const users = [];
        querySnap.forEach((doc) => {
          const { email, name, password, username } = doc.data();
          console.log(doc.data());
          users.push({
            id: doc.id,
            email,
            name,
            password,
            username,
          });
        });
        if (users.length != 0) {
          AsyncStorage.setItem("@login", JSON.stringify(users));
          navigation.navigate("InterestSelection");
        } else {
          alert("username or password incorect");
        }
      });
  }
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.textIcon}>
          <Text
            fontSize="3xl"
            style={[{ textAlign: "center", fontFamily: "Ribeye_400Regular" }]}
          >
            The
          </Text>
          <Text
            fontSize="3xl"
            style={[{ textAlign: "center", fontFamily: "Ribeye_400Regular" }]}
          >
            Prattler
          </Text>
        </View>
        <View>
          <Box style={[{ marginTop: "10%" }]}>
            <Box
              alignSelf="center"
              alignItems="center"
              borderWidth="2"
              borderColor="#736868"
              bg="white"
              maxW="80"
              rounded="lg"
              p="5"
            >
              <Input
                size="md"
                placeholder="Username"
                mt="2"
                mb="3"
                borderWidth="1"
                borderColor="#736868"
                onChangeText={(text) => {
                  setUserName(text);
                }}
              />
              <Input
                type="password"
                size="md"
                placeholder="Password"
                my="3"
                borderWidth="1"
                borderColor="#736868"
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />
              <Button
                mt="4"
                mb="3"
                bgColor="#B4948D"
                borderWidth="1"
                borderColor="#9D746B"
                shadow="7"
                _text={{ fontSize: "md", textAlign: "center" }}
                onPress={() => {
                  checkUser();
                }}
              >
                Sign in
              </Button>
            </Box>
          </Box>
          <View style={[{ marginTop: "5%" }]}>
            <Text style={[{ textAlign: "center" }]} fontSize="sm">
              Don't have an account?{" "}
              <Text
                underline
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                sign up
              </Text>
            </Text>
            {/* <Text style={[{textAlign:'center'}]} fontSize="sm">forgot password?</Text> */}
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  textIcon: {
    textAlign: "center",
    marginTop: "40%",
  },
});
