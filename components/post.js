import React, { useContext, useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import {
  ProfileIconUnselected,
  MusicNoteIcon,
  HeartIcon,
  Dondalicious,
  HeartIconFilled,
} from '../assets/icons/';
import { Colors } from '../assets/themes';
import PressableNFTImage from './PressableNFTImage';
import { HomeFeedContext } from '../assets/contextProviders/HomeFeedProvider';

export default function Post(props) {
  const { user, action, item, likes, artist, time, NFTDetails } = props.item;
  // const [liked, setLiked] = React.useState(false);
  const [homeFeed, setHomeFeed] = useContext(HomeFeedContext);
  const [liked, setLiked] = useState(
    homeFeed.forEach((post) => {
      if (
        post.user === user &&
        post.action === action &&
        post.item === item &&
        post.likes === likes &&
        post.artist === artist &&
        post.time === time
      ) {
        return post.liked;
      }
    })
  );

  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postAvatar}>
          {action === 'purchased' ? <ProfileIconUnselected /> : <MusicNoteIcon />}
        </View>
        <View style={styles.postInfoContainer}>
          <Text style={styles.postInfo}>
            <Text style={styles.userName}>{user}</Text>
            {action === 'purchased'
              ? ` just purchased "${item}" by ${artist}!`
              : ` just launched the "${item}" community!`}
          </Text>
        </View>
      </View>
      <View style={styles.postImage}>
        {NFTDetails ? <PressableNFTImage NFTDetails={NFTDetails} /> : <Dondalicious />}
      </View>
      <View style={styles.postFooter}>
        <View style={styles.timestampContainer}>
          <Text style={styles.timestamp}>{time}</Text>
        </View>
        <View style={styles.postFooterIcons}>
          <Text style={styles.likes}>{likes}</Text>
          <Pressable
            style={styles.heart}
            onPress={() => {
              setHomeFeed((prevHomeFeed) => {
                const newHomeFeed = [...prevHomeFeed];
                const postIndex = newHomeFeed.findIndex((post) => {
                  return (
                    post.user === user &&
                    post.action === action &&
                    post.item === item &&
                    post.likes === likes &&
                    post.artist === artist &&
                    post.time === time
                  );
                });
                newHomeFeed[postIndex].liked = !newHomeFeed[postIndex].liked;
                if (newHomeFeed[postIndex].liked) newHomeFeed[postIndex].likes++;
                else newHomeFeed[postIndex].likes--;
                return newHomeFeed;
              });
              setLiked(!liked);
            }}>
            {liked ? <HeartIconFilled /> : <HeartIcon />}
          </Pressable>
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
    paddingRight: 10,
    paddingLeft: 30,
    paddingBottom: 30,
    flex: 1,
    flexWrap: 'wrap',
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
    alignItems: 'center',
  },
  postImage: {
    alignItems: 'center',
  },
  nft: {
    marginBottom: 10,
  },
  heart: {
    width: 40,
    height: 40,
  },
  likes: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 18,
    marginBottom: 4,
  },
});
