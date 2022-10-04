import { StyleSheet, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Text from "../components/Text";
import TouchableIcon from "../components/TouchableIcon";
import TextInput from "../components/TextInput";
import colors from "../config/colors";

const ChatScreen = ({ navigation }) => {
  const handleCall = () => {
    navigation.push("CallScreen");
  };
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>Bro Jay</Text>
        <TouchableIcon name="phone" size={25} onPress={handleCall} />
      </View>
      <View style={styles.body}></View>
      <View style={styles.container}>
        <TextInput placeholder="Message" padding={8} width={"80%"} />
        <TouchableIcon name="camera" size={25} />
        <TouchableIcon name="microphone" size={25} />
      </View>
    </Screen>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.darkGreen,
    width: "100%",
  },
  text: {
    fontSize: 25,
  },
  body: {
    flex: 1,
    backgroundColor: colors.green,
  },
});
