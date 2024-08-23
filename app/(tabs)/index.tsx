import { Image, StyleSheet, View, Platform, Text } from "react-native";
import TopSection from "@/components/TopSection";
import AnimeList from "@/components/AnimeList";
import ImageSlider from "@/components/ImageSlider";

// Dummy for Upcoming Anime
const imageUrls = [
  { uri: 'https://i.pinimg.com/564x/43/06/0e/43060e0cc258c6584f8c090ea91d3b3c.jpg', title: 'Your Name' },
  { uri: 'https://i.pinimg.com/474x/be/0d/ae/be0dae51e6c5ad269c8fc3d8a79d91a2.jpg', title: 'Haikyuu!! The Dumpster Battle' },
  { uri: 'https://i.pinimg.com/564x/c2/0c/f7/c20cf7dea496252dcd12e3c7dd2c993f.jpg', title: 'Suzume' },
  { uri: 'https://i.pinimg.com/564x/b4/9f/b4/b49fb40533f3a0600eef0a50a7031ac4.jpg', title: 'A Silent Voice' },
];

// Dummy for weekly trendings
const sampleData = [
  { uri: 'https://i.pinimg.com/564x/43/06/0e/43060e0cc258c6584f8c090ea91d3b3c.jpg', title: 'Your Name' },
  { uri: 'https://i.pinimg.com/474x/be/0d/ae/be0dae51e6c5ad269c8fc3d8a79d91a2.jpg', title: 'Image 2Haikyuu!! The Dumpster Battle' },
  { uri: 'https://i.pinimg.com/564x/c2/0c/f7/c20cf7dea496252dcd12e3c7dd2c993f.jpg', title: 'Suzume' },
  { uri: 'https://i.pinimg.com/564x/b4/9f/b4/b49fb40533f3a0600eef0a50a7031ac4.jpg', title: 'A Silent Voice' },
];

export default function HomeScreen() {
  return (
    <View>
      {/* Top Navigation, consist of hamburger button, head title, profille and notification */}
      <TopSection />
      {/* Upcoming Anime */}
      <ImageSlider data={imageUrls} sectionTitle="Upcoming Anime" />
      {/* Weekly Trending Anime*/}
      <AnimeList data={sampleData} sectionTitle="Trending This Week" />
    </View>
  );
}

const styles = StyleSheet.create({

});
