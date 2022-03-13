import { FlatList, SafeAreaView, StyleSheet, Pressable, Text, View } from 'react-native';
import { useContext, useState } from 'react';
import { Post } from '../components';
import { useNavigation } from '@react-navigation/native';
import { HomeFeedContext } from '../assets/contextProviders/HomeFeedProvider';
import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import { ProfileBlack } from '../assets/icons';


export default function MessageList() {
    const [userDetails, setUserDetails] = useContext(UserDetailsContext);
    const [usersFollowing, setUsersFollowing] = useState(userDetails["following"])

    let navigation = useNavigation();



    function MessageComponent({ item }) {
        let recentMessage;
        if (userDetails["messagesSent"][item.user].length <= 0) {
            let user = item.user;
            if (user === "Drake" || user === "Kanye West" || user === "The Strokes" || user === "D. Savage") {
                recentMessage = "Thanks for following! Buy a NFT and join a community :)"
            } else {
                recentMessage = 'Thanks for following me!'
            }
        } else {
            recentMessage = userDetails["messagesSent"][item.user].slice(-1)[0].text;
        }

        return (
            <Pressable style={styles.messageContainer} onPress={() => navigation.navigate('HOME', { screen: 'MessagingScreen', params: { user: item.user } })}>
                <View style={styles.profileInfo}>
                    <ProfileBlack style={styles.profileIcon} />
                    <Text style={styles.userNameText}>{item.user}</Text>
                </View>
                <Text style={styles.recentMessage}>{recentMessage}</Text>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.messagesHeader}>Messages</Text>
            {usersFollowing.length >= 1 ?
                <FlatList
                    data={usersFollowing}
                    renderItem={({ item }) => <MessageComponent item={item} />}
                    keyExtractor={(_, index) => index}
                /> :
                <View style={styles.viewStyle}>
                    <Text style={styles.alertStyle}>Follow people to message them!</Text>
                </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    alertStyle: {
        fontFamily: 'Dosis_400Regular',
        fontSize: 20
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'row',

    },
    recentMessage: {
        fontFamily: 'Dosis_600SemiBold'
    },
    messageContainer: {
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 5
    },
    shadowy: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    profileIcon: {
        marginRight: 10,
        marginTop: 2
    },
    userNameText: {
        marginBottom: 5,
        fontSize: 19,
        fontFamily: 'Dosis_300Light'
    },
    messagesHeader: {
        marginLeft: 20,
        fontFamily: 'Dosis_800ExtraBold',
        fontSize: 18,
        marginTop: 20
    }
});
