import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
    Bound2, Yeezus, LifeOfPablo, Donda, Views,
    CLB,
    Scorpion,
    IsThisIt,
    Angles,
    Room,
    DPhoenix,
    TrustNoOne,
    BPL,
    TeamYe,
    ClubStrokes,
    DrakeZone,
    DSavCenter
} from '../assets/icons/';
/*
NFTDetails Object with Following Form:
{
    str NFTName (name of NFT, i.e. Bound 2 #001)
    str albumName (all caps name of album NFT is from, i.e. DONDA)
    str color (fill color of NFT)
    str val (i.e. 7.8 ETH)
    int width (width of NFT)
    bool showInfo (true if want to show white text overlay, false otherwise)
    str desc (description of the campaign NFT belongs to)
}
*/

export default function PressableNFTImage({ NFTDetails, isCampaign }) {
    let { NFTName, albumName, color, val, width, showInfo, desc, artist } = NFTDetails;

    const NFTProps = {
        width: width,
        fill: color,
        fillOpacity: 0.4,
        style: { marginBottom: 10 }
    }

    const campaignProps = {
        width: width,
        style: { marginBottom: 10 }
    }

    const NFTMapper = {
        "YEEZUS": <Yeezus {...NFTProps} />,
        "DONDA": <Donda {...NFTProps} />,
        "THE L": <LifeOfPablo {...NFTProps} />,
        "VIEWS": <Views {...NFTProps} />,
        "CLB": <CLB {...NFTProps} />,
        "SCORPION": <Scorpion {...NFTProps} />,
        "IS THIS IT": <IsThisIt {...NFTProps} />,
        "ANGLES": <Angles {...NFTProps} />,
        "ROOM": <Room {...NFTProps} />,
        "D PHOENIX": <DPhoenix {...NFTProps} />,
        "TRUST": <TrustNoOne {...NFTProps} />,
        "BPL": <BPL {...NFTProps} />,
        "TeamYe": <TeamYe {...campaignProps} />,
        "ClubStrokes": <ClubStrokes {...campaignProps} />,
        "DrakeZone": <DrakeZone {...campaignProps} />,
        "DSavCenter": <DSavCenter {...campaignProps} />
    }

    let navigation = useNavigation();
    let destScreen;
    let parentNav;

    if (isCampaign) {
        parentNav = "COMMUNITIES"
        destScreen = "IndividualCommunityScreen"
        showInfo = true;
    } else {
        parentNav = "EXPLORE";
        destScreen = "NFTDetails";
    }

    return (
        <Pressable
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
            onPress={() => navigation.navigate(parentNav, { screen: destScreen, params: NFTDetails })}>

            {NFTMapper[albumName]}
            {isCampaign && <Text style={{ position: 'absolute', left: 0, right: 0, color: 'white', fontFamily: 'Dosis_700Bold', fontSize: 26, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                {albumName}
            </Text>
            }
            {
                (!isCampaign && showInfo) &&
                <Text style={{ position: 'absolute', top: 10, left: 40, color: 'white', fontFamily: 'Dosis_700Bold', fontSize: 16 }}>
                    {NFTName}
                </Text>
            }
            {
                (!isCampaign && showInfo) &&
                <Text style={{ position: 'absolute', bottom: 15, right: 40, color: 'white', fontFamily: 'Dosis_700Bold', fontSize: 16 }}>
                    {val}
                </Text>
            }
        </Pressable >
    )
}

const styles = StyleSheet.create({
    nft: {
        marginBottom: 10
    }
});
