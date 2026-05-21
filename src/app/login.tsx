import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import BotaoPadrao from "@/src/components/BotaoPadrao";
import HeaderLogin from "@/src/components/HeaderLogin";
import InputBox from "@/src/components/InputBox"

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white flex-col gap-6">
      <View className="flex items-center justify-center h-24 w-full">
        <HeaderLogin></HeaderLogin>
      </View>
      <View className="flex items-center justify-center px-6 w-full">
        <Text className="w-full text-black text-2xl font-bold py-6">
          Seja bem-vindo!
        </Text>
        <View className="w-full items-center justify-center flex flex-col gap-4 mt-4">  
          <InputBox placeholder="Email" tipo="email"></InputBox>
          <InputBox placeholder="Senha" tipo="password"></InputBox>
        </View>
        <View className="w-full items-end justify-end mt-2">
          <TouchableOpacity>
            <Text className="text-sm text-[#5754DE]">Esqueci minha senha</Text>
          </TouchableOpacity>

        </View>
        <View className="w-full items-center justify-center gap-4 mt-4 px-8">
          <BotaoPadrao texto="Entrar" tipo={1} onPress={() => router.push("/")}></BotaoPadrao>
          <BotaoPadrao texto="Cadastrar" tipo={2} onPress={() => router.push("/cadastrar/page")}></BotaoPadrao>
        </View>
      </View>
    </View>
  )
}

