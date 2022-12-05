import React from "react";
import InterestBadge from "../components/InterestBadge";
import { NativeBaseProvider, ScrollView, Text, Input } from "native-base";
import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts, Ribeye_400Regular } from "@expo-google-fonts/ribeye";
import { Ionicons } from "@expo/vector-icons";

export default function InterestSelectScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    Ribeye_400Regular,
  });
  const [search, setSearch] = React.useState("");
  const [select, setSelect] = React.useState([]);
  function selectHandle(name) {
    let clone = [...select];

    if (!clone.includes(name)) {
      clone.push(name);
    } else {
      clone.splice(clone.indexOf(name), 1);
    }

    setSelect(clone);
  }
  const interestName = [
    "basketball",
    "football",
    "ai",
    "pressing",
    "newcomer",
    "detective",
    "invest",
    "twitch.tv",
  ];
  return (
    <NativeBaseProvider>
      <ScrollView style={[{ marginTop: "10%" }]}>
        <View style={styles.textIcon}>
          <Text
            fontSize="3xl"
            style={[{ textAlign: "center", fontFamily: "Ribeye_400Regular" }]}
          >
            What's your
          </Text>
          <Text
            fontSize="3xl"
            style={[{ textAlign: "center", fontFamily: "Ribeye_400Regular" }]}
          >
            interest topic
          </Text>
        </View>
        {/* <TextInput
          placeholder="Search"
          onChangeText={setSearch}
          style={{
            height: 40,
            width: "80%",
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            alignSelf: "center",
            borderColor: "#9D746B",
          }}
        /> */}
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
                  );
              })}
          </View>
        }
        <View style={[{ flex: 1, alignItems: "flex-end" }]}>
          <AntDesign
            name="arrowright"
            size={24}
            color="black"
            onPress={() => {
              if (select.length != 0) {
                navigation.navigate("RoomQuery", { selectInterest: select });
              } else {
                alert("please select your interest");
              }
            }}
          />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  textIcon: {
    textAlign: "center",
    marginTop: "15%",
  },
  BtnSelection: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "10%",
    // maxHeight:"50%"
  },
});
