import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/Global";
import Card from "../shared/Card";
// import { useNavigation } from "@react-navigation/native";

type Props = {
    navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
    // const navigation = useNavigation();
    const [reviews, setReviews] = useState([
        { title: "Zelda, Breath of Fresh Air", rating: 5, body: "lorem ipsum", key: "1" },
        { title: "Gotta Catch Them All (again)", rating: 4, body: "lorem ipsum", key: "2" },
        { title: "Not So Final Fantasy", rating: 3, body: "lorem ipsum", key: "3" },
    ]);

    const pressHandler = () => {
        navigation.navigate( "Review Details");
        //or
        // navigation.push("Review Details");
    }

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button title="Go to Review Dets" onPress={pressHandler} /> */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Review Details", item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
        />
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