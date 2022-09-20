import { StyleSheet, View } from "react-native";
import React from "react";

import TouchableIcon from "../TouchableIcon";
import AppText from "../Text";

const Header = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableIcon
        name={"chevron-left"}
        onPress={() => navigation.goBack()}
      />
      <AppText style={styles.headerText}>NEW POST</AppText>
      <AppText></AppText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "700",
    fontSize: 20,
    marginRight: 25,
  },
});
