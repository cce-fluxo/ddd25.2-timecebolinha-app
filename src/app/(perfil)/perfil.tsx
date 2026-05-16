import { View } from "react-native";
import HeaderInApp from '../../components/HeaderInApp';
import { Text } from "@react-navigation/elements";
import { Image } from "react-native";

export default function Perfil(){
    return(
        <View >
            <HeaderInApp></HeaderInApp>
            <View className="flex ">
                <Image className=""></Image>
            </View>
        </View>
    )
}