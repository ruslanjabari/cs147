import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated, View, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Colors } from '../assets/themes';
import { Bound2, Yeezus, LifeOfPablo, Donda } from '../assets/icons/';
import React, { useState } from 'react';
import ArtistNFTScreen from './ArtistNFTScreen';
import { useNavigation } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

function customTabNav({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row' }}>
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

export default function ArtistCampaignTabs() {
  let navigation = useNavigation();
  const [data, setData] = useState([
    {
      id: 1,
      color: 'red',
    },
    {
      id: 2,
      color: 'orange',
    },
    {
      id: 3,
      color: 'yellow',
    },
    {
      id: 4,
      color: 'green',
    },
    {
      id: 5,
      color: 'cyan',
    },
    {
      id: 6,
      color: 'blue',
    },

  ]);

  function renderItem({ item }, props) {
    let name = props.name;
    let NFTName = null;
    let color = item.color;
    let style = styles.nft;

    if (name === "YEEZUS") {
      NFTName = "BOUND 2 #00" + item.id;
      return (
        <Pressable
          onPress={() => navigation.navigate("Artists", { screen: "NFTDetails", params: { "color": { color }, "NFTCategory": "Yeezus", "style": { style }, "NFTName": NFTName } })}>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Yeezus style={{ position: 'relative' }} width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} >
              <Text style={{ zIndex: 2, color: 'black', position: 'absolute', top: 0, left: 0 }}>hi</Text>
            </Yeezus>
          </View>

        </Pressable>);
    } else if (name === "DONDA") {
      NFTName = "DONDA CHANT #00" + item.id;
      return (
        <Pressable
          onPress={() => navigation.navigate("Artists", { screen: "NFTDetails", params: { "color": { color }, "NFTCategory": "Donda", "style": { style }, "NFTName": NFTName } })}>
          <Donda width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />
        </Pressable>);
    } else if (name === "THE L") {
      NFTName = "THE L #00" + item.id;
      return (
        <Pressable
          onPress={() => navigation.navigate("Artists", { screen: "NFTDetails", params: { "color": { color }, "NFTCategory": "The L", "style": { style }, "NFTName": NFTName } })}>
          <LifeOfPablo width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />
        </Pressable>);
    }
  }

  function ArtistsNFTs(props) {

    return (<FlatList contentContainerStyle={styles.NFTContainer} numColumns={2} keyExtractor={item => item.id} data={props.data} renderItem={(item, index) => renderItem(item, props)} />)
  }


  return (
    <>
      <Text style={styles.text}>CAMPAIGNS</Text>
      <Tab.Navigator tabBar={customTabNav}>
        <Tab.Screen
          name="YEEZUS"

        >
          {() => <ArtistsNFTs data={data} name={"YEEZUS"} />}
        </Tab.Screen>

        <Tab.Screen
          name="DONDA"

        >
          {() => <ArtistsNFTs data={data} name={"DONDA"} />}
        </Tab.Screen>

        <Tab.Screen
          name="THE L"

        >
          {() => <ArtistsNFTs data={data} name={"THE L"} />}
        </Tab.Screen>

      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 18,
    marginLeft: 55,
  },
  nft: {
    marginBottom: 10
  },
  NFTContainer: {
    display: 'flex',
    alignItems: 'center',
  }
});
