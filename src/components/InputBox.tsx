import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type Tipo = "email" | "password" | "string";

interface InputBoxProps {
  placeholder: string;
  tipo: Tipo;
  value?: string;
  onChange?: (v: string) => void;
}

export default function InputBox(props: InputBoxProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const isPassword = props.tipo === "password";
  const isEmail = props.tipo === "email";

  return (
    <View className="w-full flex-row items-center border border-gray-400 rounded-lg px-4 py-2">
      <TextInput
        className="flex-1 text-base text-black"
        placeholder={props.placeholder}
        placeholderTextColor="#B5B5B5"
        value={props.value}
        onChangeText={props.onChange}
        secureTextEntry={isPassword && !mostrarSenha}
        keyboardType={isEmail ? "email-address" : "default"}
        autoCapitalize="none"
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setMostrarSenha((prev) => !prev)}>
            <Feather name={mostrarSenha ? "eye-off" : "eye"} size={6} color="#9CA3AF" className="ml-2" />
        </TouchableOpacity>
      )}
    </View>
  );
}