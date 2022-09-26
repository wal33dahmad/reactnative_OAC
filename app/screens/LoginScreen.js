import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import Text from "../components/Text";
import colors from "../config/colors";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required()
    .label("Phone"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.logo}>OAC</Text>

      <Form
        initialValues={{ phone: "", password: "" }}
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
          keyboardType="phone-pad"
          name="phone"
          placeholder="Phone Number"
          textContentType="telephoneNumber"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>

      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.push("RegisterScreen1")}>
          <Text style={{ color: colors.secondary }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    fontSize: 72,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 80,
    marginBottom: 50,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginScreen;
