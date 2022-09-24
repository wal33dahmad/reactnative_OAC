import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import CountryPicker from "react-native-country-picker-modal";

import Screen from "../components/Screen";
import Text from "../components/Text";
import { Form, FormField, SubmitButton } from "../components/forms";
import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  phone: Yup.number().min(11).required().label("Phone"),
});

function RegisterScreen({ navigation }) {
  const [countryCode, setCountryCode] = useState("");
  const [callingCode, setCallingCode] = useState("");
  return (
    <Screen style={styles.container}>
      <Text style={styles.h1}>Enter your mobile number</Text>
      <Text style={styles.text}>
        Enter the mobile number where you can be reached.
      </Text>
      <View style={styles.countryContainer}>
        <CountryPicker
          withFilter
          countryCode={countryCode}
          withFlag
          withCallingCode
          withCountryNameButton
          onSelect={({ callingCode, cca2 }) => {
            setCallingCode(callingCode);
            setCountryCode(cca2);
          }}
          containerButtonStyle={styles.countrySelector}
        />
      </View>
      <Form
        initialValues={{ phone: "" }}
        onSubmit={(values) => {
          console.log((callingCode[0] + values.phone).toString());
          navigation.push("HomeScreen");
        }}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="phone"
          name="phone"
          placeholder={"Phone number"}
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
  countryContainer: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  countrySelector: {
    alignItems: "center",
    minWidth: "100%",
    padding: 15,
    borderRadius: 25,
  },
});

export default RegisterScreen;
