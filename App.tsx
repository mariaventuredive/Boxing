const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Main from "./screens/Main";

import SplashBoxing from "./screens/SplashBoxing";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Community from "./screens/Community";
import News from "./screens/News";
import EventsDetails from "./screens/EventsDetails";
import Livestream from "./screens/Livestream";
import Fightpoll from "./screens/Fightpoll";
import Thread from "./screens/Thread";



import InActiveTab from "./components/InActiveTab";



import Onboarding from "./screens/Onboarding";

import LocofyWelcome from "./screens/LocofyWelcome";
import ChooseLanguage from "./screens/ChooseLanguage";

import Fights from "./screens/Fights";

import MoreTab from "./screens/MoreTab";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <InActiveTab name={'Home'} />,
    <InActiveTab name={'Fights'} />,
    <InActiveTab name={'Community'} />,
    <InActiveTab name={'News'} />,
    <InActiveTab name={'More'} />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <InActiveTab name={'Home'} active />,
    <InActiveTab name={'Fights'} active />,
    <InActiveTab name={'Community'} active />,
    <InActiveTab name={'News'} active />,
    <InActiveTab name={'More'} active />,

  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#000",
              shadowColor: "#1f2d39",
              shadowOffset: {
                width: 0,
                height: -1,
              },
              shadowRadius: 0,
              elevation: 0,
              shadowOpacity: 1,
              height: 90,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 0,
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Fights"
        component={Fights}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MoreTab"
        component={MoreTab}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    "Manrope-ExtraBold": require("./assets/fonts/Manrope-ExtraBold.ttf"),
    "Teko-Regular": require("./assets/fonts/Teko-Regular.ttf"),
    "Teko-Medium": require("./assets/fonts/Teko-Medium.ttf"),
    "Teko-SemiBold": require("./assets/fonts/Teko-SemiBold.ttf"),
    "Teko-Bold": require("./assets/fonts/Teko-Bold.ttf"),
    "Changa-Bold": require("./assets/fonts/Changa-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="ChooseLanguage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
       
            <Stack.Screen
              name="SplashBoxing"
              component={SplashBoxing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventsDetails"
              component={EventsDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Livestream"
              component={Livestream}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Fightpoll"
              component={Fightpoll}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Thread"
              component={Thread}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocofyWelcome"
              component={LocofyWelcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChooseLanguage"
              component={ChooseLanguage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashBoxing />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
