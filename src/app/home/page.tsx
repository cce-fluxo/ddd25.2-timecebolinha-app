import { Text, View } from "react-native"
import HeaderInApp from "../../components/HeaderInApp"

export default function Home() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <HeaderInApp></HeaderInApp>
            <Text className="text-2xl font-bold">Homeeeeeeeeeeee</Text>
        </View>
    )
}