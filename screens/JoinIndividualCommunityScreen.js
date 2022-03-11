import { Pressable, View, SafeAreaView, StyleSheet, Text, Alert } from 'react-native';
import Bound2 from '../assets/icons/Bound2.svg';
import ShoppingCartIcon from '../assets/icons/ShoppingCartIcon.svg';
import PiechartIcon from '../assets/icons/Piechart.svg';
import { useNavigation } from '@react-navigation/native';

import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import { Colors } from '../assets/themes';
import { PressableNFTImage } from '../components';
import { NFTsContext } from '../assets/contextProviders/NFTsProvider';
import React, { useState, useContext } from 'react';
import { HomeFeedContext } from '../assets/contextProviders/HomeFeedProvider';

export default function JoinIndividualCommunityScreen({ route }) {
  const [userDetails, setUserDetails] = useContext(UserDetailsContext);
  let navigation = useNavigation();

  let communityObj = {
    NFTName: 'DSavCenter',
    albumName: 'DSavCenter',
    color: '',
    desc: 'Exclusive community available to fans who own NFTs from DSavCenter NFT Campaigns.',
    showInfo: false,
    val: 0,
    width: 250,
    artist: 'D. Savage',
    sold: false,
  };

  console.log('da route params are ', route.params);

  // this will be actual props, only NFTName, albumName rlly relevant.
  // let { NFTName, albumName, color, desc, showInfo, val, width, artist, sold } = route.params;
  let { NFTName, albumName, color, desc, showInfo, val, width, artist, sold } = communityObj;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <PressableNFTImage NFTDetails={communityObj} isCampaign={true} />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{desc}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable
          onPress={(artist) => {
            Alert.alert('Confirm Join', 'Are you sure you want to join this community?', [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: 'Confirm',
                onPress: () => {
                  navigation.navigate('COMMUNITIES', {
                    screen: 'FinalJoinCommunitiesScreen',
                    params: route.params,
                  });

                  setUserDetails({
                    ...userDetails,
                    joinedCommunities: [...userDetails['joinedCommunities'], NFTName],
                  });

                  // hard coded
                  // setHomeFeed([
                  //     {
                  //         user: 'NPCUser42',
                  //         action: 'purchased',
                  //         item: NFTName,
                  //         likes: 1,
                  //         liked: false, // hacky, you like your own
                  //         // artist: artist,
                  //         time: 'Just now',
                  //         "NFTDetails": {
                  //             NFTName: NFTName,
                  //             albumName: albumName,
                  //             color: color,
                  //             val: val,
                  //             width: width,
                  //             showInfo: showInfo,
                  //             desc: desc,
                  //             artist: artist,
                  //             // sold: sold,
                  //         },
                  //     },
                  //     ...homeFeed,
                  // ]);

                  // setUserDetails({
                  //     ...userDetails,
                  //     purchasedNFTs: {
                  //         ...userDetails['purchasedNFTs'],
                  //         [artistName()]: newArtistNFTs,
                  //     },
                  // });
                },
              },
            ]);
          }}
          style={styles.button}>
          <Text style={styles.footerText}>JOIN COMMUNITY</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  headerTitle: {
    fontSize: 48,
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
