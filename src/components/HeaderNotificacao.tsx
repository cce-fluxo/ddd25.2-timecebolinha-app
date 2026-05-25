import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HeaderNotificacao(){
    const router = useRouter()
    return(
        <View className="w-full h-24 bg-white flex flex-row items-center px-4">
            <View className="w-[50%] h-full bg-white flex flex-row items-center gap-6">
                <TouchableOpacity onPress={()=> router.push('/home/page')}>
                    <Image 
                        source={require('../../assets/images/FlexaEsquerda.png')}
                        style={{ width: 36, height: 36}}>
                    </Image>
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-[#5754DE]">Notificações</Text>
            </View>
            <View className="w-[50%] h-full bg-white flex items-end justify-center">
                <TouchableOpacity onPress={()=> router.push('/home/Notificacoes/page')}>
                    <Image
                        source={require('../../assets/images/Engrenagem.png')}
                        style={{ width: 36, height: 36}}
                    ></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}