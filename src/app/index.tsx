import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import BotaoPadrao from "../components/BotaoPadrao";
import HeaderLogin from "../components/HeaderLogin";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white flex-col gap-6">
      <View className="flex items-center justify-center h-24 w-full">
        <HeaderLogin></HeaderLogin>
      </View>
      <View className="flex items-center justify-center w-full px-6">
        <Text className="w-full text-black text-2xl font-bold py-6">
          Seja bem-vindo!
        </Text>
        <View className="w-full items-center justify-center">  
       
        </View>
        <View className="w-full items-center justify-center gap-4">
          <BotaoPadrao texto="Entrar" tipo={1} onPress={() => router.push("/")}></BotaoPadrao>
          <BotaoPadrao texto="Cadastrar" tipo={2} onPress={() => router.push("/cadastrar/page")}></BotaoPadrao>
        </View>
      </View>
    </View>
  )
}

