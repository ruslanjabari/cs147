import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../assets/themes';
import { ProfileIconUnselected, Ye } from '../assets/icons/';

export default function ArtistDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ye width={50} />
        </View>
        <View style={styles.headerRight}>
          <View style={styles.headerRightArtistName}>
            <Text style={styles.artistName}>Kanye West</Text>
          </View>
          <View style={styles.headerRightGroup}>
            <View style={styles.followerIconGroup}>
              <ProfileIconUnselected width={20} />
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
  },
  header: {
    flexDirection: 'row',
  },
  headerLeft: {
    width: '35%',
    marginLeft: '10%',
  },
  artistName: {
    fontSize: 44,
    fontFamily: 'Dosis_700Bold',
  },
  headerRight: {
    backgroundColor: 'blue',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  artistFollowers: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 20,
    alignSelf: 'flex-end',
    marginBottom: 8,
    marginLeft: 5,
  },
});
