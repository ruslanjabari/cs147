import React, { useState } from 'react';
// TASK 3 S2
import { useNavigation } from '@react-navigation/native';
import { View, Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Dondalicious, ProfileIconUnselected } from '../assets/icons';
import { Colors } from '../assets/themes';

const communityComponent = (item) => (
  <View style={styles.communityComponentContainer}>
    <Pressable onPress={() => alert('navigate')} style={styles.communityComponent}>
      {item}
      {/* ^ pass in */}
    </Pressable>
    <Text style={styles.communityText}>101,042 Members</Text>
  </View>
);

export default function CommunitiesScreen() {
  let navigation = useNavigation();
  const [data, setData] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ProfileIconUnselected />
        <Text style={styles.headerText}>Your Communities</Text>
      </View>
      <Carousel
        layout={'default'}
        data={data}
        renderItem={communityComponent}
        sliderWidth={400}
        itemWidth={400}
      />
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate('COMMUNITIES', { screen: 'JoinCommunitiesScreen', params: {} })
        }>
        <Text style={styles.buttonText}>Join New Communities</Text>
      </Pressable>
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
  },
  button: {
    backgroundColor: Colors.black,
    margin: 5,
    borderRadius: 20,
    height: '15%',
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Dosis_700Bold',
    color: Colors.white,
    fontSize: 28,
  },
});
