import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import InputBox from "@/src/components/InputBox";
import CancelarConfirmarButton from "@/src/components/CancelarConfirmarButton";
import ArrowHeaderAlterarSenha from "@/src/components/ArrowHeaderAlterarSenha";

export default function InserirNovaSenha(){
    return(
        <View className="flex">

            <View className="flex">
            <ArrowHeaderAlterarSenha></ArrowHeaderAlterarSenha>
            </View>

            
        </View>
    )
}