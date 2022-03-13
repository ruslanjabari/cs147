import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { Post } from '../components';
import { HomeFeedContext } from '../assets/contextProviders/HomeFeedProvider';

export default function HomeFeed() {
  const [homeFeed, setHomeFeed] = useContext(HomeFeedContext);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={homeFeed}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
