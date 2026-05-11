import {useRouter} from "expo-router"
import { useEffect } from "react"
import { View, Image } from "react-native"

export default function splashScreen(){
    const router = useRouter()

useEffect(() => {
    const timer = setTimeout(()=> {
        router.replace("/login")
    }, 5000) // tempo em ms que a splash vai ficar visivel no app

    return () => clearTimeout(timer)
}, []);

    return(
        <View className="flex-1 items-center justify-center bg-white">
            {/* meter uma animação wooooow aqui */}
        </View>
    )

}