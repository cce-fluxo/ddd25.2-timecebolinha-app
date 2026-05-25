import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HeaderInApp(){
    return(
        <View className="flex mt-10">
            {/* parte de cima da header */}
        <View className="flex flex-row  w-110 h-23 px-6 py-6 justify-between items-center">
            <Image style={{width:100, height:30}} resizeMode="contain" source={require('../../assets/images/SorriSyncLogo.png')}></Image>
            <TouchableOpacity onPress={()=> console.log('clicou')}>
            <Image resizeMode="contain" source={require('../../assets/images/SinoNoti.png')}></Image>
            </TouchableOpacity>

        </View>
            {/* parte de baixo da header*/}
            <View className="bg-gray-200 h-0.5"></View>
        <View className="flex flex-row justify-around h-8 items-center"> 
            {/* não tem <hr> no react-native, tem que usar uma view fina mesmo */}
            <Text>Início</Text>
            <Text>Consultas</Text>
            <Text>Perfil</Text>
        </View>
            <View className="bg-gray-300 h-0.5"></View>
        </View>
    )
}