import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import colors from "../config/colors";
import BottomTabs from "../components/home/BottomTabs";

const Chats = ({ navigation }) => {
  return (
    <Screen>
      <View>
        <Text style={styles.text}>Chats</Text>
      </View>
      <BottomTabs navigation={navigation} />
    </Screen>
  );
};

export default Chats;

const styles = StyleSheet.create({
  text: { color: colors.white },
});
