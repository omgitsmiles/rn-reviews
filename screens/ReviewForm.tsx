import React from "react";
import { Review } from "./Home"
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/Global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/Button";

const ReviewSchema = yup.object({
    title: yup.string()
    .required()
    .min(4),
    body: yup.string()
    .required()
    .min(8),
    rating: yup.string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1-5", (val) => {
        return parseInt(val!) < 6 && parseInt(val!) > 0;
    })
});

type Props = {
    addReview: (review: Review) => void;
}

const ReviewForm: React.FC<Props> = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: "", body: "", rating: 0, key: "" }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                    console.log(values);
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={formikProps.handleChange("title")}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.title && formikProps.errors.title}</Text>
                        <TextInput
                            multiline 
                            minHeight={60}
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={formikProps.handleChange("body")}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur("body")}
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.body && formikProps.errors.body }</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange("rating")}
                            value={formikProps.values.rating}
                            onBlur={formikProps.handleBlur("rating")}
                            keyboardType="numeric"
                        />
                        <Text style={globalStyles.errorText}>{ formikProps.touched.rating && formikProps.errors.rating }</Text>

                        <FlatButton text="Submit" onPress={formikProps.handleSubmit}  />
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default ReviewForm;
