import { Pressable, View, SafeAreaView, StyleSheet, Text } from 'react-native';
import Bound2 from '../assets/icons/Bound2.svg';
import ShoppingCartIcon from '../assets/icons/ShoppingCartIcon.svg';
import PiechartIcon from '../assets/icons/Piechart.svg';
import { Colors } from '../assets/themes';
import { LifeOfPablo, Yeezus, Donda } from '../assets/icons';

export default function NFTDetails({ navigation, route }) {
  const nftObj = route.params.NFT;
  const color = route.params.color.color;
  const NFTCategory = route.params.NFTCategory;
  let style = route.params.style;
  const NFTName = route.params.NFTName;
  let NFT = null;

  console.log(color, 'color!!!!');
  console.log(NFTName, 'NFTNME!');
  const NFTProps = {
    width: 200,
    fill: color,
    fillOpacity: 0.4,
    style: style
  }

  // const NFTMapper = {
  //   "Yeezus": <Text>
  //     <Yeezus
  //       width={200}
  //       fill={color}
  //       fillOpacity={0.4}
  //       style={style}
  //     />
  //   </Text>,
  //   "Donda": 
  // }

  switch (NFTCategory) {
    case "Yeezus":
      NFT = <Yeezus {...NFTProps} />;
      break;
    case
  }


  if (NFTCategory === 'Yeezus') {
    NFT = (
      <Yeezus
        {...NFTProps}
      />
    );
  } else if (NFTCategory === 'Donda') {
    NFT = (
      <Donda {...NFTProps} />
    );
  } else if (NFTCategory === 'The L') {
    NFT = (
      <Text>
        <LifeOfPablo width={200} fill={color} fillOpacity={0.4} style={style} />
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.NFTName}>{NFTName}</Text>

        {NFT}
      </View>
      <View style={styles.body}>
        <Text>{nftObj}</Text>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Having been vocal about it for years, Ye is donating 10% of proceeds to the “Free Larry
            Hoover” campaign
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable
          onPress={() =>
            navigation.navigate('EXPLORE', {
              screen: 'PurchaseScreen',
              params: {
                color: { color },
                NFTCategory: 'Yeezus',
                style: { style },
                NFTName: NFTName,
              },
            })
          }
          style={styles.button}>
          <ShoppingCartIcon />
          <Text style={styles.footerText}>PURCHASE</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <PiechartIcon />
          <Text style={styles.footerText}>ANALYTICS</Text>
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
    marginTop: 100,
  },
  headerTitle: {
    fontSize: 48,
    fontFamily: 'Dosis_700Bold',
  },
  body: {
    flex: 3,
  },
  description: {
    width: '100%',
    alignItems: 'center',
    padding: 40,
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
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 28,
    color: Colors.white,
    fontFamily: 'Dosis_400Regular',
    marginLeft: 5,
  },
  NFTName: {
    fontSize: 44,
    fontFamily: 'Dosis_700Bold',
  },
});
