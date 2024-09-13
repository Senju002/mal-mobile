import { Image, StyleSheet, Platform, Text, SafeAreaView, ScrollView, View } from "react-native";
import SearchBar from "@/components/SearchBar";
import TopSection from "@/components/TopSection";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <TopSection />
        <View style={styles.container}>
          <SearchBar label="Search" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  }
});
