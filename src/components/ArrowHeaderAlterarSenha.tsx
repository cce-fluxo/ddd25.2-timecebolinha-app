import { View, Image, TouchableOpacity } from "react-native";

export default function ArrowHeaderAlterarSenha(){
    return(
        <View className="flex">
            <TouchableOpacity onPress={()=> console.log('clicou')}>
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../assets/images/AlterarSenha.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            </TouchableOpacity>
        </View>
    )
}