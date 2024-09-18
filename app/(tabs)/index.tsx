import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View } from "react-native";
import TopSection from "@/components/TopSection";
import AnimeList from "@/components/AnimeList";
import ImageSlider from "@/components/ImageSlider";

// Dummy data for Upcoming Anime
const imageUrls = [
  {
    uri: "https://i.pinimg.com/564x/43/06/0e/43060e0cc258c6584f8c090ea91d3b3c.jpg",
    title: "Your Name",
  },
  {
    uri: "https://i.pinimg.com/474x/be/0d/ae/be0dae51e6c5ad269c8fc3d8a79d91a2.jpg",
    title: "Haikyuu!! The Dumpster Battle",
  },
  {
    uri: "https://i.pinimg.com/564x/c2/0c/f7/c20cf7dea496252dcd12e3c7dd2c993f.jpg",
    title: "Suzume",
  },
  {
    uri: "https://i.pinimg.com/564x/b4/9f/b4/b49fb40533f3a0600eef0a50a7031ac4.jpg",
    title: "A Silent Voice",
  },
];

// Dummy data for Weekly Trending Anime
const sampleData = [
  {
    uri: "https://i.pinimg.com/564x/43/06/0e/43060e0cc258c6584f8c090ea91d3b3c.jpg",
    title: "Your Name",
  },
  {
    uri: "https://i.pinimg.com/474x/be/0d/ae/be0dae51e6c5ad269c8fc3d8a79d91a2.jpg",
    title: "Haikyuu!! The Dumpster Battle",
  },
  {
    uri: "https://i.pinimg.com/564x/c2/0c/f7/c20cf7dea496252dcd12e3c7dd2c993f.jpg",
    title: "Suzume",
  },
  {
    uri: "https://i.pinimg.com/564x/b4/9f/b4/b49fb40533f3a0600eef0a50a7031ac4.jpg",
    title: "A Silent Voice",
  },
];

// Sections for the FlatList
const sections = [
  { type: "top" }, // Top Navigation
  { type: "slider", data: imageUrls }, // Upcoming Anime
  { type: "list", data: sampleData, title: "Trending This Week" }, // Weekly Trending Anime
];

export default function HomeScreen() {
  const renderItem = ({ item }: any) => {
    switch (item.type) {
      case "top":
        return <TopSection />;
      case "slider":
        return <ImageSlider data={item.data} sectionTitle="Upcoming Anime" />;
      case "list":
        return <AnimeList data={item.data} sectionTitle={item.title} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={sections}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
