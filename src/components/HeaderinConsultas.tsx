import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HeaderInConsultas(){
    const router = useRouter();
    return(
        <View className="w-full flex mt-10">
            {/* parte de cima da header */}
            <View className="flex flex-row  w-full h-23 px-6 py-6 justify-between items-center">
                <Image style={{width:100, height:30}} resizeMode="contain" source={require('../../assets/images/SorriSyncLogo.png')}></Image>
                <TouchableOpacity onPress={()=> console.log('clicou')}>
                    <Image resizeMode="contain" source={require('../../assets/images/SinoNoti.png')}></Image>
                </TouchableOpacity>

            </View>
            {/* parte de baixo da header*/}
            <View className="w-full flex flex-row justify-center h-8 items-center"> 
                {/* não tem <hr> no react-native, tem que usar uma view fina mesmo */}
                <TouchableOpacity
                    className="w-1/3 border-t-2 border-b-2 border-b-gray-300 border-t-gray-300 flex items-center justify-center"
                    onPress={()=>router.push("/home/page")}>
                    <Text className="text-black">Inicio</Text>

                </TouchableOpacity>
                {/* Alterar rota após criação de consultas */}
                <TouchableOpacity
                    className="w-1/3 border-t-2 border-b-2 border-b-[#5754DE] border-t-[#5754DE] flex items-center justify-center"
                    onPress={()=>router.push("/home/page")}>
                    <Text className="text-[#5754DE]">Consultas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="w-1/3 border-t-2 border-b-2 border-b-gray-300 border-t-gray-300 flex items-center justify-center"
                    onPress={()=>router.push("/(perfil)/perfil")}>
                    <Text className="text-black">Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}