import { View, Image } from "react-native";

export default function SorriSyncBranco(){
    return(
        <View style={{flex:1 , backgroundColor: "white" , justifyContent: "center" , alignItems: "center"}}>
            <Image style={{width: 294 , height:76 , resizeMode: 'contain'}} source={require("../../assets/images/SorriSyncBranco.png")}></Image>
        </View>
    )
}