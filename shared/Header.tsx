import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/Global";


 export default function Header() {
   return (
     <View style={styles.header}>
       <Text style={styles.title}>GameZone</Text>
     </View>
   );
 }

    const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1,
    },
    });