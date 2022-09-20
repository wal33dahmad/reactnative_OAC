import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import Text from "../components/Text";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
});

function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.h1}>What's your name?</Text>
      <Text style={styles.text}>Enter the name you use in real life.</Text>
      <Form
        initialValues={{ firstname: "", lastname: "" }}
        onSubmit={(values) => {
          console.log(values);
          navigation.push("RegisterScreen3");
        }}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          name="firstname"
          placeholder="First Name"
        />
        <FormField
          autoCorrect={false}
          name="lastname"
          placeholder="Last Name"
        />

        <SubmitButton title="Next" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: "25%",
  },
  h1: {
    alignSelf: "center",
    fontWeight: "800",
    marginBottom: 10,
  },
  text: {
    alignSelf: "center",
    fontSize: 14,
    marginBottom: 40,
  },
});

export default RegisterScreen;
