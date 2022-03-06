import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../assets/themes';

export default function InfoBox(props) {
  return (
    <View style={styles.container}>
      <View style={styles.halfGrid}>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Monthly Plays:</Text>
          <Text style={styles.regularText}>1,123,789</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Total Plays:</Text>
          <Text style={styles.regularText}>15,987,201</Text>
        </View>
      </View>
      <View style={styles.halfGrid}>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>% of Portfolio</Text>
          <Text style={styles.regularText}>20%</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>3M Performance</Text>
          <View>
            {/* <UpTriangle /> */}
            <Text style={styles.regularText}>32%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.darkgray,
    borderRadius: 10,
    padding: 12,
    margin: 10,
  },
  halfGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
  },
  boldText: {
    textAlign: 'left',
    fontFamily: 'Dosis_700Bold',
    fontSize: 16,
  },
  regularText: {
    fontSize: 16,
    fontFamily: 'Dosis_400Regular',
    textAlign: 'left',
  },
});
