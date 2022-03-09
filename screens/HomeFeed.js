import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Post } from '../components';

const DATA = [
  {
    user: 'NickISAGoat',
    action: 'purchased',
    item: 'Bound 2 #004',
    likes: 0,
    artist: 'Ye',
    time: '15 minutes ago',
    NFTDetails: {
      NFTName: "BOUND 2 #004",
      albumName: "YEEZUS",
      color: "green",
      val: "7.4 ETH",
      width: 200,
      showInfo: false,
      desc: 'Having been vocal about it for years, Ye is donating 10% of proceeds to the "Free Larry Hoover" campaign'
    }
  },
  {
    user: 'KANYE WEST',
    action: 'launched',
    item: 'DONDA',
    likes: 10,
    artist: 'Ye',
    time: '23 minutes ago',
    NFTDetails: null
  },
];

export default function HomeFeed() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(_, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
