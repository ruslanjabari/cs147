import { StyleSheet, Text, FlatList, View, Image, ScrollView, SafeAreaView, Pressable } from "react-native";
import StrokesSVG from '../assets/icons/Strokes.svg'
import YeSVG from '../assets/icons/Ye.svg'
import DrakeSVG from '../assets/icons/Drake.svg'
import DSavageSVG from '../assets/icons/DSavage.svg'
import { SvgUri } from 'react-native-svg';
import ForwardIcon from '../assets/icons/ForwardIcon';
import React, { useState } from 'react';
import { Colors } from '../assets/themes';
import SearchIcon from '../assets/icons/SearchIcon.svg'
import { useNavigation } from '@react-navigation/native';

export default function ArtistsFeed() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBar}>
                <View style={styles.searchBarContent}>
                    <SearchIcon />
                    <Text style={styles.searchText}>Search</Text>
                </View>


            </View>

            <View style={styles.listContainer}>
                <Pressable onPress={() => navigation.navigate("EXPLORE", { screen: "ArtistNFTScreen", params: { artist: "The Strokes" } })} style={styles.artistInfo}>
                    <View style={styles.artistInfoGroup}>
                        <StrokesSVG style={styles.artistInfo} />
                        <Text style={styles.artistName}>The Strokes</Text>
                    </View>
                    <ForwardIcon />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("EXPLORE", { screen: "ArtistNFTScreen", params: { artist: "Kanye West" } })} style={styles.artistInfo}>
                    <View style={styles.artistInfoGroup}>
                        <YeSVG />
                        <Text style={styles.artistName}>Kanye West</Text>
                    </View>
                    <ForwardIcon />
                </Pressable>
                <Pressable style={styles.artistInfo} onPress={() => navigation.navigate("EXPLORE", { screen: "ArtistNFTScreen", params: { artist: "Drake" } })}>
                    <View style={styles.artistInfoGroup}>
                        <DrakeSVG />
                        <Text style={styles.artistName}>Drake</Text>
                    </View>
                    <ForwardIcon />
                </Pressable>
                <Pressable style={styles.artistInfo} onPress={() => navigation.navigate("EXPLORE", { screen: "ArtistNFTScreen", params: { artist: "D. Savage" } })}>
                    <View style={styles.artistInfoGroup}>
                        <DSavageSVG />
                        <Text style={styles.artistName}>D. Savage</Text>
                    </View>
                    <ForwardIcon />
                </Pressable>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        width: '100%',
        backgroundColor: 'white'
    },
    artistInfo: {
        backgroundColor: Colors.gray,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '85%',
        height: '10%',
        borderRadius: 52,
        marginBottom: 10,
        height: '60%'

    },
    artistList: {

    },
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
        alignItems: 'center',
        flex: 10,
        marginTop: 30,
        paddingTop: 20,
        paddingBottom: 30
    },
    artistName: {
        fontFamily: 'Dosis_700Bold',
        fontSize: 30,
        marginLeft: 15
    },
    artistInfoGroup: {
        display: 'flex',
        width: '65%',
        flexDirection: 'row',
    },
    searchBar: {
        width: '95%',
        marginTop: 5,
        backgroundColor: Colors.gray,
        height: '5%',
        flex: 1,
        borderRadius: 45,
        display: 'flex',
        justifyContent: 'center'
    },
    searchBarContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },
    searchText: {
        fontFamily: 'Dosis_400Regular',
        color: "#A2A2A2",
        marginLeft: 20,
        fontSize: 21,
    }
});