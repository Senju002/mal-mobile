import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import TopSection from '@/components/TopSection';
import SearchBar from '@/components/SearchBar';
import FilterButton from '@/components/FilterButton';
import ChatDiscussion from '@/components/ChatDiscussion';

const Discussion = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <TopSection />
        <View style={styles.container}>
          <SearchBar label="Search Discussion" />
          <FilterButton />
          <ChatDiscussion />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  }
});

export default Discussion;
