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
    const { title } = route.params;
    const pressHandler = () => {
        navigation.goBack();
    }

    console.log(navigation)

    return (
        <View style={globalStyles.container}>
        <Text>{JSON.stringify(title)}</Text>
        {/* <Button title="Back to Home Screen" onPress={pressHandler} /> */}
        </View>
    );
    }

export default ReviewDetails;