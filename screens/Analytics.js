import { Pressable, View, SafeAreaView, StyleSheet, Text, Alert } from 'react-native';
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

export default function Analytics({ route }) {
    let NFTDetails = route.params;
    let { NFTName } = NFTDetails;

    return (
        <View>
            <Text>hi</Text>
        </View>
    )
}
