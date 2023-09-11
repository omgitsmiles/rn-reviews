import React from "react";
import { Review } from "./Home"
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/Global";
import { Formik } from "formik";

type Props = {
    addReview: (review: Review) => void;
}

const ReviewForm: React.FC<Props> = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: "", body: "", rating: 0, key: "" }}
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
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Review Body"
                            onChangeText={formikProps.handleChange("body")}
                            value={formikProps.values.body}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange("rating")}
                            value={formikProps.values.rating}
                            keyboardType="numeric"
                        />
                        <Button title="Submit" color="maroon" onPress={formikProps.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default ReviewForm;
