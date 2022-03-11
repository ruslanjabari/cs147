// TASK 3 S3

import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';

import { SafeAreaView, View, FlatList, Pressable, Text, StyleSheet } from 'react-native';

import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';

const Elem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(props.NFTName)} style={styles.button}>
      {Object.keys(item).map((key) => key.icon)}
      {/* ^ pass in through item */}
    </Pressable>
  );
};

const renderItem = ({ item }) => (
  <View style={styles.renderItem}>
    <Elem />
    {false ? null : <Elem props={item.icon} />}
    {/* ^^ case when only one NFT is remaining, this does not handle it, just flagging it! */}
  </View>
);

export default function JoinCommunitiesScreen() {
  const data = useContext(UserDetailsContext)['potentialCommunities'] || [];
  console.log(useContext(UserDetailsContext));
  // { 'Kanye West': { name: 'TeamYe', mem: '21,045', icon: <Dondalicious /> } },
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
