import { StyleSheet, TextInput, View, Image, Button } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { Divider } from "@rneui/themed";
import * as yup from "yup";

import colors from "../../config/colors";
import AppText from "../Text";
import { SubmitButton } from "../forms";

let uploadPostSchema = yup.object().shape({
  imageURI: yup.string().required("An image is required"),
  caption: yup
    .string()
    .max(2200, "Caption has reached the character limit")
    .required("Caption is required"),
});

const placeholderImg =
  "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";

const FormikPostUploader = ({ navigation }) => {
  const [placeholder_image, setPlaceholder_image] = useState("");
  return (
    <Formik
      initialValues={{ caption: "", imageURI: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("Your post has been shared successfully!");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
    >
      {({ values, errors, handleChange, handleBlur }) => (
        <>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={{
                uri: placeholder_image ? placeholder_image : placeholderImg,
              }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: colors.black, fontSize: 20 }}
                placeholder="Write a caption..."
                placeholderTextColor={colors.medium}
                multiline
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
              {errors.caption && (
                <AppText style={{ color: colors.danger }}>
                  {errors.caption}
                </AppText>
              )}
            </View>
          </View>

          <Divider width={1} orientation="vertical" />

          <TextInput
            onChange={(e) => setPlaceholder_image(e.nativeEvent.text)}
            style={{ color: colors.black, fontSize: 18 }}
            placeholder="Enter Image Url"
            placeholderTextColor={colors.medium}
            onChangeText={handleChange("imageURI")}
            onBlur={handleBlur("imageURI")}
            value={values.imageURI}
          />
          {errors.imageURI && (
            <AppText style={{ color: colors.danger }}>
              {errors.imageURI}
            </AppText>
          )}

          <SubmitButton title="Share" />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
