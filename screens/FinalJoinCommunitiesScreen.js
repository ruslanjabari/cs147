import { Pressable, View, SafeAreaView, StyleSheet, Text, Alert } from 'react-native';
import Bound2 from '../assets/icons/Bound2.svg';
import ShoppingCartIcon from '../assets/icons/ShoppingCartIcon.svg';
import PiechartIcon from '../assets/icons/Piechart.svg';

import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import { Colors } from '../assets/themes';
import { PressableNFTImage } from '../components';
import { NFTsContext } from '../assets/contextProviders/NFTsProvider';
import React, { useState, useContext } from 'react';
import { HomeFeedContext } from '../assets/contextProviders/HomeFeedProvider';
import { useEffect } from 'react/cjs/react.production.min';

const mapper = require('../components/mapper');

export default function FinalJoinCommunityScreen({ navigation, route }) {
  const [userDetails, setUserDetails] = useContext(UserDetailsContext);

  //   let communityObj = {
  //     NFTName: 'DSavCenter',
  //     albumName: 'DSavCenter',
  //     color: '',
  //     desc: 'Exclusive community available to fans who own NFTs from DSavCenter NFT Campaigns.',
  //     showInfo: false,
  //     val: 0,
  //     width: 250,
  //     artist: 'D. Savage',
  //     sold: false,
  //   };

  let communityObj = route.params;
  // console.log('da rooot params are ', route.params);

  // this will be actual props, only NFTName, albumName rlly relevant.
  // let { NFTName, albumName, color, desc, showInfo, val, width, artist, sold } = route.params;
  let { NFTName, albumName, color, desc, showInfo, val, width, artist, sold } = communityObj;
  const handleJoin = () => {
    let tmp = [...userDetails['potentialCommunities']];
    let campaignObj;
    const map = mapper();
    map.forEach((campaig) => {
      // console.log(campaig);
      const c = campaig[Object.keys(campaig)[0]];
      if (c.albumName === albumName) {
        campaignObj = c;
      }
    });
    tmp.splice(tmp.indexOf(campaignObj), 1);
    setUserDetails({
      ...userDetails,
      potentialCommunities: tmp,
      joinedCommunities: [...userDetails['joinedCommunities'], campaignObj],
    });
    console.log('\n\ntmp', tmp, '\n\n', campaignObj);
    alert('done');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>COMMUNITY JOINED!</Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}>
          <PressableNFTImage
            NFTDetails={communityObj}
            isCampaign={true}
            handler={handleJoin}
            noNav
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Activity, exclusive content, and events from {NFTName} will now appear on your feed.
          </Text>
        </View>
      </View>

      <View style={styles.footer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  headerTitle: {
    fontSize: 36,
    fontFamily: 'Dosis_700Bold',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  description: {
    width: '100%',
    alignItems: 'center',
    paddingRight: 40,
    paddingLeft: 40,
  },
  descriptionText: {
    fontSize: 24,
    fontFamily: 'Dosis_400Regular',
    marginTop: 5,
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
    height: '30%',
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 28,
    color: Colors.white,
    fontFamily: 'Dosis_400Regular',
    marginLeft: 5,
  },
  NFTName: {
    fontSize: 44,
    fontFamily: 'Dosis_700Bold',
  },
});
