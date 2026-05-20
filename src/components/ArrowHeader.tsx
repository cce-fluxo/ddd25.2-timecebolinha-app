import { View } from "react-native";
import { Image } from "react-native";

{/* copia esse codigo e muda a imagem pela que vc tem que usar */}

export default function ArrowHeader(){
    return(
        <View className="flex">
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../assets/images/DadosCadastroApp.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
        </View>
    )
}