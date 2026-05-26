import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import HeaderNotificacao from "../../../components/HeaderNotificacao"

export default function Notificacoes(){
    return(
        <View className="w-full h-full bg-white flex flex-col gap-4 items-center justify-center">
            <HeaderNotificacao></HeaderNotificacao>
            <View className="w-full h-18 flex flex-row items-center justify-center gap-4">
                <TouchableOpacity 
                    className="w-36 h-6 border-2 border-[#5754DE] text-[#5754DE] rounded-full flex items-center justify-center"
                    onPress={() => {}}
                >
                    <Text className="text-[#5754DE]">Lido</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-36 h-6 border-2 border-[#5754DE] rounded-full flex items-center justify-center"
                    onPress={() => {}}
                >
                    <Text className="text-[#5754DE]">Não Lido</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="w-full h-50">
                
            </ScrollView>

            <TouchableOpacity className="w-60 h-12 mb-8  bg-[#5754DE] flex items-center justify-center flex-row rounded-xl" onPress={() => {}}>
                <Image source={require('../../../../assets/images/CheckBox.png') } style={{ width: 20, height: 20, marginRight: 10, marginLeft: 10}}/>
                <Text className="text-white">Marcar tudo como lido</Text>
            </TouchableOpacity>
        </View>        
    )
}