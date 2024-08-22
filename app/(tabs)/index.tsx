import { Image, StyleSheet, View, Platform, Text } from "react-native";
import TopSection from "@/components/TopSection";

export default function HomeScreen() {
  return (
    <View>
      <TopSection /> 
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
