import { Image, View } from 'react-native';

export default function HeaderLogin() {
  return (
    <View className="w-full h-16 items-center justify-center bg-white">
      <Image source={require('../../assets/images/SorriSyncLogo.png')} />
    </View>
  );
}