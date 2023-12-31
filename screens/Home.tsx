import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/Global";
import Card from "../shared/Card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";
// import { useNavigation } from "@react-navigation/native";

type Props = {
    navigation: any;
}

export type Review = {
    title: string;
    rating: number;
    body: string;
    key: string;
}

const Home: React.FC<Props> = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    // const navigation = useNavigation();
    const [reviews, setReviews] = useState([
        { title: "Zelda, Breath of Fresh Air", rating: 5, body: "lorem ipsum", key: "1" },
        { title: "Gotta Catch Them All (again)", rating: 4, body: "lorem ipsum", key: "2" },
        { title: "Not So Final Fantasy", rating: 3, body: "lorem ipsum", key: "3" },
    ]);

    const addReview = (review: Review) => {
      if (!review.key) {
        review.key = Math.random().toString();
      }
        setReviews((currentReviews: Review[]) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    const pressHandler = () => {
        navigation.navigate( "Review Details");
        //or
        // navigation.push("Review Details");
    }

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button title="Go to Review Dets" onPress={pressHandler} /> */}

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
          <MaterialIcons 
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

    <MaterialIcons 
      name="add"
      size={24}
      style={styles.modalToggle}
      onPress={() => setModalOpen(true)}
    />

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

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    alignSelf: "center",
    marginTop: 40,
  },
});

export default Home;