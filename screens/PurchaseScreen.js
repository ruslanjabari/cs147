import { Pressable, View, SafeAreaView, StyleSheet, Text } from 'react-native';
import Bound2 from '../assets/icons/Bound2.svg';
import { Colors } from '../assets/themes';
import { LifeOfPablo, Yeezus, Donda, Views, CLB, Scorpion, IsThisIt, Angles, Room, DPhoenix, TrustNoOne, BPL } from '../assets/icons';

export default function PurchaseScreen({ navigation, route }) {
  const nftObj = route.params.NFT;
  const color = route.params.color.color;
  const NFTCategory = route.params.NFTCategory;
  const style = route.params.style;
  const NFTName = route.params.NFTName;

  console.log(route.params, "PURCJHASE PARAMS")

  const NFTProps = {
    width: 200,
    fill: color,
    fillOpacity: 0.4,
    style: style,
  }

  const NFTMapper = {
    "YEEZUS": <Yeezus width={200} height={200} {...NFTProps} />,
    "DONDA": <Donda {...NFTProps} />,
    "THE L": <LifeOfPablo {...NFTProps} />,
    "VIEWS": <Views {...NFTProps} />,
    "CLB": <CLB {...NFTProps} />,
    "SCORPION": <Scorpion {...NFTProps} />,
    "IS THIS IT": <IsThisIt {...NFTProps} />,
    "ANGLES": <Angles {...NFTProps} />,
    "ROOM": <Room {...NFTProps} />,
    "D PHOENIX": <DPhoenix {...NFTProps} />,
    "TRUST": <TrustNoOne {...NFTProps} />,
    "BPL": <BPL {...NFTProps} />
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PURCHASE COMPLETE!</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.NFTDisplay}>
          {NFTMapper[NFTCategory]}
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            You now own {NFTName} and can access exclusive communities and content with its
            associated campaign!
          </Text>
        </View>

      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <Text style={styles.footerText}>JOIN COMMUNITY</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.footerText}>VIEW ON PROFILE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Dosis_700Bold',
  },
  body: {
    flex: 3,
  },
  description: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  descriptionText: {
    fontSize: 24,
    fontFamily: 'Dosis_400Regular',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.black,
    margin: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '65%',
    height: '30%',
  },
  footerText: {
    fontSize: 28,
    color: Colors.white,
    fontFamily: 'Dosis_400Regular',
  },
  NFTDisplay: {
    display: 'flex',
    alignItems: 'center'
  }
});
