import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const TopSection: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Left: Hamburger Button */}
            <TouchableOpacity style={styles.iconButton} >
                <MaterialIcons name="menu" size={28} color="#fff" />
            </TouchableOpacity>

            {/* Center: "MAL" Text */}
            <Text style={styles.title}>MAL</Text>

            {/* Right: Profile Photo and Notification Icon */}
            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Notifications')}>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Profile')}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Replace with actual profile photo URL
                        style={styles.profilePhoto}
                    />
                </TouchableOpacity>
                <Ionicons name="notifications-outline" size={24} color="#fff" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#2E51A2',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    iconButton: {
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePhoto: {
        width: 32,
        height: 32,
        borderRadius: 16, // Makes the image circular
    },
});

export default TopSection;
