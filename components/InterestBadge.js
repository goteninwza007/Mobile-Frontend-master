import React, { useEffect, useState } from "react";
import { NativeBaseProvider, Button, Pressable, Text } from "native-base";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts, Ribeye_400Regular } from "@expo-google-fonts/ribeye";

export default function InterestBadge(props) {
  const fontsLoaded = async () =>
    await useFonts({
      Ribeye_400Regular,
    });
  const [select, setSelect] = useState(false);
  const [color, setColor] = useState("white");

  useEffect(() => {
    setColor(props.dataLists.includes(props.text) ? "#9D746B" : "white");
  }, [select, props.dataLists]);

  // const [index, setIndex] = React.useState(props.idx)
  return (
    <Button
      variant="unstyled"
      onPress={() => {
        setSelect(!select);
        props.onToggled();
      }}
      borderRadius="full"
      mx="3"
      my="2"
      borderWidth="2"
      _text={{
        fontSize: "sm",
        color: "black",
        fontFamily: "Ribeye_400Regular",
      }}
      style={styles.BtnStyle}
      backgroundColor={color}
    >
      {props.text}
    </Button>
  );
}

const styles = StyleSheet.create({
  BtnStyle: {
    borderColor: "#9D746B",
  },
});
