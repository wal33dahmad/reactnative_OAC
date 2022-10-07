import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import colors from "../../config/colors";
import TouchableIcon from "../TouchableIcon";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, image }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{name}</Text>
    <TouchableIcon
      name={"account-plus"}
      size={30}
      style={styles.icon}
      onPress={() => {}}
    />
  </View>
);

// the filter
const List = ({ searchPhrase, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show none
    if (searchPhrase === "") {
      return;
    }
    // filter of the Name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return <Item key={item.id} name={item.name} image={item.image} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: colors.light,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
    color: colors.white,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1.6,
    borderColor: "#FF8501",
  },
  icon: {
    marginLeft: 10,
  },
});
