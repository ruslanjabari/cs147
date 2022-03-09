import { Pressable, View, SafeAreaView, StyleSheet, Text } from 'react-native';
import Bound2 from '../assets/icons/Bound2.svg';
import ShoppingCartIcon from '../assets/icons/ShoppingCartIcon.svg';
import PiechartIcon from '../assets/icons/Piechart.svg';
import { Colors } from '../assets/themes';
import { PressableNFTImage } from '../components';

export default function NFTDetails({ navigation, route }) {
  let { NFTName, albumName, color, desc, showInfo, val, width } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.NFTName}>{NFTName}</Text>

      </View>
      <View style={styles.body}>

        <View
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >

          <PressableNFTImage NFTDetails={route.params} />
          <Text style={{ position: 'absolute', top: 10, left: 40, color: 'white', fontFamily: 'Dosis_700Bold', fontSize: 16 }}>
            {NFTName}
          </Text>
          <Text style={{ position: 'absolute', bottom: 15, right: 40, color: 'white', fontFamily: 'Dosis_700Bold', fontSize: 16 }}>
            {val}
          </Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {desc}
          </Text>
        </View>
      </View>


      <View style={styles.footer}>
        <Pressable
          onPress={() =>
            navigation.navigate('EXPLORE', {
              screen: 'PurchaseScreen',
              params: route.params
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
    </SafeAreaView >
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
    marginTop: -15,

  },
  headerTitle: {
    fontSize: 48,
    fontFamily: 'Dosis_700Bold',
  },
  body: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -15


  },
  description: {
    width: '100%',
    alignItems: 'center',
    paddingRight: 40,
    paddingLeft: 40,

  },
  descriptionText: {
    fontSize: 24,
    fontFamily: 'Dosis_400Regular',
    marginTop: 5
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

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
