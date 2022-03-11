// Other ppl profile screen
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated, View, TouchableOpacity, Text, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native';
import { Colors } from '../assets/themes';
import { useContext } from 'react';
import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import uuid from 'react-native-uuid';
import {
    Bound2, Yeezus, LifeOfPablo, Donda, Views,
    CLB,
    Scorpion,
    IsThisIt,
    Angles,
    RoomOnFire,
    DPhoenix,
    TrustNoOne,
    BPL
} from '../assets/icons/';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import NFTs from '../assets/nfts/nfts';
import { PressableNFTImage, OtherProfileHeader } from '../components';

const CampaignDescriptions = {
    "YEEZUS": 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
    "DONDA": 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
    "THE L": 'Ye is donating 5% of proceeds to Blue Star Moms',
    "VIEWS": 'Drake is donating 1% of proceeds to CARE charity',
    "CLB": 'Drake is donating 8% of proceeds to the Wounded Warrior Project',
    "SCORPION": 'Drake is donating 10% of proceeds to "Save the Children"',
    "IS THIS IT": "The Strokes are donating 5% of proceeds to St. Jude Children's Research Hospital",
    "ANGLES": 'The Strokes are donating 7% of proceeds to Smile Train Charity',
    "ROOM": 'The Strokes are donating 15% of proceeds to the International Rescue Committee',
    "D PHOENIX": 'D. Savage is donating 10% of proceeds to Camp Kesem',
    "TRUST": 'D. Savage is donating 12% of proceeds to Stanford',
    "BPL": 'D. Savage is donating 15% of proceeds to Heifer International'
}

const Walk5NFTs = {
    "Kanye West": [{
        NFTName: "BOUND 2 #007",
        albumName: "YEEZUS",
        color: "#e75480",
        val: "7.4 ETH",
        width: 200,
        showInfo: false,
        desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
        artist: "Kanye West",
        sold: true,
    },
    {
        NFTName: "Jail #010",
        albumName: "DONDA",
        color: "white",
        val: "7.2 ETH",
        width: 200,
        showInfo: false,
        desc: 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
        artist: "Kanye West",
        sold: true
    },
    {
        NFTName: "Jail #007",
        albumName: "DONDA",
        color: "#e75480",
        val: "7.2 ETH",
        width: 200,
        showInfo: false,
        desc: 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
        artist: "Kanye West",
        sold: true
    }]
}

const Ali2NFTs = {
    "Kanye West":
        [
            {
                NFTName: "Famous #009",
                albumName: "THE L",
                color: "#a9a9a9",
                val: "7.1 ETH",
                width: 200,
                showInfo: false,
                desc: 'Ye is donating 5% of proceeds to Blue Star Moms',
                artist: "Kanye West",
                sold: true
            }
        ]
    ,
    "Drake": [
        {
            NFTName: "Elevate #007",
            albumName: "SCORPION",
            color: "#e75480",
            val: "7.1 ETH",
            width: 200,
            showInfo: false,
            desc: CampaignDescriptions["SCORPION"],
            artist: "Drake",
            sold: true
        }
    ],
    "The Strokes": [
        {
            NFTName: "Soma #011",
            albumName: "IS THIS IT",
            color: "brown",
            val: "3.2 ETH",
            width: 200,
            showInfo: false,
            desc: CampaignDescriptions["IS THIS IT"],
            artist: "The Strokes",
            sold: true
        }
    ],
}

const Milo7NFTs = {
    "D. Savage": [{
        NFTName: "Runtz #012",
        albumName: "BPL",
        color: "lime",
        val: "1.8 ETH",
        width: 200,
        showInfo: false,
        desc: CampaignDescriptions["BPL"],
        artist: "D. Savage",
        sold: true
    },
    {
        NFTName: "Wytd #007",
        albumName: "TRUST",
        color: "#e75480",
        val: "1.5 ETH",
        width: 200,
        showInfo: false,
        desc: CampaignDescriptions["TRUST"],
        artist: "D. Savage",
        sold: true
    },
    {
        NFTName: "Opera #010",
        albumName: "D PHOENIX",
        color: "white",
        val: "1.1 ETH",
        width: 200,
        showInfo: false,
        desc: CampaignDescriptions["D PHOENIX"],
        artist: "D. Savage",
        sold: true
    },]
}

