import { Image, View } from 'react-native';

export default function HeaderLogin() {
  return (
    <View className="w-full bg-white">
      <View className="w-full h-16 bg-white">

      </View>
      <View className="w-full h-24 items-center justify-center bg-white">
        <Image source={require('../../assets/images/SorriSyncLogo.png')} />
      </View>
    </View>
  );
}