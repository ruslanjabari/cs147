import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Colors } from '../assets/themes';
import { ProfileIconUnselected } from '../assets/icons/';

export default function ProfilePill(props) {
  return (
    <Pressable
      onPress={() => /*navigation.navigate('ArtistNFTScreen') */ {}}
      style={styles.artistInfo}>
      <View style={styles.artistInfoGroup}>
        <ProfileIconUnselected />
        <View style={styles.textGroup}>
          <Text style={styles.artistName}>Daniel</Text>
          <Text style={styles.contactInfo}>From your contacts</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  artistInfo: {
    backgroundColor: Colors.gray,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '75%',
    borderRadius: 52,
    marginBottom: 10,
    height: 90,
  },
  artistName: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 30,
  },
  artistInfoGroup: {
    display: 'flex',
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textGroup: {
    marginLeft: 15,
  },
});
