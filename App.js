import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ArtistsFeed from './screens/ArtistsFeed';
import ProfileScreen from './screens/ProfileScreen';
import UserDetailsProvider from './assets/contextProviders/UserDetailsProvider';
import HomeFeedProvider from './assets/contextProviders/HomeFeedProvider';
import NFTsProvider from './assets/contextProviders/NFTsProvider';
import { enableScreens } from 'react-native-screens';

import {
  ArtistNFTScreen,
  PurchaseScreen,
  NFTDetails,
  JoinCommunitiesScreen,
  CommunitiesScreen,
  IndividualCommunityScreen,
  HomeFeed,
  SearchScreen,
  OtherProfileScreen,
  JoinIndividualCommunityScreen,
  FinalJoinCommunitiesScreen,
  MessageList,
  MessagingScreen,
  Analytics
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

enableScreens(true);

const screenOptionsHeader = ({ navigation }) => ({
  headerLeft: () => <Pressable onPress={() => navigation.navigate('HOME', { screen: 'HomeScreen', params: {} })}><Text style={styles.teamName}>entourage</Text></Pressable>,
  headerRight: () => (
    <View style={styles.headerRightSearchSend}>
      <Pressable
        onPress={() => navigation.navigate('HOME', { screen: 'MessageList', params: {} })}>
        <DMIcon />
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('HOME', { screen: 'SearchScreen', params: {} })}>
        <SearchIcon style={styles.searchIcon} />
      </Pressable>
    </View>
  ),
  headerShadowVisible: false,
});

const screenOptionsHeaderWithBack = ({ navigation }) => ({
  headerLeft: () => (
    <>
      <Text style={styles.teamName}>entourage</Text>
      <Pressable style={{ marginLeft: 15, marginBottom: -10 }} onPress={() => navigation.goBack()}>
        <Text>{`< back`}</Text>
      </Pressable>
    </>
  ),
  headerRight: () => (
    <View style={styles.headerRightSearchSend}>
      <Pressable
        onPress={() => navigation.navigate('HOME', { screen: 'SearchScreen', params: {} })}>
        <SearchIcon style={styles.searchIcon} />
      </Pressable>
    </View>
  ),
  headerShadowVisible: false,
});

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
      <HomeStack.Navigator lazy={false} initialRouteName="HomeScreen" screenOptions={{ title: null }}>
        <HomeStack.Screen name="HomeScreen" component={HomeFeed} options={screenOptionsHeader} />
        <HomeStack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={screenOptionsHeaderWithBack}
        />
        <HomeStack.Screen
          name="OtherProfileScreen"
          component={OtherProfileScreen}
          options={screenOptionsHeaderWithBack}
        />
        <HomeStack.Screen
          name="MessageList"
          component={MessageList}
          options={screenOptionsHeaderWithBack}
        />
        <HomeStack.Screen
          name="MessagingScreen"
          component={MessagingScreen}
          options={screenOptionsHeaderWithBack}
        />
      </HomeStack.Navigator>

    );
  }

  function SparklesStack() {
    const SparklesStack = createStackNavigator();

    return (
      <SparklesStack.Navigator lazy={false} initialRouteName="ArtistsFeed" screenOptions={{ title: null }}>
        <SparklesStack.Screen
          name="ArtistsFeed"
          component={ArtistsFeed}
          options={screenOptionsHeader}
        />
        <SparklesStack.Screen
          name="ArtistNFTScreen"
          component={ArtistNFTScreen}
          options={screenOptionsHeaderWithBack}
        />

        <SparklesStack.Screen
          name="PurchaseScreen"
          component={PurchaseScreen}
          options={screenOptionsHeaderWithBack}
        />

        <SparklesStack.Screen
          name="NFTDetails"
          component={NFTDetails}
          options={screenOptionsHeaderWithBack}
        />

        <SparklesStack.Screen
          name="Analytics"
          component={Analytics}
          options={screenOptionsHeaderWithBack}
        />
      </SparklesStack.Navigator>
    );
  }

  function CommunitiesStack() {
    const CommunitiesStack = createStackNavigator();
    return (
      <CommunitiesStack.Navigator
        lazy={false}
        initialRouteName="CommunitiesScreen"
        screenOptions={{ title: null }}>
        <CommunitiesStack.Screen
          name="CommunitiesScreen"
          component={CommunitiesScreen}
          options={screenOptionsHeader}
        />
        <CommunitiesStack.Screen
          name="JoinCommunitiesScreen"
          component={JoinCommunitiesScreen}
          options={screenOptionsHeaderWithBack}
        />
        <CommunitiesStack.Screen
          name="CommunityScreen"
          component={PurchaseScreen}
          options={screenOptionsHeaderWithBack}
        />
        <CommunitiesStack.Screen
          name="IndividualCommunityScreen"
          component={IndividualCommunityScreen}
          options={screenOptionsHeaderWithBack}
        />
        <CommunitiesStack.Screen
          name="JoinIndividualCommunityScreen"
          component={JoinIndividualCommunityScreen}
          options={screenOptionsHeaderWithBack}
        />
        <CommunitiesStack.Screen
          name="FinalJoinCommunitiesScreen"
          component={FinalJoinCommunitiesScreen}
          options={screenOptionsHeaderWithBack}
        />
      </CommunitiesStack.Navigator>
    );
  }

  function ProfileStack() {
    const ProfileStack = createStackNavigator();
    return (
      <ProfileStack.Navigator lazy={false} initialRouteName="ProfileScreen" screenOptions={{ title: null }}>
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

  console.disableYellowBox = true;

  return (
    <NavigationContainer theme={navTheme}>
      <NFTsProvider>
        <UserDetailsProvider>
          <HomeFeedProvider>
            <Tab.Navigator
              lazy={false}
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
                  height: '10%',
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
                component={HomeStack}
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
                component={CommunitiesStack}
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
          </HomeFeedProvider>
        </UserDetailsProvider>
      </NFTsProvider>
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
