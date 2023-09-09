import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/Global";

const Home: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     flex: 1,
//     backgroundColor: "#fff", // white
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   titleText: {
//     fontFamily: "bungee-spice",
//     fontSize: 40,
//   },
// });

export default Home;