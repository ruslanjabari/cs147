import { Pressable, View, SafeAreaView, StyleSheet, Text, Alert, Dimensions } from 'react-native';
import Bound2 from '../assets/icons/Bound2.svg';
import ShoppingCartIcon from '../assets/icons/ShoppingCartIcon.svg';
import PiechartIcon from '../assets/icons/Piechart.svg';
import { Colors } from '../assets/themes';
import { PressableNFTImage } from '../components';
import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import { NFTsContext } from '../assets/contextProviders/NFTsProvider';
import React, { munitiesuseState, useContext } from 'react';
import { HomeFeedContext } from '../assets/contextProviders/HomeFeedProvider';
import { Dondalicious } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import {
    LineChart,
} from "react-native-chart-kit";

const mapper = require('../components/mapper');

export default function Analytics({ route }) {
    const navigation = useNavigation();
    const [userDetails, setUserDetails] = useContext(UserDetailsContext);
    let NFTDetails = route.params;
    let { NFTName, albumName, color, desc, showInfo, val, width, artist, sold } = route.params;
    const [homeFeed, setHomeFeed] = useContext(HomeFeedContext);
    console.log(val, "VALIUM")
    val = parseFloat(val)
    console.log(val, "truevala")
    let artistName = () => artist;
    return (
        <View style={styles.container}>
            <Text style={styles.NFTName}>{NFTName}</Text>
            <LineChart
                getDotColor={() => 'green'}
                fromZero={true}

                data={{
                    labels: ["Mon", "Tue", "Wed", "Th", "Fr", "Sa", "Su"],
                    datasets: [
                        {
                            data: [
                                Math.round(Math.random() * 10) / 10,
                                Math.round(Math.random() * 10) / 10,
                                Math.round(Math.random() * 10) / 10,
                                Math.round(Math.random() * 10) / 10,
                                Math.round(Math.random() * 10) / 10,
                                Math.round(Math.random() * 10) / 10,
                                Math.round(val * 10) / 10,
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width - 50} // from react-native
                height={220}

                yAxisSuffix="ETH"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "white",
                    backgroundGradientFrom: "white",
                    backgroundGradientTo: "white",
                    color: (opacity = 1) => `green`,
                    labelColor: (opacity = 1) => `green`,
                    decimalPlaces: 1, // optional, defaults to 2dp


                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "green"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    overflow: 'visible'
                }}
            />


            <Pressable

                onPress={(artist) => {
                    Alert.alert('Confirm Purchase', 'Are you sure you want to purchase this NFT?', [
                        {
                            text: 'Cancel',
                            onPress: () => { },
                            style: 'cancel',
                        },
                        {
                            text: 'Confirm',
                            onPress: () => {
                                navigation.navigate('EXPLORE', {
                                    screen: 'PurchaseScreen',
                                    params: route.params,
                                });
                                // hard coded
                                setHomeFeed([
                                    {
                                        user: 'NPCUser42',
                                        action: 'purchased',
                                        item: NFTName,
                                        likes: 1,
                                        liked: false, // hacky, you like your own
                                        artist: artistName(),
                                        time: 'Just now',
                                        NFTDetails: {
                                            NFTName: NFTName,
                                            albumName: albumName,
                                            color: color,
                                            val: val,
                                            width: width,
                                            showInfo: showInfo,
                                            desc: desc,
                                            artist: artist,
                                            sold: sold,
                                        },
                                    },
                                    ...homeFeed,
                                ]);

                                let oldArtistNFTs = userDetails['purchasedNFTs'][[artistName()]];
                                let newArtistNFTs = [...oldArtistNFTs, route.params];

                                setUserDetails({
                                    ...userDetails,
                                    potentialCommunities: [
                                        mapper().find((artist) => Object.keys(artist)[0] === artistName()),
                                        ...userDetails['potentialCommunities'],
                                    ],
                                    purchasedNFTs: {
                                        ...userDetails['purchasedNFTs'],
                                        [artistName()]: newArtistNFTs,
                                    },
                                });
                            },
                        },
                    ]);
                }}
                style={styles.button}>
                <ShoppingCartIcon />
                <Text style={styles.footerText}>PURCHASE</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    NFTName: {
        fontSize: 20,
        fontFamily: 'Dosis_800ExtraBold',
        alignSelf: 'center',
        marginTop: 30
    },
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    footerText: {
        fontSize: 28,
        color: Colors.white,
        fontFamily: 'Dosis_400Regular',
        marginLeft: 5,
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        backgroundColor: Colors.black,
        margin: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '65%',
        height: 70,
        flexDirection: 'row',
    },
    NFTName: {
        fontSize: 44,
        fontFamily: 'Dosis_700Bold',
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});