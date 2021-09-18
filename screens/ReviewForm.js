import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { GlobalStyles } from "../styles/Global";
import { Form, Formik } from "formik";
import * as yup from "yup";
import FlattButton from "../shared/Button";
// import ReviewDetails from "./ReviewDetails";

const reviewsSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num", "Rating must be 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={GlobalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewsSchema}
        onSubmit={(values) => {
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={GlobalStyles.input}
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              multiline
              style={GlobalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={GlobalStyles.input}
              placeholder="Ratings(1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="number-pad"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={GlobalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlattButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};
export default ReviewForm;
