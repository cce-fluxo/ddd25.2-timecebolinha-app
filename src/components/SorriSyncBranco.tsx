import { View, Image } from "react-native";

export default function SorriSyncBranco(){
    return(
        <View style={{flex:1 , backgroundColor: "white" , justifyContent: "center" , alignItems: "center"}}>
            <Image style={{width: 194 , height:50 , resizeMode: 'contain'}} source={require("../../assets/images/SorriSyncBranco.png")}></Image>
        </View>
    )
}