import { View, Image } from "react-native"

export default function SorrisoNoCanto(){
    return(
        <View style={{ flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 70, height: 61 , transform: [{translateX:-20}] }} source={require('../../assets/images/SorrisoCentralizado.png')} />
        </View>
    )
}