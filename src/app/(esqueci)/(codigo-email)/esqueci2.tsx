import EsqueciSenhaBotao from "@/src/components/EsqueciSenhaBotao";
import { enviarCodigoEmail, validarToken } from "@/src/lib/api";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EsqueciSenhaCodigoScreen() {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email?: string }>();
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [reenviando, setReenviando] = useState(false);

  function handleVoltar() {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace("/(esqueci)/esqueci");
  }

  async function handleContinuar() {
    const codigoFormatado = codigo.trim();

    if (!codigoFormatado) {
      setErro("Por favor, insira o codigo.");
      return;
    }

    setErro("");
    setLoading(true);

    try {
      await validarToken(codigoFormatado);
      router.push({
        pathname: "/(esqueci)/(codigo-email)/(inserir-nova-senha)/esqueci3",
        params: { token: codigoFormatado },
      } as never);
    } catch (error) {
      const mensagem =
        error instanceof Error ? error.message : "Codigo invalido ou expirado.";

      setErro(mensagem);
    } finally {
      setLoading(false);
    }
  }

  async function handleReenviarCodigo() {
    if (!email) {
      setErro("Volte e informe o e-mail novamente.");
      return;
    }

    setErro("");
    setReenviando(true);

    try {
      await enviarCodigoEmail(String(email));
      Alert.alert("Codigo reenviado", "Confira sua caixa de entrada.");
    } catch (error) {
      const mensagem =
        error instanceof Error ? error.message : "Erro ao reenviar o codigo.";

      setErro(mensagem);
    } finally {
      setReenviando(false);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerClassName="min-h-full items-center bg-white"
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full max-w-[430px] px-[41px] pt-[124px]">
          <Text className="w-[349px] text-[20px] leading-6 text-black">
            <Text className="font-lato-bold">Insira o </Text>
            <Text className="font-lato-bold text-[#5754DE]">codigo</Text>
            <Text className="font-lato-bold">
              {" "}
              que enviamos{"\n"}para o seu e-mail
            </Text>
          </Text>

          <View className="mt-6 h-[52px] w-[349px] flex-row items-center justify-between rounded-[10px] border-[1.5px] border-[#B5B5B5] px-5">
            <TextInput
              className="h-full flex-1 p-0 font-lato-regular text-[18px] leading-[22px] text-black"
              placeholder="Codigo"
              placeholderTextColor="#B5B5B5"
              value={codigo}
              onChangeText={(value) => {
                setCodigo(value);
                setErro("");
              }}
              editable={!loading}
              autoCapitalize="none"
            />
            <MaterialIcons
              name="visibility-off"
              size={24}
              color="transparent"
            />
          </View>

          <Pressable
            className={`ml-1 mt-[14px] self-start ${reenviando ? "opacity-60" : "opacity-100"}`}
            onPress={handleReenviarCodigo}
            disabled={reenviando || loading}
          >
            <Text className="font-lato-bold text-[15px] leading-[18px] text-[#5754DE]">
              {reenviando ? "Reenviando..." : "Reenviar codigo"}
            </Text>
          </Pressable>

          {erro ? (
            <Text className="mt-2 w-[349px] font-lato-regular text-sm text-red-500">
              {erro}
            </Text>
          ) : null}

          <View className="mt-[40px] w-[339px] flex-row items-center justify-between self-center">
            <EsqueciSenhaBotao
              label="Voltar"
              variant="secondary"
              onPress={handleVoltar}
              disabled={loading || reenviando}
            />
            <EsqueciSenhaBotao
              label={loading ? "Validando..." : "Continuar"}
              variant="primary"
              onPress={handleContinuar}
              disabled={loading || reenviando}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
