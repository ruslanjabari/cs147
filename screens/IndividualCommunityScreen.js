// IndividualCommunityScreen (TASK3)
import { View, Text, StyleSheet, FlatList, SafeAreaView, Linking, Pressable } from 'react-native';
import { ChatIconUnselected, DiscordIcon, MusicNoteIcon, ForwardIcon } from '../assets/icons';
import { Colors } from '../assets/themes';

const renderItem = ({ item }) => (
  <View style={styles.renderItemContainer}>
    <MusicNoteIcon />
    <View style={styles.eventDetails}>
      <Text style={styles.eventHeader}>{item.eventTitle || 'Donda Tour'}</Text>
      <Text style={styles.eventSubHeader}>{item.eventLocation || 'Crypto.com Staduim'}</Text>
    </View>
    <ForwardIcon />
  </View>
);

const ItemSeparatorComponent = () => (
  <View
    style={{
      borderColor: Colors.darkgray,
      borderWidth: 1,
    }}
  />
);

export default function IndividualCommunityScreen({ route }) {
  const community = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ChatIconUnselected />
        <View style={styles.headerTextGroup}>
          <Text style={styles.boldText}>{community.NFTName}</Text>
          <Text style={styles.regularText}>{community.mem} Members</Text>
        </View>
        <Pressable
          onPress={() => {
            Linking.openURL('https:///www.discord.com');
          }}>
          <DiscordIcon color="black" />
        </Pressable>
      </View>
      <Text style={styles.flatListHeader}>Featured Events</Text>
      <FlatList
        data={community.events}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorComponent}
        ListHeaderComponent={ItemSeparatorComponent}
        ListFooterComponent={ItemSeparatorComponent}
      />
      {/* recent activity/ feed component */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    // ^^ disable if you want the item seperator items to go all the way horizontally like the figma
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerTextGroup: {
    marginLeft: 10,
    marginRight: 10,
  },
  boldText: {
    fontFamily: 'Dosis_700Bold',
    fontSize: 26,
  },
  regularText: {
    fontFamily: 'Dosis_400Regular',
    fontSize: 18,
  },
  flatListHeader: {
    fontFamily: 'Dosis_400Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  renderItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  eventDetails: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    width: '50%',
  },
  eventHeader: {
    fontFamily: 'Dosis_400Regular',
    fontSize: 18,
  },
  eventSubHeader: {
    fontFamily: 'Dosis_400Regular',
    fontSize: 16,
    color: Colors.darkgray,
  },
});
