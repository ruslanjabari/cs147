// TASK 3 S3

import { useContext } from 'react';

import { SafeAreaView, View, FlatList, Pressable, Text, StyleSheet } from 'react-native';
import { Dondalicious } from '../assets/icons';
import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';

const Elem = (props) => (
  <Pressable onPress={() => alert('navigate!')} style={styles.button}>
    <Dondalicious />
    {/* ^ pass in through item */}
  </Pressable>
);

const renderItem = ({ item }) => (
  <View style={styles.renderItem}>
    <Elem />
    {false ? null : <Elem />}
    {/* ^^ case when only one NFT is remaining, this does not handle it, just flagging it! */}
  </View>
);

export default function JoinCommunitiesScreen() {
  const data = useContext(UserDetailsContext)['potentialCommunities'] || [];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Join Now</Text>
        <Text style={styles.regularText}>You own NFTs associated with these communities</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 15,
  },
  flatList: {
    margin: 10,
    alignSelf: 'center',
  },
  boldText: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 26,
  },
  regularText: {
    fontFamily: 'Dosis_400Regular',
    fontSize: 18,
  },
  button: {
    margin: 10,
  },
  renderItem: {
    width: '100%',
    flexDirection: 'row',
  },
});
