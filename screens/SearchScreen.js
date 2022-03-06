import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { ProfilePill, SearchBar, InfoBox } from '../components';

const DATA = [
  {
    user: 'NickISAGoat',
    action: 'purchased',
    item: 'Bound2',
    image: null,
    likes: 0,
    artist: 'Ye',
    time: '1 hour ago',
  },
  {
    user: 'KANYE WEST',
    action: 'launched',
    item: 'DONDA',
    image: null,
    likes: 10,
    artist: 'Ye',
    time: '23 minutes ago',
  },
];

export default function SearchScreen() {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(DATA);
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
      <InfoBox />
      <FlatList
        data={data}
        renderItem={({ item }) => <ProfilePill />}
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
