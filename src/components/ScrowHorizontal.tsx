import { ScrollView, Text, View } from 'react-native';

export default function HorizontalScroll() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="px-4 gap-3"
    >
      <View className="w-48 h-28 bg-red-500 rounded-xl justify-center items-center">
        <Text>Card 1</Text>
      </View>
      <View className="w-48 h-28 bg-red-500 rounded-xl justify-center items-center">
        <Text>Card 2</Text>
      </View>
      <View className="w-48 h-28 bg-red-500 rounded-xl justify-center items-center">
        <Text>Card 3</Text>
      </View>
    </ScrollView>
  );
}