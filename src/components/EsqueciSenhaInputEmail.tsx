import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TextInput, View } from "react-native";

type EsqueciSenhaInputEmailProps = {
  value: string;
  onChangeText: (value: string) => void;
  editable?: boolean;
};

export default function EsqueciSenhaInputEmail({
  value,
  onChangeText,
  editable = true,
}: EsqueciSenhaInputEmailProps) {
  return (
    <View className="mt-6 h-[52px] w-[351px] flex-row items-center justify-between rounded-[10px] border-[1.5px] border-[#B5B5B5] px-5">
      <TextInput
        className="h-full flex-1 p-0 font-lato-regular text-[18px] leading-[22px] text-black"
        placeholder="Email"
        placeholderTextColor="#B5B5B5"
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <MaterialIcons name="visibility-off" size={24} color="transparent" />
    </View>
  );
}
