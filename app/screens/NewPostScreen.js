import { StyleSheet } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = ({ navigation }) => {
  return (
    <Screen>
      <AddNewPost navigation={navigation} />
    </Screen>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({});
