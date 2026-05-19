import { View, Image, Text, TouchableOpacity } from "react-native";

export default function CancelarConfirmarButton(){
    return(
        <View className="flex flex-row gap-5 justify-center items-center">
            {/*cancelar*/}
            <View className="flex w-[35%] px-1 py-2 justify-center items-center bg-indigo-300 text-black font-normal border border-r-2 border-white rounded-xl">
            <TouchableOpacity
            onPress={()=> console.log('clicou')}>Cancelar</TouchableOpacity>
            </View>
            {/*confirmar*/}
            <View className="flex w-[35%] px-1 py-2 justify-center items-center bg-indigo-600 text-white font-normal border border-r-2 border-white rounded-xl">
            <TouchableOpacity
            onPress={()=> console.log('clicou')}>Confirmar</TouchableOpacity>
            </View>
        </View>
    )
}