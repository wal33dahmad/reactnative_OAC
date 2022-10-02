import { StyleSheet, Text, View } from "react-native";
import React from "react";

import BottomTabs from "../components/home/BottomTabs";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppTextInput from "../components/TextInput";

const SearchScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.text}>Search people</Text>
        <AppTextInput placeholder="Search friends..." width="75%" />
      </View>
      <BottomTabs navigation={navigation} />
    </Screen>
  );
};

export default SearchScreen;

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
