import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function FilterButton({ }) {
    const [selectedFilter, setSelectedFilter] = useState<string>('Newest');

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
        // You can implement filter logic based on "Newest", "Latest", etc.
    };

    return (
        <View style={styles.buttonGroupContainer}>
            {[
                { label: 'Newest', icon: 'clock' },
                { label: 'Latest', icon: 'history' },
                { label: 'Popular', icon: 'fire' },
            ].map(({ label, icon }) => (
                <TouchableOpacity
                    key={label}
                    style={[
                        styles.buttonGroupItem,
                        selectedFilter === label && styles.selectedButtonGroupItem,
                    ]}
                    onPress={() => handleFilterChange(label)}
                >
                    <FontAwesome5
                        name={icon}
                        size={16}
                        color={selectedFilter === label ? '#fff' : '#333'}
                    />
                    <Text
                        style={[
                            styles.buttonGroupText,
                            selectedFilter === label && styles.selectedButtonGroupText,
                        ]}
                    >
                        {label}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    buttonGroupItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
    },
    selectedButtonGroupItem: {
        backgroundColor: '#254287',
    },
    buttonGroupText: {
        marginLeft: 8,
        color: '#333',
        fontSize: 14,
    },
    selectedButtonGroupText: {
        color: '#fff',
    },
})