import { useContext, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../assets/themes';
import { ProfileBlack, Ye, Verified, Strokes, Drake, DSavage } from '../assets/icons/';

const KanyeObj = {
  artistName: 'Kanye West',
  followers: '1.4M',
  img: <Ye width={100} height={100} />,
};
const StrokesObj = {
  artistName: 'The Strokes',
  followers: '6M',
  img: <Strokes width={100} height={100} />,
};
const DrakeObj = {
  artistName: 'Drake          ',
  followers: '4M',
  img: <Drake width={100} height={100} />,
};
const DSavageObj = {
  artistName: 'D. Savage   ',
  followers: '1M',
  img: <DSavage width={100} height={100} />,
};

import { UserDetailsContext } from '../assets/contextProviders/UserDetailsProvider';

export default function ArtistDetails({ artist }) {
  let [userDetails, setUserDetails] = useContext(UserDetailsContext);
  console.log(!(userDetails["following"].map(function (user) { return user.user }).includes(artist)), "RESULT")
  let [follow, setFollow] = useState(!(userDetails["following"].map(function (user) { return user.user }).includes(artist)));
  let details;

  if (artist === 'Kanye West') {
    details = KanyeObj;
  } else if (artist === 'The Strokes') {
    details = StrokesObj;
  } else if (artist === 'Drake') {
    details = DrakeObj;
  } else {
    details = DSavageObj;
  }

  console.log(userDetails["following"], "FOLLOWINGDOODS");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>{details.img}</View>
        <View style={styles.headerRight}>
          <View style={styles.headerRightArtistName}>
            <Verified width={30} height={30} />
            <Text style={styles.artistName}>{details.artistName}</Text>
          </View>
          <View style={styles.headerRightGroup}>
            <View style={styles.followerIconGroup}>
              <ProfileBlack width={20} />
              <Text style={styles.artistFollowers}>{details.followers}</Text>
            </View>
            <Pressable
              style={styles.button}
              onPress={() => {
                if (!userDetails.following.map(function (user) { return user.user }).includes(artist)) {
                  setUserDetails({ ...userDetails, ...userDetails['following'].push({ user: artist }) });
                  setFollow(true);
                } else {
                  setUserDetails({
                    ...userDetails,
                    ...userDetails['following'].splice(userDetails['following'].map(function (user) { return user.user }).indexOf(artist), 1),
                  });
                  setFollow(false);
                }
              }}>
              <Text style={styles.buttonText}>{!(userDetails["following"].map(function (user) { return user.user }).includes(artist)) ? 'FOLLOW' : 'UNFOLLOW'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    paddingRight: 35,
  },
  headerLeft: {
    width: '30%',
    marginLeft: '10%',
  },
  artistName: {
    fontSize: 40,
    fontFamily: 'Dosis_700Bold',
    marginLeft: 5,
  },
  headerRight: {
    display: 'flex',
    alignContent: 'space-around',

    // width: '70%',
  },
  headerRightGroup: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Colors.black,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.white,
    fontFamily: 'Dosis_700Bold',
    fontSize: 20,
  },
  followerIconGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistFollowers: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 25,
    alignSelf: 'flex-end',
    marginBottom: 2,
    marginLeft: 5,
  },
  headerRightArtistName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
