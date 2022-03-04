import { StyleSheet, Text, FlatList, View, Image, ScrollView, SafeAreaView } from "react-native";
import StrokesSVG from '../assets/icons/Strokes.svg'
import YeSVG from '../assets/icons/Ye.svg'
import DrakeSVG from '../assets/icons/Drake.svg'
import DSavageSVG from '../assets/icons/DSavage.svg'
import { SvgUri } from 'react-native-svg';
import ForwardIcon from '../assets/icons/ForwardIcon';
import React, { useState } from 'react';
import { Colors } from '../assets/themes';

export default function ArtistsFeed() {
    const [tracks, setTracks] = useState([
        {
            id: "strokes",
            artistName: "The Strokes",
            imgUri: <StrokesSVG />
        },
        {
            id: "yewest",
            artistName: "Kanye West",
            imgUri: <YeSVG />
        },
        {
            id: "drake",
            artistName: "Drake",
            imgUri: <DrakeSVG />
        },
        {
            id: "DSav",
            artistName: "D.Savage",
            imgUri: <DSavageSVG />
        },
    ]);


    const renderItem = ({ item, index }) => (
        <View style={styles.artistInfo}>
            {item.imgUri}
            <Text>{item.artistName}</Text>
            <ForwardIcon />
        </View>

    );

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={tracks}
                renderItem={(item, index) => renderItem(item, index)}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        width: '100%'
    },
    artistInfo: {
        backgroundColor: Colors.gray,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});