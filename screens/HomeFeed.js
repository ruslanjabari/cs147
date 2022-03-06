import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { ProfileIconUnselected, MusicNoteIcon } from '../assets/icons/';

export function Post({ user, action, item, image = null, likes, artist, time }) {
  const [liked, setLiked] = React.useState(false);
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postAvatar}>
          {action === 'purchased' ? <ProfileIconUnselected /> : <MusicNoteIcon />}
        </View>
        <View style={styles.postInfoContainer}>
          <Text style={styles.userName}>{user}</Text>
          <Text style={styles.postInfo}>
            {action === 'purchased'
              ? `just purchased "${item}"`
              : `just launched the "${item}" campaign`}
          </Text>
        </View>
      </View>
      <View style={styles.postImage}></View>
      <View style={styles.postFooter}>
        <View style={styles.timestampContainer}>
          <Text style={styles.timestamp}>{time}</Text>
        </View>
        <View style={styles.postFooterIcons}>
          <Pressable style={styles.heart}>{liked ? <HeartFilled /> : <HeartUnfilled />}</Pressable>
          <Pressable style={styles.DM}></Pressable>
        </View>
      </View>
    </View>
  );
}

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
        renderItem={({ item }) => Post(item)}
        keyExtractor={(_, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {},
});
