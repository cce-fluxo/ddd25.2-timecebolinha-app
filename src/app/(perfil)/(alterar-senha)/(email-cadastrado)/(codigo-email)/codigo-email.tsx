import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import InputBox from "@/src/components/InputBox";
import { useRouter } from "expo-router";
import { useState} from "react";
import { useLocalSearchParams } from "expo-router";
import { validarToken, enviarCodigoEmail } from "@/src/lib/api";

export default function CodigoEmail(){
    const router= useRouter()
    const {email} = useLocalSearchParams<{email:string}>()
    const [codigo, setCodigo] = useState("")
    const [erro, setErro] = useState("")
    const [carregando, setCarregando] = useState(false)
    const [popupVisivel, setPopupVisivel] = useState(false)

    async function confirmarCodigo(){
        try{
            setCarregando(true)
            await validarToken(codigo.trim())
            router.push(`/inserir-nova-senha?token=${encodeURIComponent(codigo.trim())}`)
        }catch(e:any){
            setErro(e.message ?? "Código inválido ou expirado")
        }finally{
            setCarregando(false)
        }
    }

    async function reenviarCodigo(){
        if(!email) return

        try{
            await enviarCodigoEmail(email)
            setPopupVisivel(true)
            setTimeout(()=> setPopupVisivel(false), 3000)
        }catch(e:any){
            setErro(e.message ?? "Erro ao reenviar código")
        }
    }
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
                <InputBox tipo="string" onChange={(v) => {setCodigo(v) ; setErro("")}} placeholder="Código"></InputBox>
                {/* colocar o erro aqui em baixo */}
                {erro ? <Text className="text-red-500 mt-7 ml-2">{erro}</Text> :null}
            </View>

            <View className="flex mt-2 ml-9">
                {/*vou deixar o onPress dummy aqui porque ele iria só pra um pop up e isso eu vou fazer depois*/}
                <TouchableOpacity onPress={reenviarCodigo} className="flex text-indigo-600 font-lato-bold text-[13px]">Reenviar código</TouchableOpacity>
            </View>
            <View className="ml-24 mt-8">
                <TouchableOpacity onPress={confirmarCodigo} disabled={carregando}>
                <View style={{flex:1, width:'100%', borderRadius: 8}}>
                <View className="flex w-[50%] px-1 py-2 justify-center items-center bg-indigo-600 text-white font-normal border border-r-2 border-white rounded-xl">
                    <Text className="text-white">Continuar</Text>
                </View>
        </View>
                </TouchableOpacity>
            </View>
            {/*antes do último /view, vou colocar o meu popup, aqui eu meio que vou criar um pq ele vai sumir depois de um tempo ent não da pra usar a tag Modal*/}
            {popupVisivel && (
                <View className="absolute bottom-2 self-center bg-white px-5 py-2 rounded-lg shadow">
                    <Text className="text-indigo-600 font-lato-regular">Código reenviado</Text>
            </View>
            )}
            </View>
    )

}