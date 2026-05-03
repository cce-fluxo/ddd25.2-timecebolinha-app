import { Text, TouchableOpacity } from "react-native";

interface BotaoPadraoProps {
  texto: string;
  tipo: 1 | 2 | 3;
  onPress?: () => void;
}

const estilosPorTipo: Record<1 | 2 | 3, { botao: string; texto: string }> = {
  1: { botao: "bg-[#5754DE] border border-[#5754DE]", texto: "text-white" }, // TODO: ajuste o estilo do tipo 1
  2: { botao: "bg-white border border-[#5754DE]", texto: "text-[#5754DE]" }, // TODO: ajuste o estilo do tipo 2
  3: { botao: "bg-gray-200 border", texto: "text-black" }, // TODO: ajuste o estilo do tipo 3
};

//Havia um erro na leitura de cores arbitráias como #5754DE, o tailwind não reconhecia pois havia o comando:
//"reactCompiler": true no app.json, que assim como NativeWind transformava um 
//bg-[#5754DE] em um objeto de estilo { backgroundColor: "#5754DE" }
//removendo isso do app.json, o tailwind passou a reconhecer as cores normalmente.

export default function BotaoPadrao(props: BotaoPadraoProps) {
  const estilos = estilosPorTipo[props.tipo];

  return (
    <TouchableOpacity
      className={`flex w-full items-center justify-center px-5 py-2.5 rounded-[10px] ${estilos.botao}`}
      onPress={props.onPress}
      activeOpacity={0.8}
    >
      <Text className={`text-lg font-medium ${estilos.texto}`}>
        {props.texto}
      </Text>
    </TouchableOpacity>
  );
}
