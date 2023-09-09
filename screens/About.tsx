import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/Global";

const About: React.FC = () => {
    return (
        <View style={styles.container}>
        <Text>About Screen</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            padding: 24,
            flex: 1,
            backgroundColor: "#fff", // white
            alignItems: "center",
            justifyContent: "center",
        },
    });

export default About;
