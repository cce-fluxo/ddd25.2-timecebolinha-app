import { View, Image } from "react-native"

export default function SorrisoPiscando(){
    return(
        <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 70, height: 61 }} source={require('../../assets/images/SorrisoPiscando.png')} />
        </View>
    )
}