const LocalNFTMapper = {
    "Milo7": Milo7NFTs,
    "Ali2": Ali2NFTs,
    "Walk5": Walk5NFTs
}

const Tab = createMaterialTopTabNavigator();

function customTabNav({ state, descriptors, navigation, position }) {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} horizontal={true} contentContainerStyle={{ flexDirection: 'row', display: 'flex', alignContent: 'center', alignItems: '', marginLeft: 10, marginRight: 10, height: 40, }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    // const inputRange = state.routes.map((_, i) => i);
                    // const opacity = position.interpolate({
                    //   inputRange,
                    //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
                    // });

                    return (

                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{}}>
                            <Animated.Text

                                style={{

                                    fontFamily: 'Dosis_700Bold',
                                    fontSize: 24,
                                    marginRight: 15,
                                    color: isFocused ? Colors.black : Colors.darkgray,
                                }}>
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View >
    );
}

export default function OtherProfileScreen({ route }) {
    let navigation = useNavigation();
    const [userDetails, setUserDetails] = useContext(UserDetailsContext);
    console.log(userDetails, "USERDETAILS")
    let userName = route.params.userName;

    // maybe put in state
    let purchasedNFTs = LocalNFTMapper[userName];

    function renderItem({ item }, props) {
        item.showInfo = true;
        return <PressableNFTImage key={uuid.v4()} NFTDetails={item} />
    }

    function ArtistsNFTs(props) {

        return (<FlatList contentContainerStyle={styles.NFTContainer} numColumns={2} keyExtractor={(item, index) => (item.NFTName + uuid.v4())} data={props.data} renderItem={(item, index) => renderItem(item, props)
        } />)
    }

    let artists = Object.keys(purchasedNFTs);
    let artistsAdded = artists.filter(function (artist) {
        return purchasedNFTs[artist].length > 0;
    })

    return (
        <>
            <OtherProfileHeader userName={userName} />

            <Text style={styles.text}>ARTIST</Text>


            <Tab.Navigator
                ScreenOptions={{
                    tabBarLabelStyle: { fontSize: 200, },

                }}
                tabBar={customTabNav}>

                {artistsAdded.length === 0 && <Tab.Screen name=" ">
                    {() => <View></View>}
                </Tab.Screen>}

                {artistsAdded.includes("The Strokes") && <Tab.Screen key="The Strokes" name="The Strokes">
                    {() => <ArtistsNFTs data={purchasedNFTs["The Strokes"]} />}
                </Tab.Screen>
                }

                {artistsAdded.includes("Kanye West") && <Tab.Screen key="Kanye West" name="Kanye West">
                    {() => <ArtistsNFTs data={purchasedNFTs["Kanye West"]} />}
                </Tab.Screen>
                }

                {artistsAdded.includes("Drake") && <Tab.Screen key="Drake" name="Drake">
                    {() => <ArtistsNFTs data={purchasedNFTs["Drake"]} />}
                </Tab.Screen>
                }

                {artistsAdded.includes("D. Savage") && <Tab.Screen key="D. Savage" name="D. Savage">
                    {() => <ArtistsNFTs data={purchasedNFTs["D. Savage"]} />}
                </Tab.Screen>
                }



            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Dosis_700Bold',
        fontSize: 18,
        marginLeft: 30

    },
    nft: {
        marginBottom: 10
    },
    NFTContainer: {
        display: 'flex',

        flex: 1,

    },
    portfolioHeader: {
        fontFamily: 'Dosis_700Bold',
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 5
    },

});
