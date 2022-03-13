import { useContext, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../assets/themes';
import { ProfileBlack, Ye, Verified, Strokes, Drake, DSavage, ProfilePic } from '../assets/icons/';

const KanyeObj = {
    artistName: 'Kanye West',
    followers: '1.4M',
    img: <Ye width={100} height={100} />,
};
const StrokesObj = {
    artistName: 'The Strokes',
    followers: '6M',
    img: <Strokes width={100} height={100} />,
};
const DrakeObj = {
    artistName: 'Drake          ',
    followers: '9M',
    img: <Drake width={100} height={100} />,
};
const DSavageObj = {
    artistName: 'D. Savage   ',
    followers: '1M',
    img: <DSavage width={100} height={100} />,
};

import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';

export default function OtherProfileHeader({ userName }) {
    const [userDetails, setUserDetails] = useContext(UserDetailsContext);
    const [following, setFollowing] = useState(userDetails.following.map(function (user) { return user.user }).includes(userName));
    console.log(userDetails['following'].map(function (user) { return user.user }), "MAP THING")
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <ProfileBlack width={40} height={40} />
                </View>
                <View style={styles.headerRight}>
                    <View style={styles.headerRightArtistName}>
                        <Text style={styles.artistName}>{userName}'s Portfolio</Text>
                    </View>
                    <View style={styles.headerRightGroup}>
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                if (!userDetails.following.map(function (user) { return user.user }).includes(userName)) {
                                    setUserDetails({ ...userDetails, ...userDetails['following'].push({ user: userName }) });
                                    setFollowing(true);
                                } else {
                                    setUserDetails({
                                        ...userDetails,
                                        ...userDetails['following'].splice(
                                            userDetails['following'].map(function (user) { return user.user }).indexOf(userName),
                                            1
                                        ),
                                    });
                                    setFollowing(false);
                                }
                            }}>
                            <Text style={styles.buttonText}>{following ? 'Unfollow' : 'Follow'}</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        paddingRight: 35,
    },
    headerLeft: {
        marginTop: 4,
        width: '20%',
        marginLeft: '10%',
    },
    artistName: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 40,
        fontFamily: 'Dosis_700Bold',
        marginLeft: 5,
    },
    headerRight: {
        display: 'flex',
        alignContent: 'space-around',
        width: '80%',

        // width: '70%',
    },
    headerRightGroup: {
        flexDirection: 'row',

        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: Colors.black,
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
    },
    buttonText: {
        color: Colors.white,
        fontFamily: 'Dosis_700Bold',
        fontSize: 20,
    },
    followerIconGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    artistFollowers: {
        fontFamily: 'Dosis_700Bold',
        fontSize: 25,
        alignSelf: 'flex-end',
        marginBottom: 2,
        marginLeft: 5,
    },
    headerRightArtistName: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
