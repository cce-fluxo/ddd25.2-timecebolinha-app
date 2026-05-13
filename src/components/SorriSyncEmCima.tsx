import { View, Image } from "react-native";

export default function SorriSyncEmCima(){
    return(
        <View style={{flex:1 , backgroundColor: "white" , justifyContent: "flex-start" , alignItems: "center" , paddingTop: 50}}>
            <Image style={{width: 194 , height:50 , resizeMode: 'contain'}} source={require("../../assets/images/SorriSyncEmCima.png")}></Image>
        </View>
    )
}