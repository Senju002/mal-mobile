import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

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
    <View style={styles.imageContainer}>
      <Image 
        source={{ uri: item.uri }} 
        style={styles.image} 
        accessibilityLabel={item.title} 
      />
      <Text style={styles.imageTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
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
  container: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#254287',
    marginLeft: 8,
  },
  list: {
    paddingBottom: 16,
  },
  imageContainer: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  imageTitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#254287',
    textAlign: 'center',
  },
});

export default AnimeList;
