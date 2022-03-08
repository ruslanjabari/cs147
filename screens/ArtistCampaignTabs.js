import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Animated, View, TouchableOpacity, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Colors } from '../assets/themes';
import {
  Bound2, Yeezus, LifeOfPablo, Donda, Views,
  CLB,
  Scorpion,
  IsThisIt,
  Angles,
  RoomOnFire,
  DPhoenix,
  TrustNoOne,
  BPL
} from '../assets/icons/';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

const CampaignDescriptions = {
  "YEEZUS": 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign',
  "DONDA": 'Ye is donating 15% of proceeds to the "Cancel SNL" campaign',
  "THE L": 'Ye is donating 5% of proceeds to Blue Star Moms',
  "VIEWS": 'Drake is donating 1% of proceeds to CARE charity',
  "CLB": 'Drake is donating 8% of proceeds to the Wounded Warrior Project',
  "SCORPION": 'Drake is donating 10% of proceeds to "Save the Children"',
  "IS THIS IT": "The Strokes are donating 5% of proceeds to St. Jude Children's Research Hospital",
  "ANGLES": 'The Strokes are donating 7% of proceeds to Smile Train Charity',
  "ROOM": 'The Strokes are donating 15% of proceeds to the International Rescue Committee',
  "D PHOENIX": 'D. Savage is donating 10% of proceeds to Camp Kesem',
  "TRUST": 'D. Savage is donating 12% of proceeds to Stanford',
  "BPL": 'D. Savage is donating 15% of proceeds to Heifer International'
}

function customTabNav({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: '', paddingBottom: 5, marginRight: 30 }}>
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

export default function ArtistCampaignTabs({ artist }) {
  let albums;

  switch (artist) {
    case "Kanye West":
      albums = ["YEEZUS", "DONDA", "THE L"];
      break;
    case "The Strokes":
      albums = ["IS THIS IT", "ANGLES", "ROOM"];
      break;
    case "Drake":
      albums = ["VIEWS", "CLB      ", "SCORPION"]
      break;
    case "D. Savage":
      albums = ["D PHOENIX", "TRUST", "BPL"]
      break;
  }

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
      color: '#b89d00',
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

  function NFTImage({ NFTName, color, val, style, NFT, albumName }) {
    console.log("albumNAME", albumName);

    return (
      <Pressable
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        onPress={() => navigation.navigate("EXPLORE", { screen: "NFTDetails", params: { "color": { color }, "albumName": { albumName }, "style": { style }, "NFTName": NFTName, "price": val, desc: CampaignDescriptions[albumName] } })}>

        {NFT}
        <Text style={{ position: 'absolute', top: 10, left: 40, color: 'white', fontFamily: 'Dosis_700Bold', fontSize: 16 }}>
          {NFTName}
        </Text>
        <Text style={{ position: 'absolute', bottom: 15, right: 40, color: 'white', fontFamily: 'Dosis_700Bold', fontSize: 16 }}>
          {val}
        </Text>
      </Pressable>
    )
  }

  function renderItem({ item }, props) {
    console.log(props, "THIS THOSE PROPS")
    let name = props.name;
    let NFTName = null;
    let color = item.color;
    let style = styles.nft;
    let val = null;
    let albumName = null;

    if (name === "YEEZUS") {
      NFTName = "BOUND 2 #00" + item.id;
      val = "7.4 ETH"
      name = "YEEZUS" + "";
      return <NFTImage NFTName={NFTName} albumName={name} color={color} val={val} style={style} NFT={<Yeezus width={200} fill={item.color} fillOpacity={0.4} />} />;

    } else if (name === "DONDA") {
      NFTName = "Jail #00" + item.id;
      val = "7.2 ETH"
      name = "DONDA" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<Donda width={200} fill={item.color} fillOpacity={0.4} />} albumName={name} />;
    } else if (name === "THE L") {
      NFTName = "Famous #00" + item.id;
      val = "7.1 ETH"
      name = "THE L" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<LifeOfPablo width={200} fill={item.color} fillOpacity={0.4} />} albumName={name} />;
    } else if (name === "VIEWS") {
      NFTName = "Hype #00" + item.id;
      val = "6.8 ETH"
      name = "VIEWS" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<Views width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    } else if (name === "CLB      ") {
      NFTName = "IMY2 #00" + item.id;
      val = "9.1 ETH"
      name = "CLB" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<CLB width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    } else if (name === "SCORPION") {
      NFTName = "Elevate #00" + item.id;
      val = "7.1 ETH"
      name = "SCORPION" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<Scorpion width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    } else if (name === "IS THIS IT") {
      NFTName = "Soma #00" + item.id;
      val = "3.2 ETH"
      name = "IS THIS IT" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<IsThisIt width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    } else if (name === "ANGLES") {
      NFTName = "Games #00" + item.id;
      val = "2.9 ETH"
      name = "ANGLES" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<Angles width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    } else if (name === "ROOM") {
      NFTName = "12:51 #00" + item.id;
      val = "2.7 ETH"
      name = "ROOM" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<RoomOnFire width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    } else if (name === "D PHOENIX") {
      NFTName = "Opera #00" + item.id;
      val = "1.1 ETH"
      name = "D PHOENIX" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<DPhoenix width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    } else if (name === "TRUST") {
      NFTName = "Wytd #00" + item.id;
      val = "1.5 ETH"
      name = "TRUST" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<TrustNoOne width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    } else if (name === "BPL") {
      NFTName = "Runtz #00" + item.id;
      val = "1.8 ETH"
      name = "BPL" + "";
      return <NFTImage NFTName={NFTName} color={color} val={val} style={style} NFT={<BPL width={200} fill={item.color} fillOpacity={0.4} style={styles.nft} />} albumName={name} />;
    }
  }

  function ArtistsNFTs(props) {

    return (<FlatList contentContainerStyle={styles.NFTContainer} numColumns={2} keyExtractor={item => item.id} data={props.data} renderItem={(item, index) => renderItem(item, props)} />)
  }


  return (
    <>
      <Text style={styles.text}>CAMPAIGNS</Text>
      <Tab.Navigator
        ScreenOptions={{
          tabBarLabelStyle: { fontSize: 200 }
        }}
        tabBar={customTabNav}>
        <Tab.Screen
          name={albums[0]}

        >
          {() => <ArtistsNFTs data={data} name={albums[0]} />}
        </Tab.Screen>

        <Tab.Screen
          name={albums[1]}

        >
          {() => <ArtistsNFTs data={data} name={albums[1]} />}
        </Tab.Screen>

        <Tab.Screen
          name={albums[2]}

        >
          {() => <ArtistsNFTs data={data} name={albums[2]} />}
        </Tab.Screen>

      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 18,
    marginLeft: 30

  },
  nft: {
    marginBottom: 10
  },
  NFTContainer: {
    display: 'flex',
    alignItems: 'center',
  }
});
