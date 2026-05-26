import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Atalhos(){
    const router = useRouter()
    return(
        <View className="w-full h-86 flex-col justify-center gap-6 rounded-3xl border-2 border-gray-300 mt-6 ">
            <Text className="ml-8 mt-4 text-lg">Atalhos</Text>
            <View className="w-full flex-row flex-wrap justify-center">
                <View className="w-1/3 p-2">
                    <View className="bg-white rounded-xl h-28 justify-center items-center">
                        <TouchableOpacity 
                        className="flex items-center justify-center mt-2 border-2 border-[#5754DE] w-16 h-16 rounded-md"
                        onPress={()=> router.push("/home/page")}
                        >
                            <Image source={require('../../assets/images/Calendario.png')}
                            style={{ width: 28, height: 28 }} 
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text className="text-black text-center">Consultas {"\n"}Agendadas</Text>
                    </View>
                </View>
                <View className="w-1/3 p-2">
                    <View className="bg-white rounded-xl h-28 justify-center items-center">
                        <TouchableOpacity 
                        className="flex items-center justify-center mt-2 border-2 border-[#5754DE] w-16 h-16 rounded-md"
                        onPress={()=> router.push("/home/page")}
                        >
                            <Image source={require('../../assets/images/DataDisponivel.png')}
                            style={{ width: 28, height: 28 }} 
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text className="text-black text-center">Data {"\n"}Disponível</Text> 
                    </View>
                </View>
                <View className="w-1/3 p-2">
                    <View className="bg-white rounded-xl h-28 justify-center items-center">
                        <TouchableOpacity 
                        className="flex items-center justify-center mt-2 border-2 border-[#5754DE] w-16 h-16 rounded-md"
                        onPress={()=> router.push("/home/page")}
                        >
                            <Image source={require('../../assets/images/AdicionarData.png')}
                            style={{ width: 28, height: 28 }} 
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text className="text-black text-center">Nova {"\n"}Consulta</Text> 
                    </View>
                </View>
                <View className="w-1/3 p-2">
                    <View className="bg-white rounded-xl h-28 justify-center items-center">
                        <TouchableOpacity 
                        className="flex items-center justify-center mt-2 border-2 border-[#5754DE] w-16 h-16 rounded-md"
                        onPress={()=> router.push("/home/page")}
                        >
                            <Image source={require('../../assets/images/MeuConvenio.png')}
                            style={{ width: 28, height: 28 }} 
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text className="text-black text-center">Meu {"\n"}Convênio</Text>
                    </View>
                </View>
                <View className="w-1/3 p-2">
                    <View className="bg-white rounded-xl h-28 justify-center items-center">
                        <TouchableOpacity 
                        className="flex items-center justify-center mt-2 border-2 border-[#5754DE] w-16 h-16 rounded-md"
                        onPress={()=> router.push("/home/page")}
                        >
                            <Image source={require('../../assets/images/MeusDados.png')}
                            style={{ width: 28, height: 28 }} 
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text className="text-black text-center">Meus {"\n"}Dados</Text>
                    </View>
                </View>
                <View className="w-1/3 p-2">
                    <View className="bg-white rounded-xl h-28 justify-center items-center">
                        <TouchableOpacity 
                        className="flex items-center justify-center mt-2 border-2 border-[#5754DE] w-16 h-16 rounded-md"
                        onPress={()=> router.push("/home/page")}
                        >
                            <Image source={require('../../assets/images/Ajuda.png')}
                            style={{ width: 28, height: 28 }} 
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <Text className="text-black text-center">Ajuda {"\n"} </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}