import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import InputBox from "@/src/components/InputBox";
import BotaoDeContinuar from "@/src/components/BotaoDeContinuar";

export default function CodigoEmail(){
    return(
        <View className="flex">
            {/* header*/}
            <TouchableOpacity onPress={()=> console.log('clicou')}>
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../../../assets/images/AlterarSenha.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            </TouchableOpacity>

            {/* textinho de cima */}

            <View className="flex flex-row ml-6">
                <Text className="flex font-lato-regular mt-10 ml-1">Insira o</Text>
                <Text className="flex text-indigo-500 font-lato-bold mt-10 ml-1">código</Text>
                <Text className="flex font-lato-regular mt-10 ml-1">que enviamos para seu email</Text>
            </View>

            {/* input box --> coloquei um type de string pro código, a ver se vai ser isso mesmo*/}

            <View className="flex mt-5 w-[70%] ml-6">
                <InputBox tipo="string" onChange={()=> console.log('clicou')} placeholder="Código"></InputBox>
            </View>

            <View className="flex mt-2 ml-8">
                <TouchableOpacity onPress={()=> console.log('clicou')} className="flex text-indigo-600 font-lato-bold">Reenviar código</TouchableOpacity>
            </View>

            <View className="ml-24 mt-8">
                <BotaoDeContinuar></BotaoDeContinuar>
            </View>
        </View>
    )

}