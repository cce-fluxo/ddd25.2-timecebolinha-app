import { Pressable, Text } from "react-native";

type EsqueciSenhaBotaoProps = {
  label: string;
  variant: "secondary" | "primary";
  onPress?: () => void;
  disabled?: boolean;
};

export default function EsqueciSenhaBotao({
  label,
  variant,
  onPress,
  disabled = false,
}: EsqueciSenhaBotaoProps) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      className={`h-11 w-[155px] items-center justify-center rounded-[10px] ${
        isPrimary ? "bg-[#5754DE]" : "bg-[#CCCBFF]"
      } ${disabled ? "opacity-60" : "opacity-100"}`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        className={`font-lato-regular text-[18px] leading-[22px] ${
          isPrimary ? "text-white" : "text-black"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
