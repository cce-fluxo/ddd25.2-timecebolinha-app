import { View, Image } from "react-native";

export default function Sorri(){
    return(
        <View style={{flex:1 , backgroundColor: "blue" , justifyContent: "center", alignItems: "center"}}>
            <Image style={{width:294 , height:76 , resizeMode: 'contain'}} source={require("../../assets/images/Sorri.png")}></Image>
        </View>
    )
}