import React from 'react';
import { View, Text, Image, StyleSheet, FlatList} from 'react-native';

const discussions = [
    {
        id: '1',
        userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
        username: 'John Doe',
        timePosted: '2 hours ago',
        comment: 'I love this anime! The character development is fantastic.',
    },
    {
        id: '2',
        userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
        username: 'Jane Smith',
        timePosted: '3 hours ago',
        comment: 'I didn’t like the ending. It felt rushed.',
    },
    {
        id: '3',
        userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
        username: 'Mike Ross',
        timePosted: '5 hours ago',
        comment: 'The soundtrack is amazing! Really adds depth to the scenes.',
    },
];

export default function ChatDiscussion({ }) {
    const renderDiscussionCard = ({ item }: { item: typeof discussions[0] }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.userImage }} style={styles.userImage} />
            <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.timePosted}>{item.timePosted}</Text>
                </View>
                <Text style={styles.comment}>{item.comment}</Text>
            </View>
        </View>
    );
    return (
        <FlatList
            data={discussions}
            renderItem={renderDiscussionCard}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    cardContent: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    timePosted: {
        fontSize: 12,
        color: '#888',
    },
    comment: {
        marginTop: 4,
        fontSize: 14,
        color: '#333',
    }
})