import { Text, View } from "react-native"
import HeaderInApp from "../../components/HeaderInApp"
import HorizontalScroll from "../../components/ScrowHorizontal"

export default function Home() {
    return (
        <View className="w-full h-full flex items-center bg-white">
            <HeaderInApp></HeaderInApp>
            <Text className="text-2xl font-bold">Homeeeeeeeeeeee</Text>
            <HorizontalScroll></HorizontalScroll>
        </View>
    )
}