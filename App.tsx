import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import * as font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './routes/Drawer';

SplashScreen.preventAutoHideAsync();

const getFonts = () => font.loadAsync({
  'bebas-neue': require('./assets/fonts/BebasNeue-Regular.ttf'),
  'bungee-spice': require('./assets/fonts/BungeeSpice-Regular.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    getFonts().then(() => {
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    });
  }
  , []);
 

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  } else {
    return null;
  }
}

