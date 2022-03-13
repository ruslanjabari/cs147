// Personal profile screen

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Animated,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import { Colors } from '../assets/themes';
import { useContext } from 'react';
import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';
import {
  Bound2,
  Yeezus,
  LifeOfPablo,
  Donda,
  Views,
  CLB,
  Scorpion,
  IsThisIt,
  Angles,
  RoomOnFire,
  DPhoenix,
  TrustNoOne,
  BPL,
} from '../assets/icons/';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import NFTs from '../assets/nfts/nfts';
import { PressableNFTImage, MyProfileHeader } from '../components';

const Tab = createMaterialTopTabNavigator();

function customTabNav({ state, descriptors, navigation, position }) {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{
          flexDirection: 'row',
          display: 'flex',
          alignContent: 'center',
          alignItems: '',
          marginLeft: 10,
          marginRight: 10,
          height: 40,
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

          // const inputRange = state.routes.map((_, i) => i);
          // const opacity = position.interpolate({
          //   inputRange,
          //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
          // });

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{}}>
              <Animated.Text
                style={{
                  fontFamily: 'Dosis_700Bold',
                  fontSize: 24,
                  marginRight: 15,
                  color: isFocused ? Colors.black : Colors.darkgray,
                }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default function ProfileScreen() {
  let navigation = useNavigation();
  const [userDetails, setUserDetails] = useContext(UserDetailsContext);
  console.log(userDetails, 'USERDETAILS');

  // maybe put in state
  let purchasedNFTs = userDetails['purchasedNFTs'];

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

  let artists = Object.keys(purchasedNFTs);
  let artistsAdded = artists.filter(function (artist) {
    return purchasedNFTs[artist].length > 0;
  });

  return (
    <>
      <MyProfileHeader />
      <Text style={styles.portfolioHeader}>My Portfolio</Text>

      <Text style={styles.text}>ARTIST</Text>

      <Tab.Navigator
        ScreenOptions={{
          tabBarLabelStyle: { fontSize: 200 },
        }}
        tabBar={customTabNav}>
        {artistsAdded.length === 0 && <Tab.Screen name=" ">{() => <View></View>}</Tab.Screen>}

        {artistsAdded.includes('The Strokes') && (
          <Tab.Screen key="The Strokes" name="The Strokes">
            {() => <ArtistsNFTs data={purchasedNFTs['The Strokes']} />}
          </Tab.Screen>
        )}

        {artistsAdded.includes('Kanye West') && (
          <Tab.Screen key="Kanye West" name="Kanye West">
            {() => <ArtistsNFTs data={purchasedNFTs['Kanye West']} />}
          </Tab.Screen>
        )}

        {artistsAdded.includes('Drake') && (
          <Tab.Screen key="Drake" name="Drake">
            {() => <ArtistsNFTs data={purchasedNFTs['Drake']} />}
          </Tab.Screen>
        )}

        {artistsAdded.includes('D. Savage') && (
          <Tab.Screen key="D. Savage" name="D. Savage">
            {() => <ArtistsNFTs data={purchasedNFTs['D. Savage']} />}
          </Tab.Screen>
        )}
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

    flex: 1,
  },
  portfolioHeader: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
});
