import EsqueciSenhaBotao from "@/src/components/EsqueciSenhaBotao";
import { redefinirSenha } from "@/src/lib/api";
import Feather from "@expo/vector-icons/Feather";
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

function SenhaInput({
  placeholder,
  value,
  onChangeText,
  editable,
}: {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  editable: boolean;
}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View className="h-[52px] w-[343px] flex-row items-center justify-between rounded-[10px] border-[1.5px] border-[#B5B5B5] px-5">
      <TextInput
        className="h-full flex-1 p-0 font-lato-regular text-[18px] leading-[22px] text-black"
        placeholder={placeholder}
        placeholderTextColor="#B5B5B5"
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        secureTextEntry={!mostrarSenha}
        autoCapitalize="none"
      />
      <Pressable
        onPress={() => setMostrarSenha((value) => !value)}
        disabled={!editable}
      >
        <Feather
          name={mostrarSenha ? "eye" : "eye-off"}
          size={24}
          color="#B5B5B5"
        />
      </Pressable>
    </View>
  );
}

export default function EsqueciSenhaNovaSenhaScreen() {
  const router = useRouter();
  const { token } = useLocalSearchParams<{ token?: string }>();
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  function handleCancelar() {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace("/login");
  }

  async function handleConfirmar() {
    if (!token) {
      setErro("Codigo ausente. Solicite um novo codigo.");
      return;
    }

    if (!senha.trim()) {
      setErro("Por favor, insira a nova senha.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas nao coincidem.");
      return;
    }

    setErro("");
    setLoading(true);

    try {
      await redefinirSenha(String(token), senha);
      Alert.alert("Senha alterada", "Sua senha foi redefinida com sucesso.", [
        {
          text: "Voltar",
          onPress: () => router.replace("/login"),
        },
      ]);
    } catch (error) {
      const mensagem =
        error instanceof Error ? error.message : "Erro ao redefinir senha.";

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
        <View className="w-full max-w-[430px] px-[41px] pt-[124px]">
          <Text className="w-[349px] text-[20px] leading-6 text-black">
            <Text className="font-lato-bold">Insira a sua </Text>
            <Text className="font-lato-bold text-[#5754DE]">nova senha</Text>
          </Text>

          <View className="mt-6 gap-5">
            <SenhaInput
              placeholder="Senha"
              value={senha}
              onChangeText={(value) => {
                setSenha(value);
                setErro("");
              }}
              editable={!loading}
            />
            <SenhaInput
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChangeText={(value) => {
                setConfirmarSenha(value);
                setErro("");
              }}
              editable={!loading}
            />
          </View>

          {erro ? (
            <Text className="mt-2 w-[343px] font-lato-regular text-sm text-red-500">
              {erro}
            </Text>
          ) : null}

          <View className="mt-[44px] w-[339px] flex-row items-center justify-between self-center">
            <EsqueciSenhaBotao
              label="Cancelar"
              variant="secondary"
              onPress={handleCancelar}
              disabled={loading}
            />
            <EsqueciSenhaBotao
              label={loading ? "Salvando..." : "Confirmar"}
              variant="primary"
              onPress={handleConfirmar}
              disabled={loading}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
