import { Pressable, View, SafeAreaView, StyleSheet, Text } from 'react-native';
import Bound2 from '../assets/icons/Bound2.svg';
import ShoppingCartIcon from '../assets/icons/ShoppingCartIcon.svg';
import PiechartIcon from '../assets/icons/Piechart.svg';

import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import { Colors } from '../assets/themes';
import { PressableNFTImage } from '../components';
import { NFTsContext } from '../assets/contextProviders/NFTsProvider';
import React, { useState, useContext } from 'react';
import { HomeFeedContext } from '../assets/contextProviders/HomeFeedProvider';
import { useNavigation } from '@react-navigation/native';

const mapper = require('../components/mapper');

export default function FinalJoinCommunityScreen({ route }) {
  const [userDetails, setUserDetails] = useContext(UserDetailsContext);

  const navigation = useNavigation();

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
    map.map((campaig) => {
      // console.log(campaig);
      const c = campaig[Object.keys(campaig)[0]];
      if (c.albumName === albumName) {
        campaignObj = c;
        // console.log(
        //   'match found',
        //   tmp.map((iter) => iter.albumName).indexOf(campaignObj.albumName),
        //   tmp
        // );
      }
    });
    tmp.map((iter) => {
      console.log('iter', iter);
      if (iter[Object.keys(iter)[0]].albumName === campaignObj.albumName) {
        tmp.splice(tmp.indexOf(iter), 1);
      }
    });
    // tmp.splice(tmp.map((iter) => iter.albumName).indexOf(campaignObj.albumName), 1);
    // tmp.splice(tmp.map((iter) => iter.albumName).indexOf(campaignObj.albumName), 1);
    let commus = userDetails['joinedCommunities'];
    commus.push(campaignObj);
    setUserDetails({
      ...userDetails,
      potentialCommunities: tmp,
      joinedCommunities: commus,
    });
    // console.log('\n\ntmp', tmp, '\n\n', campaignObj);
    // alert('done');
    // navigation.navigate('CommunitiesScreen', { screen: 'COMMUNITIES', params: {} });
    navigation.navigate('CommunitiesScreen');
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
            handler={setTimeout(() => handleJoin(), 4000)}
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
