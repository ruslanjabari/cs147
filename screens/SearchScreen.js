import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import { ProfilePill, SearchBar, InfoBox } from '../components';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    user: 'Walk5',
  },
  {
    user: 'Ali2',
  },
  {
    user: 'Milo7'
  }
];

export default function SearchScreen() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(DATA);
  let navigation = useNavigation();
  const handleSearch = () => {
    if (searchPhrase.length === 0) {
      setData(DATA);
      return;
    }
    const tmp = DATA.filter((obj) => obj.user.toLowerCase().includes(searchPhrase.toLowerCase()));
    setData(tmp);
  };
  useEffect(() => {
    handleSearch();
  }, [searchPhrase]);
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={(val) => {
          setSearchPhrase(val);
          handleSearch();
        }}
        clicked={clicked}
        setClicked={setClicked}
      />
      {/* <InfoBox /> */}
      <FlatList
        data={data}
        renderItem={({ item }) => <ProfilePill name={item.user} />}
        keyExtractor={(_, index) => index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
