import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "../../global.css";
import { AuthProvider } from "../context/AuthContext";


export default function RootLayout() {
  const [fontsLoaded] = useFonts({                                                                                    
    "Lato-Regular": require("../../assets/fonts//Lato/Lato-Regular.ttf"),
    "Lato-Bold": require("../../assets/fonts//Lato/Lato-Bold.ttf"),
    "Lato-Thin": require('../../assets/fonts/Lato/Lato-Thin.ttf')
  });

  if(!fontsLoaded) return null;

  return (
    <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}

