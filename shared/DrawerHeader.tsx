import React from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';

const CustomDrawerHeader = () => {
  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.headerBackground}
    >
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.logo}
        />
        {/* Add any other header elements here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});

export default CustomDrawerHeader;
