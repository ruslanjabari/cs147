import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ArtistsFeed from './screens/ArtistsFeed';
import HomeFeed from './screens/HomeFeed';
import ProfileScreen from './screens/ProfileScreen';
import {
  ArtistNFTScreen,
  PurchaseScreen,
  NFTDetails,
  SearchScreen,
  JoinCommunitiesScreen,
  CommunitiesScreen,
  IndividualCommunityScreen,
} from './screens';

import {
  SearchIcon,
  DMIcon,
  HomeIconSelected,
  HomeIconUnselected,
  ProfileIconUnselected,
  ProfileIconSelected,
  SparklesIconSelected,
  SparklesIconUnselected,
  ChatIconSelected,
  ChatIconUnselected,
} from './assets/icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Dosis_200ExtraLight,
  Dosis_300Light,
  Dosis_400Regular,
  Dosis_500Medium,
  Dosis_600SemiBold,
  Dosis_700Bold,
  Dosis_800ExtraBold,
} from '@expo-google-fonts/dosis';

import { Righteous_400Regular } from '@expo-google-fonts/righteous';

const screenOptionsHeader = {
  headerLeft: () => <Text style={styles.teamName}>entourage</Text>,
  headerRight: () => (
    <View style={styles.headerRightSearchSend}>
      <SearchIcon style={styles.searchIcon} />
      <DMIcon />
    </View>
  ),
  headerShadowVisible: false,
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Dosis_200ExtraLight,
    Dosis_300Light,
    Dosis_400Regular,
    Dosis_500Medium,
    Dosis_600SemiBold,
    Dosis_700Bold,
    Dosis_800ExtraBold,
    Righteous_400Regular,
  });
  if (!fontsLoaded) return <AppLoading />;

  const Tab = createBottomTabNavigator();

  const navTheme = DefaultTheme;
  navTheme.colors.background = 'white';

  function HomeStack() {
    const HomeStack = createStackNavigator();

    return (
      <HomeStack.Navigator initialRouteName="HomeFeed" screenOptions={{ title: null }}>
        <HomeStack.Screen name="HomeFeed" component={HomeFeed} options={screenOptionsHeader} />
      </HomeStack.Navigator>
    );
  }

  function SparklesStack() {
    const SparklesStack = createStackNavigator();
    return (
      <SparklesStack.Navigator initialRouteName="ArtistsFeed" screenOptions={{ title: null }}>
        <SparklesStack.Screen
          name="ArtistsFeed"
          component={ArtistsFeed}
          options={screenOptionsHeader}
        />
        <SparklesStack.Screen
          name="ArtistNFTScreen"
          component={ArtistNFTScreen}
          options={screenOptionsHeader}
        />

        <SparklesStack.Screen
          name="PurchaseScreen"
          component={PurchaseScreen}
          options={screenOptionsHeader}
        />

        <SparklesStack.Screen
          name="NFTDetails"
          component={NFTDetails}
          options={screenOptionsHeader}
        />
      </SparklesStack.Navigator>
    );
  }

  function ChatStack() {
    const ChatStack = createStackNavigator();
    return (
      <ChatStack.Navigator initialRouteName="CommunitiesScreen" screenOptions={{ title: null }}>
        <ChatStack.Screen
          name="CommunitiesScreen"
          component={IndividualCommunityScreen}
          options={screenOptionsHeader}
        />
      </ChatStack.Navigator>
    );
  }

  function ProfileStack() {
    const ProfileStack = createStackNavigator();
    return (
      <ProfileStack.Navigator initialRouteName="ProfileScreen" screenOptions={{ title: null }}>
        <ProfileStack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={screenOptionsHeader}
        />
      </ProfileStack.Navigator>
    );
  }

  const TabBarLabelStyleActive = {
    marginTop: 17,
    fontSize: 12,
    color: 'white',
    fontFamily: 'Dosis_700Bold',
  };

  const TabBarLabelStyleInactive = {
    marginTop: 17,
    fontSize: 12,
    color: '#C4C4C4',
    fontFamily: 'Dosis_700Bold',
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;

            if (route.name === 'HOME') {
              icon = focused ? <HomeIconSelected /> : <HomeIconUnselected />;
            } else if (route.name === 'EXPLORE') {
              icon = focused ? <SparklesIconSelected /> : <SparklesIconUnselected />;
            } else if (route.name === 'COMMUNITIES') {
              icon = focused ? <ChatIconSelected /> : <ChatIconUnselected />;
            } else {
              icon = focused ? <ProfileIconSelected /> : <ProfileIconUnselected />;
            }

            return icon;
          },
          tabBarStyle: {
            paddingTop: 25,
            height: 88,
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarLabel: ({ focused }) => {
            let label;
            switch (route.name) {
              case 'HOME':
                return (label = focused ? (
                  <Text style={TabBarLabelStyleActive}>HOME</Text>
                ) : (
                  <Text style={TabBarLabelStyleInactive}>HOME</Text>
                ));
              case 'EXPLORE':
                return (label = focused ? (
                  <Text style={TabBarLabelStyleActive}>EXPLORE</Text>
                ) : (
                  <Text style={TabBarLabelStyleInactive}>EXPLORE</Text>
                ));
              case 'COMMUNITIES':
                return (label = focused ? (
                  <Text style={TabBarLabelStyleActive}>COMMUNITIES</Text>
                ) : (
                  <Text style={TabBarLabelStyleInactive}>COMMUNITIES</Text>
                ));
              case 'PROFILE':
                return (label = focused ? (
                  <Text style={TabBarLabelStyleActive}>PROFILE</Text>
                ) : (
                  <Text style={TabBarLabelStyleInactive}>PROFILE</Text>
                ));
            }
            return label;
          },
        })}>
        <Tab.Screen
          name="HOME"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="EXPLORE"
          component={SparklesStack}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="COMMUNITIES"
          component={ChatStack}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="PROFILE"
          component={ProfileStack}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="ArtistNFTs" component={ArtistNFTs} /> */}
        {/* <Stack.Screen name="NFTDetails" component={NFTDetails} /> */}
        {/* <Stack.Screen name="PurchaseScreen" component={PurchaseScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerRightSearchSend: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    marginRight: 10,
  },
  teamName: {
    color: 'black',
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Righteous_400Regular',
  },
  searchIcon: {
    marginRight: 10,
    marginTop: 5,
  },
});
