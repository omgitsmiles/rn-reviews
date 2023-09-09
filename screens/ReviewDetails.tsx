import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/Global";

type Props = {
    route: any;
    navigation: any;
}

// type MyScreenParams = {
//     title: string;
// }

const ReviewDetails: React.FC<Props> = ({ route, navigation }) => {
    const { title, rating, body } = route.params || {}
    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
        <Text>{title}</Text>
        <Text>{rating}</Text>
        <Text>{body}</Text>
        {/* <Button title="Back to Home Screen" onPress={pressHandler} /> */}
        </View>
    );
    }

export default ReviewDetails;