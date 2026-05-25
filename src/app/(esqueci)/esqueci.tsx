import EsqueciSenhaBotao from "@/src/components/EsqueciSenhaBotao";
import EsqueciSenhaInputEmail from "@/src/components/EsqueciSenhaInputEmail";
import EsqueciSenhaTitulo from "@/src/components/EsqueciSenhaTitulo";
import { enviarCodigoEmail } from "@/src/lib/api";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EsqueciSenhaScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  function handleVoltar() {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace("/login");
  }

  async function handleContinuar() {
    const emailFormatado = email.trim();

    if (!emailFormatado) {
      setErro("Por favor, insira seu e-mail.");
      return;
    }

    setErro("");
    setLoading(true);

    try {
      await enviarCodigoEmail(emailFormatado);
      Alert.alert(
        "E-mail enviado",
        "Confira sua caixa de entrada para continuar a recuperacao de senha.",
      );
      router.push({
        pathname: "/(esqueci)/(codigo-email)/esqueci2",
        params: { email: emailFormatado },
      } as never);
    } catch (error) {
      const mensagem =
        error instanceof Error
          ? error.message
          : "Erro ao enviar o e-mail. Tente novamente mais tarde.";

      setErro(mensagem);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerClassName="min-h-full items-center bg-white"
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full max-w-[430px] px-[39px] pt-[124px]">
          <EsqueciSenhaTitulo />
          <EsqueciSenhaInputEmail
            value={email}
            onChangeText={setEmail}
            editable={!loading}
          />

          {erro ? (
            <Text className="mt-2 w-[351px] font-lato-regular text-sm text-red-500">
              {erro}
            </Text>
          ) : null}

          <View className="mt-[72px] w-[339px] flex-row items-center justify-between self-center">
            <EsqueciSenhaBotao
              label="Voltar"
              variant="secondary"
              onPress={handleVoltar}
              disabled={loading}
            />
            <EsqueciSenhaBotao
              label={loading ? "Enviando..." : "Continuar"}
              variant="primary"
              onPress={handleContinuar}
              disabled={loading}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
