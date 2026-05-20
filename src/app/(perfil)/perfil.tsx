import { View } from "react-native";
import { Text } from "react-native"; // sempre trazer os caras do react-native, nao do outro lá, pra funcionar o tailwind
import { Image } from "react-native";
import HeaderInApp from '../../components/HeaderInApp';
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Perfil(){
    const router = useRouter()
    return(
        <View >
            <HeaderInApp></HeaderInApp>
            <View className="flex flex-row mt-12 px-6 items-center gap-4">
                <Image style={{height:48, width:48}} resizeMode="contain" source={require('../../../assets/images/Will.png')}></Image>
                <View className="flex flex-row justify-end gap-2">
                <Text className="text-lg text-black font-lato-bold">Will Smith</Text>
                <TouchableOpacity onPress={()=> router.push("/(perfil)/(dados-cadastro)/dados-cadastro")}>
                <Image style={{height:20, width:20, marginTop:5}} resizeMode="contain" source={require('../../../assets/images/BotaoDeEditar.png')}></Image>
                </TouchableOpacity>
                </View>
                {/* essa parte de cima foi o display dos dados do usuário, agora aqui em baixo são as funcionalidades, ai vou fazer uma div grandona e ir fazendo outras divs menores que ficam dentro dela */}
            </View>
            <View className="flex flex-col justify-start ml-3 mt-7 mx-4 items-stretch border border-gray-400 rounded-xl">
                {/* fazer uma view com par de image e text para todos os elementos dessa área */}
                    <View className="flex flex-row justify-start py-2 items-center gap-4 px-4">
                            <Image className="h-7 w-7 mt-2 -ml-0.8" resizeMode="contain" source={require('../../../assets/images/DadosCadastrais.png')}></Image>
                            <TouchableOpacity onPress={()=> router.push("/(perfil)/(dados-cadastro)/dados-cadastro")} className="font-lato-regular mt-2 text-black">Dados Cadastrais</TouchableOpacity>
                    </View>

                   <View className="w-full h-0.5 bg-gray-400"></View>

                    <View className="flex flex-row justify-start py-2 items-center gap-4 px-4 ">
                            <Image className="w-7 h-7 mt-2 -ml-1" resizeMode="contain" source={require('../../../assets/images/lock.png')}></Image>
                            <TouchableOpacity onPress={()=> router.push('/(perfil)/(alterar-senha)/alterar-senha')}  className="font-lato-regular mt-2 text-black">Segurança</TouchableOpacity>
                    </View>

                    {/*esses outros botões abaixo do botão de alterar senha são botões dummy no figma, eles não levam a lugar nenhum e não tem tela pra eles, então vou deixar assim mesmo hard coded*/}

                    <View className="w-full h-0.5 bg-gray-400"></View>

                    <View className="flex flex-row justify-start py-2 items-center gap-4 px-4">
                            <Image className="w-7 h-7 mt-2 -ml-1" resizeMode="contain" source={require('../../../assets/images/verified_user.png')}></Image>
                            <Text className=" mt-2 font-lato-regular text-black">Privacidade</Text>
                    </View>

                    <View className="w-full h-0.5 bg-gray-400"></View>

                    <View className="flex flex-row justify-start py-2 items-center gap-4 px-4">
                            <Image className="w-7 h-7 mt-2 -ml-1" resizeMode="contain" source={require('../../../assets/images/help.png')}></Image>
                            <Text className=" mt-2 font-lato-regular text-black">Ajuda</Text>
                    </View>
                </View>

                {/* 'botão' de sair */}

                <View className="flex justify-center items-center mt-10">
                    <Text className="font-lato-regular text-indigo-700 text-lg">Sair</Text>
                </View>
        </View>
    )
}