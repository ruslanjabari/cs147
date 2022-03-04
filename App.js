import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ArtistsFeed from './screens/ArtistsFeed';
import HomeFeed from './screens/HomeFeed';
import ProfileScreen from './screens/ProfileScreen';
import CommunitiesScreen from './screens/CommunitiesScreen';
import ArtistNFTs from './screens/ArtistNFTs'
import NFTDetails from './screens/NFTDetails';
import PurchaseScreen from './screens/PurchaseScreen';
import SearchIcon from './assets/icons/SearchIconFilled.svg';
import DMIcon from './assets/icons/DMIconFilled.svg';

import HomeIconSelected from './assets/icons/HomeIconSelected.svg';
import HomeIconUnselected from './assets/icons/HomeIconUnselected.svg';


import ProfileIconUnselected from './assets/icons/ProfileIconUnselected.svg';
import ProfileIconSelected from './assets/icons/ProfileIconSelected.svg';


import SparklesIconSelected from './assets/icons/SparklesIconSelected.svg';
import SparklesIconUnselected from './assets/icons/SparklesIconUnselected.svg';

import ChatIconSelected from './assets/icons/ChatIconSelected.svg';
import ChatIconUnselected from './assets/icons/ChatIconUnselected.svg';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Dosis_200ExtraLight,
  Dosis_300Light,
  Dosis_400Regular,
  Dosis_500Medium,
  Dosis_600SemiBold,
  Dosis_700Bold,
  Dosis_800ExtraBold
} from '@expo-google-fonts/dosis'

import {
  Righteous_400Regular
} from '@expo-google-fonts/righteous'


const screenOptionsHeader = {
  headerLeft: () => (<Text style={styles.teamName}>entourage</Text>), headerRight: () => (
    <View style={styles.headerRightSearchSend}>
      <SearchIcon style={styles.searchIcon} />
      <DMIcon />
    </View>
  ),
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold,
    Righteous_400Regular
  });
  if (!fontsLoaded) return <AppLoading />;

  const Tab = createBottomTabNavigator();

  function HomeStack() {
    const HomeStack = createStackNavigator();

    return (
      <HomeStack.Navigator initialRouteName="HomeFeed" screenOptions={{ title: null }} >
        <HomeStack.Screen name="HomeFeed" component={HomeFeed} options={screenOptionsHeader} />
      </HomeStack.Navigator>
    )
  }

  function SparklesStack() {
    const SparklesStack = createStackNavigator();
    return (
      <SparklesStack.Navigator initialRouteName="ArtistsFeed" screenOptions={{ title: null }} >
        <SparklesStack.Screen name="ArtistsFeed" component={ArtistsFeed} options={screenOptionsHeader} />
      </SparklesStack.Navigator>
    )
  }

  function ChatStack() {
    const ChatStack = createStackNavigator();
    return (
      <ChatStack.Navigator initialRouteName="CommunitiesScreen" screenOptions={{ title: null }} >
        <ChatStack.Screen name="CommunitiesScreen" component={CommunitiesScreen} options={screenOptionsHeader} />
      </ChatStack.Navigator>
    )
  }

  function ProfileStack() {
    const ProfileStack = createStackNavigator();
    return (
      <ProfileStack.Navigator initialRouteName="ProfileScreen" screenOptions={{ title: null }} >
        <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={screenOptionsHeader} />
      </ProfileStack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === 'Home') {
              icon = focused
                ? <HomeIconSelected />
                : <HomeIconUnselected />;
            } else if (route.name === 'Artists') {
              icon = focused ? <SparklesIconSelected /> : <SparklesIconUnselected />;
            } else if (route.name === 'Chat') {
              icon = focused ? <ChatIconSelected /> : <ChatIconUnselected />;
            } else {
              icon = focused ? <ProfileIconSelected /> : <ProfileIconUnselected />;
            }

            return icon
          },
          tabBarStyle: {
            paddingTop: 10,
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          },

        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{
          headerShown: false
        }} />

        <Tab.Screen name="Artists" component={SparklesStack} options={{
          headerShown: false
        }} />

        <Tab.Screen name="Chat" component={ChatStack} options={{
          headerShown: false
        }} />

        <Tab.Screen name="Profile" component={ProfileStack} options={{
          headerShown: false
        }} />
        {/* <Stack.Screen name="ArtistNFTs" component={ArtistNFTs} /> */}
        {/* <Stack.Screen name="NFTDetails" component={NFTDetails} /> */}
        {/* <Stack.Screen name="PurchaseScreen" component={PurchaseScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  headerRightSearchSend: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    flex: 1,
    marginRight: 10
  },
  teamName: {
    color: 'black',
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Righteous_400Regular'
  },
  searchIcon: {
    marginRight: 10,
    marginTop: 5
  }
});
