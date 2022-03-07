import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../assets/themes';
import { ProfileBlack, Ye, Verified } from '../assets/icons/';

export default function ArtistDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ye width={100} height={100} />
        </View>
        <View style={styles.headerRight}>
          <View style={styles.headerRightArtistName}>
            <Verified width={30} height={30} />
            <Text style={styles.artistName}>Kanye West</Text>
          </View>
          <View style={styles.headerRightGroup}>
            <View style={styles.followerIconGroup}>
              <ProfileBlack width={20} />
              <Text style={styles.artistFollowers}>1.4M</Text>
            </View>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>FOLLOW</Text>
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
    paddingBottom: 30
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
    marginLeft: 5
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

  }
});
