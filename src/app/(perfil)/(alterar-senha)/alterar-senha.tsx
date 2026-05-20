import {View, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const router = useRouter()

export default function AlterarSenha(){
    return(
        <View>
            {/* arrow header */}
            <View className="flex">
            <TouchableOpacity
            onPress={()=> router.push('/(perfil)/perfil')}>
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../assets/images/Seguranca.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            </TouchableOpacity>
        </View>
            {/* Alterar senha */}
            <View className='flex'>
                <Text className='flex mt-7 ml-8 text-indigo-700 text-base font-lato-regular'>Alterar Senha</Text>
                <View className='w-[90%] mx-4 mt-4'>
                <View className='flex border border-gray-500 rounded-lg'>
            <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 font-lato-regular ml-4 mt-2">Senha</Text>
                <Text className="ml-4 font-bold text-xl">.......</Text>
                    </View>
                
                {/* imagem alinhada e na direita , o nosso botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <TouchableOpacity onPress={()=> router.push('/(perfil)/(alterar-senha)/(email-cadastrado)/email-cadastrado')}>
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                    </TouchableOpacity>
                </View>
                </View>
                </View>
                </View>
            </View>
        </View>
    )
}