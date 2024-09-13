import React, { PropsWithChildren, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = PropsWithChildren<{
    label: string
}>;

export default function SearchBar({ label }: Props) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.searchBarContainer}>
            <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
            <TextInput
                style={styles.searchBar}
                placeholder={label}
                value={searchQuery}
                onChangeText={setSearchQuery}
                underlineColorAndroid="transparent"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 16,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchBar: {
        flex: 1,
        fontSize: 16,
        borderWidth: 0,
    },
})

