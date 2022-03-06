import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import { ProfileIconUnselected } from '../assets/icons/';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { InfoBox } from '../components';
import { Colors } from '../assets/themes';
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

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <ProfileIconUnselected />
        <Text style={styles.headerText}>Ruslan's Portfolio</Text>
      </View>
      <Text style={styles.text}>ARTIST</Text>
      <Tab.Navigator tabBar={customTabNav}>
        <Tab.Screen name="KANYE WEST">
          {() => <InfoBox />}
          {/* This is probably the same component as the ArtistNFT since we're jsut displaying the NFTs */}
          {/* {() => <ArtistsNFTs data={data} name={"YEEZUS"} />} */}
        </Tab.Screen>

        {/* <Tab.Screen name="YEAT"> */}
        {/* {() => <ArtistsNFTs data={data} name={"DONDA"} />} */}
        {/* </Tab.Screen> */}

        {/* <Tab.Screen name="KID C"> */}
        {/* {() => <ArtistsNFTs data={data} name={"THE L"} />} */}
        {/* </Tab.Screen> */}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Dosis_700Bold',
    marginLeft: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'Dosis_700Bold',
    marginLeft: 15,
  },
});
