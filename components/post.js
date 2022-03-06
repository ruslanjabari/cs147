import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { ProfileIconUnselected, MusicNoteIcon, HeartIcon } from '../assets/icons/';
import { Colors } from '../assets/themes';

export default function Post(props) {
  const { user, action, item, image = null, likes, artist, time } = props.item;
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
              ? `just purchased "${item}" by ${artist}`
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
          <Pressable style={styles.heart}>{liked ? <HeartIcon /> : <HeartIcon />}</Pressable>
          <Pressable style={styles.DM}></Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    width: '100%',
    marginBottom: 8,
    backgroundColor: Colors.gray,
  },
  postHeader: {
    flexDirection: 'row',
    margin: 10,
  },
  postInfoContainer: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 22,
    fontFamily: 'Dosis_700Bold',
  },
  postInfo: {
    fontSize: 22,
    fontFamily: 'Dosis_400Regular',
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  postFooterIcons: {
    flexDirection: 'row',
  },
});
