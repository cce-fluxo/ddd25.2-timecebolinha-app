import { View } from "react-native";
import HeaderInApp from '../../components/HeaderInApp';
import { Text } from "react-native"; // sempre trazer os caras do react-native, nao do outro lá, pra funcionar o tailwind
import { Image } from "react-native";

export default function Perfil(){
    return(
        <View >
            <HeaderInApp></HeaderInApp>
            <View className="flex flex-row mt-12 px-6 items-center gap-4">
                <Image style={{height:48, width:48}} resizeMode="contain" source={require('../../../assets/images/Will.png')}></Image>
                <View className="flex flex-row justify-end gap-2">
                <Text className="text-lg text-black font-lato-bold">Will Smith</Text>
                <Image style={{height:20, width:20, marginTop:5}} resizeMode="contain" source={require('../../../assets/images/BotaoDeEditar.png')}></Image>
                </View>
                {/* essa parte de cima foi o display dos dados do usuário, agora aqui em baixo são as funcionalidades, ai vou fazer uma div grandona e ir fazendo outras divs menores que ficam dentro dela */}
            </View>
            <View className="flex h-full flex-col justify-center items-start border border-gray-300 rounded-xl">
                {/* fazer uma view com par de image e text para todos os elementos dessa área */}
                    <View className="flex flex-row justify-start h-8 items-center gap-4 px-4">
                            <Image className="h-7 w-7" resizeMode="contain" source={require('../../../assets/images/DadosCadastrais.png')}></Image>
                            <Text className="font-lato-regular text-black">Dados Cadastrais</Text>
                    </View>

                    <View className="flex flex-row justify-start h-8 items-center gap-4 px-4">

                    </View>
                </View>
        </View>
    )
}