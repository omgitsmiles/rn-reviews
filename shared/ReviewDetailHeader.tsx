import React from "react";
import { Image, ImageBackground } from "react-native";
import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer";
import HomeStack from "../routes/HomeStack";
import About from "../screens/About";
import ReviewDetails from "../screens/ReviewDetails";

const ReviewDetailHeader = () => {
    return (
      <ImageBackground
        source={require("../assets/game_bg.png")} // Replace with your review detail header background image
        style={{ height: 100 }}
      />
    );
  };
  
export default ReviewDetailHeader;
