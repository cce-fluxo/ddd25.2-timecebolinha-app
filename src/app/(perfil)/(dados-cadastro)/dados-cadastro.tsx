import { View } from "react-native";
import { Image } from "react-native";


export default function dadosCadastro(){
    return(
        <View style={{flex:1}}>
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../assets/images/DadosCadastroApp.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
        </View>
    )
}