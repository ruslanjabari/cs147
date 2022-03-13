import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Animated,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import { Colors } from '../assets/themes';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { PressableNFTImage } from '../components';
import { NFTsContext } from '../assets/contextProviders/NFTsProvider';
import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';

const Tab = createMaterialTopTabNavigator();

function customTabNav({ state, descriptors, navigation, position }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: '',
        paddingBottom: 5,
        marginRight: 30,
      }}>
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

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'flex-end' }}>
            <Animated.Text
              style={{
                fontFamily: 'Dosis_700Bold',
                fontSize: 24,
                color: isFocused ? Colors.black : Colors.darkgray,
              }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function ArtistCampaignTabs({ artist }) {
  const [NFTs, setNFTs] = useContext(NFTsContext);
  const [userDetails, setUserDetails] = useContext(UserDetailsContext);
  let albums;

  switch (artist) {
    case 'Kanye West':
      albums = ['YEEZUS', 'DONDA', 'THE L'];
      break;
    case 'The Strokes':
      albums = ['IS THIS IT', 'ANGLES', 'ROOM'];
      break;
    case 'Drake':
      albums = ['VIEWS', 'CLB      ', 'SCORPION'];
      break;
    case 'D. Savage':
      albums = ['D PHOENIX', 'TRUST', 'BPL'];
      break;
  }

  let navigation = useNavigation();

  function renderItem({ item }, props) {
    item.showInfo = true;

    return <PressableNFTImage NFTDetails={item} />;
  }

  function ArtistsNFTs(props) {
    return (
      <FlatList
        contentContainerStyle={styles.NFTContainer}
        numColumns={2}
        keyExtractor={(item) => item.NFTName}
        data={props.data}
        renderItem={(item, index) => renderItem(item, props)}
      />
    );
  }

  let album0 = albums[0] !== 'CLB      ' ? albums[0] : 'CLB';
  let album1 = albums[1] !== 'CLB      ' ? albums[1] : 'CLB';
  let album2 = albums[2] !== 'CLB      ' ? albums[2] : 'CLB';

  let purchasedNFTsFromArtist = userDetails['purchasedNFTs'][artist];
  let list0 = NFTs[album0].filter((item) => !purchasedNFTsFromArtist.includes(item));
  let list1 = NFTs[album1].filter((item) => !purchasedNFTsFromArtist.includes(item));
  let list2 = NFTs[album2].filter((item) => !purchasedNFTsFromArtist.includes(item));

  return (
    <>
      <Text style={styles.text}>CAMPAIGNS</Text>
      <Tab.Navigator
        ScreenOptions={{
          tabBarLabelStyle: { fontSize: 200 },
        }}
        tabBar={customTabNav}>
        <Tab.Screen name={albums[0]}>{() => <ArtistsNFTs data={list0} />}</Tab.Screen>

        <Tab.Screen name={albums[1]}>{() => <ArtistsNFTs data={list1} />}</Tab.Screen>

        <Tab.Screen name={albums[2]}>{() => <ArtistsNFTs data={list2} />}</Tab.Screen>
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 18,
    marginLeft: 30,
  },
  nft: {
    marginBottom: 10,
  },
  NFTContainer: {
    display: 'flex',
  },
});
