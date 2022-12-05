import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Input,
  Button,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function ProfileScreen() {
  const data = {
    id: 1,
    name: "Natanon",
    profile: {
      uri: "https://reactjs.org/logo-og.png",
    },
    aboutme: "I'm react native developer",
    contact: "device@kml.ds.co.es",
  };

  const image = { uri: "https://reactjs.org/logo-og.png" };
  const [editName, setEditName] = useState(false);
  const [editAboutMe, setEditAboutMe] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const [user, setUser] = useState(data);

  const [newName, setNewName] = useState(user.name);
  const [newAboutMe, setNewAboutMe] = useState(data.aboutme);
  const [newContact, setNewContact] = useState(data.contact);
  useEffect(() => {
    console.log(data);
  });
  function Save() {
    setUser({
      id: 1,
      name: newName,
      profile: {
        uri: "https://reactjs.org/logo-og.png",
      },
      aboutme: newAboutMe,
      contact: newContact,
    });
  }
  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.Nav}>
          <View style={styles.Contain}>
            <View style={styles.Profile}>
              <ImageBackground
                imageStyle={{ borderRadius: 100 }}
                style={styles.Image}
                source={data.profile}
                resizeMode="cover"
              ></ImageBackground>
            </View>
            <View style={styles.Info}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontSize: 20 }}>Name</Text>
                {!editName ? (
                  <AntDesign
                    name="edit"
                    size={24}
                    color="black"
                    style={{ paddingHorizontal: 5 }}
                    onPress={() => {
                      setEditName(true);
                    }}
                  />
                ) : (
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <AntDesign
                      name="checkcircleo"
                      style={{ paddingHorizontal: 5 }}
                      size={20}
                      color="lightgreen"
                      onPress={() => {
                        setEditName(false);
                        Save();
                      }}
                    />
                    <AntDesign
                      name="closecircleo"
                      style={{ paddingHorizontal: 5 }}
                      size={20}
                      color="red"
                      onPress={() => {
                        setEditName(false);
                        setNewName(user.name);
                      }}
                    />
                  </View>
                )}
              </View>

              {!editName ? (
                <Text style={{ fontSize: 20 }}>{user.name}</Text>
              ) : (
                <TextInput
                  placeholder="Interest Name"
                  value={newName}
                  onChangeText={setNewName}
                  style={{
                    height: 30,
                    width: "100%",
                    borderWidth: 1,
                    borderRadius: 10,
                    alignSelf: "center",
                    borderColor: "#9D746B",
                    backgroundColor: "white",
                  }}
                />
              )}
            </View>
          </View>
        </View>
        <View
          style={{ height: "auto", justifyContent: "center", paddingTop: 20 }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{ fontSize: 30, paddingHorizontal: 20, paddingTop: 10 }}
            >
              About Me
            </Text>
            {!editAboutMe ? (
              <AntDesign
                name="edit"
                size={24}
                color="black"
                style={{ paddingHorizontal: 5 }}
                onPress={() => {
                  setEditAboutMe(true);
                }}
              />
            ) : (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <AntDesign
                  name="checkcircleo"
                  style={{ paddingHorizontal: 5 }}
                  size={20}
                  color="lightgreen"
                  onPress={() => {
                    setEditAboutMe(false);
                    Save();
                  }}
                />
                <AntDesign
                  name="closecircleo"
                  style={{ paddingHorizontal: 5 }}
                  size={20}
                  color="red"
                  onPress={() => {
                    setEditAboutMe(false);
                    setNewAboutMe(user.aboutme);
                  }}
                />
              </View>
            )}
          </View>
          {!editAboutMe ? (
            <Text style={{ paddingHorizontal: 20 }}>{user.aboutme}</Text>
          ) : (
            <TextInput
              placeholder="Interest Name"
              defaultValue={newAboutMe}
              onChangeText={setNewAboutMe}
              style={{
                height: 30,
                width: "90%",
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: "center",
                borderColor: "#9D746B",
                backgroundColor: "white",
              }}
            />
          )}
        </View>
        <View
          style={{ height: "auto", justifyContent: "center", paddingTop: 20 }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{ fontSize: 30, paddingHorizontal: 20, paddingTop: 10 }}
            >
              Contact
            </Text>
            {!editContact ? (
              <AntDesign
                name="edit"
                size={24}
                color="black"
                style={{ paddingHorizontal: 5 }}
                onPress={() => {
                  setEditContact(true);
                }}
              />
            ) : (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <AntDesign
                  name="checkcircleo"
                  style={{ paddingHorizontal: 5 }}
                  size={20}
                  color="lightgreen"
                  onPress={() => {
                    setEditContact(false);
                    Save();
                  }}
                />
                <AntDesign
                  name="closecircleo"
                  style={{ paddingHorizontal: 5 }}
                  size={20}
                  color="red"
                  onPress={() => {
                    setEditContact(false);
                    setNewContact(user.contact);
                  }}
                />
              </View>
            )}
          </View>

          {!editContact ? (
            <Text style={{ paddingHorizontal: 20 }}>{newContact}</Text>
          ) : (
            <TextInput
              placeholder="Interest Name"
              defaultValue={newContact}
              onChangeText={setNewContact}
              style={{
                height: 30,
                width: "90%",
                borderWidth: 1,
                borderRadius: 10,
                alignSelf: "center",
                borderColor: "#9D746B",
                backgroundColor: "white",
              }}
            />
          )}
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  BtnSelection: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "10%",
    // maxHeight:"50%"
  },
  BtnStyle: {
    borderColor: "white",
  },
  Nav: {
    display: "flex",
    backgroundColor: "#9D746B",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  Profile: {
    height: 100,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    flex: 1,
    height: 100,
    width: 100,
  },
  Contain: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    paddingTop: 50,
    justifyContent: "center",
  },
  Info: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    paddingLeft: 30,
  },
});
