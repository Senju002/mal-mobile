import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import TopSection from "@/components/TopSection";
import SearchBar from "@/components/SearchBar";
import FilterButton from "@/components/FilterButton";
import ChatDiscussion from "@/components/ChatDiscussion";
import { SafeAreaView } from "react-native-safe-area-context";

const Discussion = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <TopSection />
        <View className="flex-1 bg-white-100 p-4 ">
          <SearchBar label="Search Discussion" />
          <FilterButton />
          <ChatDiscussion />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discussion;
