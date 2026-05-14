import { useEffect } from "react";
import { View } from "react-native";
import { router } from "expo-router";
import LottieView from 'lottie-react-native'

export default function splashScreen(){
    useEffect(() => {
        const timer = setTimeout(()=> {
            router.replace("/login")
        }, 8500);
        return ()=> clearTimeout(timer)
    }, []);

    return(
        <View style={{flex:1}}>
            <LottieView source={require("@/assets/animations/Splashscreen.json")} 
                        autoPlay
                        loop={false}
                        style={{flex:1}}
                        renderMode="HARDWARE"
                        cacheComposition={true}>
                        </LottieView>
        </View>
    )
}