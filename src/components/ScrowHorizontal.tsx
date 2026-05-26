import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HorizontalScroll() {
  return (
    <View className="h-64 w-full -mx-4">
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-3"
        >
        <View className="w-60 h-60 bg-[#5754DE] rounded-xl overflow-hidden">
            <View className="p-4 h-full">
                <Text className="text-white font-bold text-lg">Consultas</Text>
                <Text className="text-white text-xs">Acesse agora todo o seu histórico de consultas!</Text>
                <View className="flex-1 justify-end">
                    <TouchableOpacity className="bg-white rounded-lg px-3 py-2 self-start">
                        <Text className="text-[#5754DE] font-semibold text-xs">Ver minhas consultas</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <Image
                source={require('../../assets/images/MulherVerConsultas.png')}
                style={{ width: 200, height: 200, position: 'absolute', bottom: 0, right: 0 }}
                resizeMode="contain"
            />
        </View>
        <View className="w-60 h-60 bg-[#5754DE] rounded-xl overflow-hidden">
            <View className="p-4 h-full">
                <Text className="text-white font-bold text-lg">Agendamento</Text>
                <Text className="text-white text-xs">Tenha acesso fácil ao seu agendamento!</Text>
                <View className="flex-1 justify-end">
                    <TouchableOpacity className="bg-white rounded-lg px-3 py-2 self-start">
                        <Text className="text-[#5754DE] font-semibold text-xs">Ver meus agendamentos</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <Image
                source={require('../../assets/images/MulherVerAgendamentos.png')}
                style={{ width: 184, height: 184, position: 'absolute', bottom: 0, right: 0 }}
                resizeMode="contain"
            />
        </View>

        </ScrollView>
    </View>
  );
}