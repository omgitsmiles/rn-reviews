import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
    children: React.ReactNode;
}

const Card: React.FC<Props> = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3, // for android
        backgroundColor: "#fff",
        shadowOffset: { width: 1, height: 1 }, // for ios
        shadowColor: "#333", // for ios
        shadowOpacity: 0.3, // for ios
        shadowRadius: 2, // for ios
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
});''

export default Card;