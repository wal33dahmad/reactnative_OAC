import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import Text from "../components/Text";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  phone: Yup.number().min(11).required().label("Phone"),
});

function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.h1}>Enter your mobile number</Text>
      <Text style={styles.text}>
        Enter the mobile number where you can be reached.
      </Text>
      <Form
        initialValues={{ phone: "" }}
        onSubmit={(values) => {
          console.log(values);
          navigation.push("HomeScreen");
        }}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="phone"
          name="phone"
          placeholder="Phone number"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
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
