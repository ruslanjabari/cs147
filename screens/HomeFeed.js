import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Post } from '../components';

const DATA = [
  {
    user: 'NickISAGoat',
    action: 'purchased',
    item: 'Bound2',
    image: null,
    likes: 0,
    artist: 'Ye',
    time: '1 hour ago',
  },
  {
    user: 'KANYE WEST',
    action: 'launched',
    item: 'DONDA',
    image: null,
    likes: 10,
    artist: 'Ye',
    time: '23 minutes ago',
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
