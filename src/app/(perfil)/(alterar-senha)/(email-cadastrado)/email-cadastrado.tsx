import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import InputBox from '../../../../components/InputBox';
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuth } from "@/src/context/AuthContext";
import { enviarCodigoEmail } from "@/src/lib/api";

export default function EmailCadastrado(){
    // fiz uma lógica de estados pra verificar um email que o usuário digita e também pra mostrar um erro caso o usuário cometa algum
    const router = useRouter()
    const {usuario} = useAuth()
    const [emailDigitado, setEmailDigitado] = useState("")
    const [erro, setErro] = useState("")
    const [carregando, setCarregando] = useState(false)

    async function verificarEmail(){
        if(emailDigitado.trim().toLowerCase() !== usuario?.email_usuario?.toLowerCase()){
            setErro("O email informado não corresponde ao cadastrado")
            return
        }
        try{
            setCarregando(true)
            await enviarCodigoEmail(emailDigitado.trim())
        router.push(`/codigo-email?email=${encodeURIComponent(emailDigitado.trim())}`)
        } catch(e:any){
            setErro(e.message ?? "Erro ao enviar código")
        }
        finally{
            setCarregando(false)
        }
    }
    return(
        <View>
            
            {/* header */}
            <TouchableOpacity
            onPress={()=> router.push("/(perfil)/(alterar-senha)/alterar-senha")}>
                <View className="flex">
                <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../../assets/images/AlterarSenha.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            </View>
            </TouchableOpacity>

            {/* textinho de cima */}

            <View className="flex">

            <View className="flex flex-row ml-10">
                <Text className="flex font-lato-regular mt-10 ml-1">Digite o</Text>
                <Text className="flex text-indigo-700 font-lato-bold mt-10 ml-1">email</Text>
                <Text className="flex font-lato-regular mt-10 ml-1">cadastrado</Text>
            </View>

            {/* caixa de input do email */}
            <View className="flex mt-4 w-[80%] ml-10 ">
            <InputBox tipo="email" value={emailDigitado} onChange={(v)=> {setEmailDigitado(v); setErro("")}} placeholder="Email"></InputBox>
            {erro ? <Text className="text-red-500 ml-10 mt-2">{erro}</Text> : null} 
            </View>

            </View>
            {/* botão de continuar */}

            <View style={{width: '50%', marginLeft:110, marginTop:40}}>
            <TouchableOpacity disabled={carregando} onPress={verificarEmail}>
            <View style={{flex:1, width:'100%', borderRadius: 8}}>
            <View className="flex w-[50%] ml-5 px-1 py-2 justify-center items-center bg-indigo-600 text-white font-normal border border-r-2 border-white rounded-xl">
            <Text className="text-white">Continuar</Text>
            </View>
            </View>
            </TouchableOpacity>
            </View>

        </View>
    )
}