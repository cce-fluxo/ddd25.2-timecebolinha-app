import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const router = useRouter()

export default function BotaoDeContinuar(){
    return(
        <View style={{flex:1, width:'100%', borderRadius: 8}}>
            <View className="flex w-[50%] px-1 py-2 justify-center items-center bg-indigo-600 text-white font-normal border border-r-2 border-white rounded-xl">
            <TouchableOpacity
            onPress={()=> console.log('clicou')}>Continuar</TouchableOpacity>
            </View>
        </View>
    )
}