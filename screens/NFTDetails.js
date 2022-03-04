import { Pressable, View, SafeAreaView, StyleSheet, Text } from 'react-native';
import Bound2 from '../assets/icons/Bound2.svg';
import ShoppingCartIcon from '../assets/icons/ShoppingCartIcon.svg';
import PiechartIcon from '../assets/icons/PiechartIcon.svg';
import { Colors } from '../assets/themes';

export function NFTDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bound2 #001</Text>
      </View>
      <View style={styles.body}>
        <Bound2 width={400} />
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            Having been vocal about it for years, Ye is donating 10% of proceeds to the “Free Larry
            Hoover” campaign
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button}>
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
});
