import { Text, TextInput, View } from "react-native"

interface InputBarProps {
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad"
  isPassword?: boolean
  placeholder?: string
  value: string
  onChangeText: (v: string) => void
  onBlur: (e: any) => void
  error: string | undefined
  touched: boolean | undefined
  autoCapitalize?: "none" | "sentences" | "words" | "characters"
  returnKeyType?: "done" | "go" | "next" | "search" | "send"
  maxLength?: number
}

export function InputBar({
  keyboardType = "default",
  isPassword = false,
  placeholder = "",
  value,
  onChangeText,
  onBlur,
  error,
  touched,
  autoCapitalize,
  returnKeyType,
  maxLength,
}: InputBarProps) {
  return (
    <View className="mb-4">
      <View className="flex-row w-full h-14 px-3.5 py-2.5 justify-between items-center rounded-[10px] border-[1.5px] border-[#e0e0e0]">
        <TextInput
          keyboardType={keyboardType}
          secureTextEntry={isPassword}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize={autoCapitalize}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor="#a1a1aa"
          className="flex-1 bg-transparent text-sm"
        />
      </View>
      {touched && error && (
        <Text className="text-red-500 text-xs mt-1 ml-1">{error}</Text>
      )}
    </View>
  )
}
