import { View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";

export default function BoxSemEditar(){
    return(
        <View className="flex border border-black rounded-lg">
        <View className="flex flex-row justify-start py-2 items-center gap-4 px-4">
                            <Image className="h-7 w-7 mt-2 -ml-0.8" resizeMode="contain" source={require('../../assets/images/DadosCadastrais.png')}></Image>
                            <Text className="font-lato-regular mt-2 text-black">Dados Cadastrais</Text>
                    </View>  
        </View>        
    )
}