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

const mapper = require('../components/mapper');
// const Communities = [
//   {
//     'Kanye West': {
//       albumName: 'TeamYe',
//       NFTName: 'TeamYe',
//       mem: '21,045',
//       desc: "Exclusive community available to fans who own NFTs from Yeat's“Up 2 Me” Campaign",
//     },
//   },
//   { Drake: { albumName: 'ClubStrokes', NFTName: 'ClubStrokes', mem: '5,671' } },
//   { 'The Strokes': { albumName: 'DrakeZone', NFTName: 'DrakeZone', mem: '32,135' } },
//   { 'D. Savage': { albumName: 'DSavCente', NFTName: 'DSavCente', mem: '934' } },
// ];

export default function NFTDetails({ navigation, route }) {
  const [userDetails, setUserDetails] = useContext(UserDetailsContext);
  // const [NFTs, setNFTs] = useContext(NFTsContext);
  const [homeFeed, setHomeFeed] = useContext(HomeFeedContext);
  let { NFTName, albumName, color, desc, showInfo, val, width, artist, sold } = route.params;
  let artistName = () => artist;

  let purchasedNFTsFromArtist = userDetails['purchasedNFTs'][artist];

  if (purchasedNFTsFromArtist.includes(route.params) || route.params.sold) {
    sold = true;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.NFTName}>{NFTName}</Text>
      </View>
      <View style={styles.body}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <PressableNFTImage NFTDetails={route.params} />
          {!sold && (
            <>
              <Text
                style={{
                  position: 'absolute',
                  top: 10,
                  left: 40,
                  color: 'white',
                  fontFamily: 'Dosis_700Bold',
                  fontSize: 16,
                }}>
                {NFTName}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  bottom: 15,
                  right: 40,
                  color: 'white',
                  fontFamily: 'Dosis_700Bold',
                  fontSize: 16,
                }}>
                {val}
              </Text>
            </>
          )}
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{desc}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        {!sold ? (
          <Pressable
            onPress={(artist) => {
              Alert.alert('Confirm Purchase', 'Are you sure you want to purchase this NFT?', [
                {
                  text: 'Cancel',
                  onPress: () => {},
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
                        artist: artist,
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
        ) : (
          <View style={styles.button}>
            <Text style={styles.footerText}>PURCHASED</Text>
          </View>
        )}
        <Pressable style={styles.button}>
          <PiechartIcon />
          <Text style={styles.footerText}>ANALYTICS</Text>
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
    marginTop: -15,
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
