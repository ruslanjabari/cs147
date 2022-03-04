import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ArtistDetails from './ArtistDetails';
import ArtistCampaignTabs from './ArtistCampaignTabs';

export default function ArtistNFTScreen({ }) {


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <ArtistDetails />
      </View>
      <View style={{ flex: 4 }}>
        <ArtistCampaignTabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
