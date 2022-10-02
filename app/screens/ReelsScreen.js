import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BottomTabs from "../components/home/BottomTabs";
import Screen from "../components/Screen";
import colors from "../config/colors";

const ReelsScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>Videos coming soon!</Text>
      </View>
      <BottomTabs navigation={navigation} />
    </Screen>
  );
};

export default ReelsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: colors.white,
  },
});
