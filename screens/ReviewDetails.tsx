import React from "react";
import { StyleSheet, Text, View, Button, Image} from "react-native";
import { globalStyles, images } from "../styles/Global";
import Card from "../shared/Card";

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
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={style.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[rating as keyof typeof images.ratings]} />
                </View>
                {/* <Button title="Back to Home Screen" onPress={pressHandler} /> */}
            </Card>
        </View>
    );
    }

    const style = StyleSheet.create({
        rating: {
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 16,
            marginTop: 16,
            borderTopWidth: 1,
            borderTopColor: "#eee",
        },
    });

export default ReviewDetails;