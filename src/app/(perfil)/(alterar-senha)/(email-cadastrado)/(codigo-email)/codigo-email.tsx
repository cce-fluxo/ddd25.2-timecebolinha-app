import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import InputBox from "@/src/components/InputBox";
import BotaoDeContinuar from "@/src/components/BotaoDeContinuar";
import { useRouter } from "expo-router";

export default function CodigoEmail(){
    const router= useRouter()
    return(
        <View className="flex">
            {/* header*/}
            <TouchableOpacity onPress={()=> router.push("/email-cadastrado")}>
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../../../assets/images/AlterarSenha.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            </TouchableOpacity>

            {/* textinho de cima */}

            <View className="flex flex-row ml-7">
                <Text className="flex font-lato-regular mt-10 ml-1">Insira o</Text>
                <Text className="flex text-indigo-500 font-lato-bold mt-10 ml-1">código</Text>
                <Text className="flex font-lato-regular mt-10 ml-1">que enviamos para seu email</Text>
            </View>

            {/* input box --> coloquei um type de string pro código, a ver se vai ser isso mesmo*/}

            <View className="flex mt-5 w-[70%] ml-7">
                <InputBox tipo="string" onChange={()=> console.log('clicou')} placeholder="Código"></InputBox>
            </View>

            <View className="flex mt-2 ml-9">
                {/*vou deixar o onPress dummy aqui porque ele iria só pra um pop up e isso eu vou fazer depois*/}
                <TouchableOpacity onPress={()=> console.log('clicou')} className="flex text-indigo-600 font-lato-bold text-[13px]">Reenviar código</TouchableOpacity>
            </View>

            <View className="ml-24 mt-8">
                <TouchableOpacity onPress={()=> router.push("/inserir-nova-senha")}>
                <View style={{flex:1, width:'100%', borderRadius: 8}}>
                <View className="flex w-[50%] px-1 py-2 justify-center items-center bg-indigo-600 text-white font-normal border border-r-2 border-white rounded-xl">
                    <Text className="text-white">Continuar</Text>
                </View>
        </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}