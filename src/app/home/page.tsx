import { View } from "react-native"
import Atalhos from "../../components/Atalhos"
import HeaderInApp from "../../components/HeaderInApp"
import HorizontalScroll from "../../components/ScrowHorizontal"
export default function Home() {
    return (
        <View className="w-full h-full flex items-center bg-white gap-6">

            <HeaderInApp></HeaderInApp>

            <View className="w-full h-full flex items-center bg-white px-4">
                <HorizontalScroll></HorizontalScroll>
                <Atalhos></Atalhos>
            </View>
        </View>
    )
}