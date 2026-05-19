import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import InputBox from '../../../../components/InputBox';
import BotaoDeContinuar from "@/src/components/BotaoDeContinuar";

export default function EmailCadastrado(){
    return(
        <View>
            {/* header */}
            <TouchableOpacity
            onPress={()=> console.log('clicou')}>
                <View className="flex">
                <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../../assets/images/AlterarSenha.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            </View>
            </TouchableOpacity>

            {/* textinho de cima */}

            <View className="flex flex-row ml-6">
                <Text className="flex font-lato-regular mt-10 ml-1">Digite o</Text>
                <Text className="flex text-indigo-700 font-lato-bold mt-10 ml-1">email</Text>
                <Text className="flex font-lato-regular mt-10 ml-1">cadastrado</Text>
            </View>

            {/* caixa de input do email */}
            <View className="flex mt-5 w-[80%] ml-4">
            <InputBox tipo="email" onChange={()=> console.log('clicou')} placeholder="Email"></InputBox>
            </View>

            {/* botão de continuar */}

            <View style={{width: '30%', marginLeft:110, marginTop:40}}>
            <BotaoDeContinuar></BotaoDeContinuar>
            </View>

        </View>
    )
}