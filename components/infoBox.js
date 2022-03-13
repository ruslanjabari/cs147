import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../assets/themes';
import { UpArrow } from '../assets/icons';

export default function InfoBox({ artist }) {
  const mapper = [
    {
      'Kanye West': {
        monthly: '1,123,789',
        total: '15,123,789',
        portfolio: '20%',
        performance: '32%',
      },
    },
    {
      Drake: {
        monthly: '2,123,789',
        total: '16,123,789',
        portfolio: '15%',
        performance: '40%',
      },
    },
    {
      'The Strokes': {
        monthly: '123,789',
        total: '1,123,789',
        portfolio: '10%',
        performance: '8%',
      },
    },
    {
      'D.Savage': {
        monthly: '2,789',
        total: '23,789',
        portfolio: '4%',
        performance: '2.1%',
      },
    },
  ];
  console.log('da');
  const obj = mapper.find((elem) => Object.keys(elem)[0] === artist);
  const deets = obj[artist];
  return (
    <View style={styles.container}>
      <View style={styles.halfGrid}>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Monthly Plays:</Text>
          <Text style={styles.regularText}>{deets.monthly}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Total Plays:</Text>
          <Text style={styles.regularText}>{deets.total}</Text>
        </View>
      </View>
      <View style={styles.halfGrid}>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>% of Portfolio</Text>
          <Text style={styles.regularText}>{deets.portfolio}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>3M Performance</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <UpArrow />
            <Text style={[styles.regularText, { marginLeft: 5, color: 'green' }]}>
              {deets.performance}
            </Text>
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
