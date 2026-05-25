import {View, Text, Image} from 'react-native'

export default function BoxComEditar(){
    return(
        <View className='flex border border-gray-500 rounded-lg'>
            <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Nome completo</Text>
                <Text className="ml-4">Everton Cebolinha</Text>
                    </View>
                
                {/* imagem alinhada e na direita , o nosso botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../assets/images/BotaoDeEditar.png')}></Image>
                </View>
                </View>
        </View>
    )
}