import { Stack } from "expo-router";
import "../../global.css";
import {useFonts} from "expo-font";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({                                                                                    
    "Lato-Regular": require("../../assets/fonts//Lato/Lato-Regular.ttf"),
    "Lato-Bold": require("../../assets/fonts//Lato/Lato-Bold.ttf"),
    "Lato-Thin": require('../../assets/fonts/Lato/Lato-Thin.ttf')
  });

  if(!fontsLoaded) return null;

  return (
        <Stack screenOptions={{ headerShown: false }} />
  );
}

