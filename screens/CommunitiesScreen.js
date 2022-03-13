import React, { useState } from 'react';
// TASK 3 S2
import { useNavigation } from '@react-navigation/native';
import { View, Pressable, SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Dondalicious, ProfileIconUnselected } from '../assets/icons';
import { Colors } from '../assets/themes';
import { useContext } from 'react';
import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import PressableNFTImage from '../components/PressableNFTImage';

function communityComponent({ item }, navigation) {
  // console.log('in da itwem', item);
  //  item.prop.joinedCommunities
  // console.log(typeof item);
  // if (typeof item === 'string') return null;
  return (
    <View style={styles.communityComponentContainer}>
      {/* <Pressable
        onPress={() => {
          // navigate to individual community screen
        }}
        style={styles.communityComponent}> */}
      {/* ^ pass in */}
      {/* <Dondalicious /> */}
      {/* </Pressable> */}
      <View style={{ width: '100%', margin: 30 }}>
        <PressableNFTImage
          noNav
          NFTDetails={item}
          handler={() => navigation.navigate('IndividualCommunityScreen', { item })}
        />
      </View>
      {item && <Text style={styles.communityText}>{item.mem} Members</Text>}
    </View>
  );
}

export default function CommunitiesScreen() {
  let navigation = useNavigation();
  const data = useContext(UserDetailsContext)[0].joinedCommunities.filter(
    (obj) => typeof obj !== 'string'
  );
  // alert(JSON.stringify(data));
  // console.log('dere da data', useContext(UserDetailsContext)[0].joinedCommunities);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ProfileIconUnselected />
        <Text style={styles.headerText}>Your Communities</Text>
      </View>
      {data && (
        <View>
          <Text style={{ fontFamily: 'Dosis_400Regular', color: Colors.darkgray }}>
            Swipe to see other communities!
          </Text>
        </View>
      )}
      {
        <Carousel
          layout={'default'}
          data={data}
          renderItem={(item) => communityComponent(item, navigation)}
          sliderWidth={400}
          itemWidth={400}
        />
      }
      <View style={{ flex: 1 }}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate('COMMUNITIES', { screen: 'JoinCommunitiesScreen', params: {} })
          }>
          <Text style={styles.buttonText}>Join New Communities</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  headerText: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 30,
  },
  communityComponentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityComponent: {},
  communityText: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 24,
    margin: 10,
    marginTop: -30,
  },
  button: {
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 20,
    // height: '15%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Dosis_700Bold',
    color: Colors.white,
    fontSize: 28,
  },
});
