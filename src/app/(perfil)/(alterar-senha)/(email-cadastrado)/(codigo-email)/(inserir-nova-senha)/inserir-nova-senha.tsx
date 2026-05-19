import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import InputBox from "@/src/components/InputBox";
import CancelarConfirmarButton from "@/src/components/CancelarConfirmarButton";
import ArrowHeaderAlterarSenha from "@/src/components/ArrowHeaderAlterarSenha";

export default function InserirNovaSenha(){
    return(
        <View className="flex">

            {/*header*/}
            <View className="flex">
            <ArrowHeaderAlterarSenha></ArrowHeaderAlterarSenha>
            </View>
            
            {/* textinho de cima */}

            <View className="flex flex-row ml-8">
                <Text className="flex font-lato-regular mt-10 text-[18px] ml-1">Insira a sua</Text>
                <Text className="flex text-indigo-700 font-lato-regular text-[18px] mt-10 ml-1">nova senha</Text>
            </View>

            {/*colocar duas input boxes aqui*/}

            <View className="flex mt-5 w-[80%] ml-10 gap-4">
                <InputBox tipo="string" onChange={()=> console.log('clicou')} placeholder="Nova senha"></InputBox>
                <InputBox tipo="string" onChange={()=> console.log('clicou')} placeholder="Confirmar senha"></InputBox>
            </View>

            {/*botoes de baixo*/}

            <View className="flex mt-10">
                <CancelarConfirmarButton></CancelarConfirmarButton>
            </View>




        </View>
    )
}