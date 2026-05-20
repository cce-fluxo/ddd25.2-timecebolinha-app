import { Redirect } from "expo-router";
import { View } from "react-native";

let splashShown = false;

export default function Index(){
  if(!splashShown){
    splashShown= true
    return(
      <View>
        <Redirect href={"/splash"}></Redirect>
      </View>
    )
  }
  return(
    <View>
      <Redirect href={"/login"}></Redirect>
    </View>
  )
}

// na primeira vez que eu abrir o app, ele vai pra splash, nas próximas, ele vai pro login