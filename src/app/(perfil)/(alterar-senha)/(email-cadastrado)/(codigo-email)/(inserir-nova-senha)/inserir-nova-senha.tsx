import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import InputBox from "@/src/components/InputBox";
import { useRouter } from "expo-router";

export default function InserirNovaSenha(){
    const router = useRouter()
    return(
        <View className="flex">

            {/*header*/}
            <View className="flex">
            <TouchableOpacity onPress={()=> router.push("/codigo-email")}>
            <View className="flex">
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../../../../assets/images/AlterarSenha.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            
        </View>
            </TouchableOpacity>
            </View>
            
            {/* textinho de cima */}

            <View className="flex flex-row ml-8">
                <Text className="flex font-lato-regular mt-10 text-[18px] ml-1">Insira a sua</Text>
                <Text className="flex text-indigo-700 font-lato-regular text-[18px] mt-10 ml-1">nova senha</Text>
            </View>

            {/*colocar duas input boxes aqui*/}

            <View className="flex mt-5 w-[80%] ml-10 gap-4">
                <InputBox tipo="string" onChange={()=> console.log('clicou')} placeholder="Nova senha"></InputBox>
                <InputBox tipo="string" onChange={()=> console.log('clicou')} placeholder="Confirmar senha"></InputBox>
            </View>

            {/*botoes de baixo*/}

            <View className="flex mt-10">
                {/* no mundo ideal, é pra isso aqui aparecer um pop up e depois redirecionar, e seria legal que fosse pra uma página mais inicial, não a de perfil, mas vou deixar a de perfil por enquanto pq ela tá feita*/}
                <TouchableOpacity onPress={()=> router.push('/perfil')}>
                <View className="flex flex-row gap-5 justify-center items-center">
                {/*cancelar*/}
                <View className="flex w-[35%] px-1 py-2 justify-center items-center bg-indigo-300 text-black font-normal border border-r-2 border-white rounded-xl">
                <TouchableOpacity
                onPress={()=> router.push("/alterar-senha")}>Cancelar</TouchableOpacity>
                </View>
                {/*confirmar*/}
                <View className="flex w-[35%] px-1 py-2 justify-center items-center bg-indigo-600 text-white font-normal border border-r-2 border-white rounded-xl">
                <TouchableOpacity
                onPress={()=> router.push("/perfil")}>Confirmar</TouchableOpacity>
                </View>
        </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}