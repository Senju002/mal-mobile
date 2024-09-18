import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

type ImageItem = {
  uri: string;
  title: string;
};

interface AnimeListProps {
  data: ImageItem[];
  sectionTitle: string;
}

const AnimeList: React.FC<AnimeListProps> = ({ data, sectionTitle }) => {
  const renderItem = ({ item }: { item: ImageItem }) => (
    <View className="flex-1 m-2 items-center">
      <Image
        source={{ uri: item.uri }}
        className="w-full h-56 object-cover rounded-xl"
        accessibilityLabel={item.title}
      />
      <Text className="mt-2 text-sm text-primary text-center">
        {item.title}
      </Text>
    </View>
  );

  return (
    <View className="bg-white-100 py-2 px-5">
      <Text className=" text-lg font-bold mb-3 text-primary ">
        {sectionTitle}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingBottom: 16,
  },
});

export default AnimeList;
