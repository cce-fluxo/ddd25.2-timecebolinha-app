import { View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

export default function dadosCadastro(){
    return(
        <View style={{flex:1}}>
            <Image style={{width:140, height:60, marginTop:20, marginLeft:20}} resizeMode="contain" source={require('../../../../assets/images/DadosCadastroApp.png')}></Image>
            <View className="w-full h-0.5 bg-gray-300 mt-1"></View>
            {/* a parte da imagem de perfil vai ficar aqui em baixo */}
            <View className="flex justify-center items-center mt-10 -ml-2">

            <Image style={{width:60, height:60}} resizeMode="contain" source={require('../../../../assets/images/Will.png')}></Image>

            </View>

            <View className="flex">
                <Text className="text-indigo-700 ml-10 mt-7">Dados pessoais</Text>
            </View>

            <View className="flex flex-col justify-start ml-3 mt-3.5 mx-4 items-stretch border border-gray-400 rounded-xl">
                {/* coluna com os textos */}
                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Nome completo</Text>
                <Text className="ml-4">Everton Cebolinha</Text>
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                </View>
                </View>

                {/* final da primeira parte do retângulão do meio */}

                <View className="w-full h-0.5 bg-gray-300"></View>

                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Email</Text>
                <Text className="ml-4">cebola@gmail.com</Text>
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                </View>
                </View>

                <View className="w-full h-0.5 bg-gray-300"></View>

                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Data de nascimento</Text>
                <Text className="ml-4">17/01/2004</Text>
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                </View>
                </View>

                <View className="w-full h-0.5 bg-gray-300"></View>

                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">Número de celular</Text>
                <Text className="ml-4">(21) 94002-8922</Text>
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                </View>
                </View>

                <View className="w-full h-0.5 bg-gray-300"></View>

                <View className="flex flex-row items-center h-14 px-4">
                    <View className="gap-1.5 -ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-gray-500 ml-4 mt-2">CPF</Text>
                <Text className="ml-4">166.119.717-50</Text>
                    </View>
                
                {/* imagem alinhada e na direita , aka botao de editar */}
                <View className="flex flex-row justify-end mr-1 -mt-15">
                    <Image style={{width:25 , height:25, alignSelf:'flex-end'}} resizeMode="contain" source={require('../../../../assets/images/BotaoDeEditar.png')}></Image>
                </View>
                </View>
            </View>
                <Text className="mt-5 ml-8 text-indigo-700">Convênio Médico</Text>

                <View className="flex flex-col overflow-hidden justify-start ml-3 mt-3.5 mx-4 items-stretch border border-gray-400 rounded-xl"> 
                    {/* esse overflow-hidden coloca o backgorund dentro da caixinha dele */}
                <View className="-ml-4 -mt-2" style={{flex:1}}>
                <Text className="w-15 text-black ml-8 mt-2">Amil</Text>
                <Text className="w-15 ml-8 text-gray-500 text-sm">00/00/00</Text>
                <Text className="w-15 ml-8 text-gray-500 text-sm">019032367-09</Text>
                <View className="relative">
                    <View className="flex-row justify-end mr-1 absolute -top-6 right-0">                                                
                    <Image style={{width:25, height:25}} resizeMode="contain"                                                       
                    source={require('../../../../assets/images/BotaoDeEditar.png')} />
                    </View>
                    <View className="w-[94%] ml-5 h-0.5 bg-indigo-500"></View>
                    <View className="flex px-3 py-5 h-2 w-full justify-center items-center text-indigo-700 gap-2 self-stretch bg-white border border-indigo-500">
                        <TouchableOpacity
                        onPress={()=> console.log('clicou')}
                        className="bg-white w-[80%] ml-2 px-4 py-2 rounded-lg">
                            <Text className="text-indigo-500 font-bold text-center">Adicionar Convênio</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View> 
                    </View>
                </View>
    )
}