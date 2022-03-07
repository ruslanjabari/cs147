import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ArtistDetails from './ArtistDetails';
import ArtistCampaignTabs from './ArtistCampaignTabs';

export default function ArtistNFTScreen({ route }) {
  const artist = route.params.artist;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ArtistDetails artist={artist} />
      </View>
      <View style={{ flex: 4 }}>
        <ArtistCampaignTabs artist={artist} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
