import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView
} from "react-native";

import { Image } from "expo-image";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Frame1 from "../components/Frame1";
import Innerviews from "../components/Innerviews";
import Frame2 from "../components/Frame2";
import Frame from "../components/Frame";
import Event1 from "../components/Event1";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

import EventsDetailsTop from "../components/Event1";




const Tab = createMaterialTopTabNavigator();

export default function EventsDetails() {

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}>
      <EventsDetailsTop />
      {/* <Tab.Navigator

      >
        <Tab.Screen name="Settings" component={Frame} />
        <Tab.Screen name="Innerviews" component={Innerviews} />
        <Tab.Screen name="Innerview" component={Frame1} />
        <Tab.Screen name="Hommne" component={Frame2} />

      </Tab.Navigator> */}

      <View style={[styles.cards1, styles.cardsSpaceBlock]}>
        <View style={styles.pageTitleWrapper}>
          <View>
            <Text style={[styles.title, styles.titleTypo]}>Betting</Text>
          </View>
        </View>
        <View style={[styles.cardsInner, styles.tapeNewSpaceBlock]}>
          <View style={styles.streamChannelParent}>
            <View style={styles.streamLayout}>
              <Image
                style={[styles.image146Icon, styles.image146IconPosition]}
                contentFit="cover"
                source={require("../assets/image-146.png")}
              />
              <Pressable
                style={styles.setting}
                onPress={() => Linking.openURL("https://www.google.com")}
              >
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame5.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.streamChannel1, styles.streamLayout]}>
              <Image
                style={[styles.image146Icon1, styles.image146IconPosition]}
                contentFit="cover"
                source={require("../assets/image-146.png")}
              />
              <View style={styles.setting}>
                <Image
                  style={styles.frameIcon}
                  contentFit="cover"
                  source={require("../assets/frame6.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )



};





const styles = StyleSheet.create({
  eventToptabs: {
    width: "100%",
    marginTop: 40
  },
  topTabBarStyle: {
    alignSelf: "stretch",
    height: 48,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 0,
    minHeight: 48,
    zIndex: 1,
  },
  cardsFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  cardsSpaceBlock: {
    padding: Padding.p_base,

    backgroundColor: Color.darkUppercut950,
  },
  titleTypo: {
    textAlign: "center",

    letterSpacing: -1,
    fontSize: FontSize.appEnglishHeadingH6_size,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  tapeNewSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  fightersPosition: {
    left: "50%",
    top: "50%",
    marginTop: 33,
    position: "absolute",
    alignItems: "center",
  },
  moreIconSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  nTypo: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  rightFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  theTypo: {
    display: "flex",
    height: 14,
    lineHeight: 24,
    letterSpacing: -0.6,
    fontSize: FontSize.appEnglishBodyLarge_size,
    color: Color.veryLightJAB,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
    alignItems: "center",
    flex: 1,
  },
  yrs1Layout: {
    lineHeight: 14,
    letterSpacing: -0.4,
    fontSize: FontSize.appEnglishBodySmall_size,
    color: Color.goldCross400,
  },
  yrsTypo: {
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "left",
  },
  ibfContainerTypo: {
    width: 128,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  image146IconPosition: {
    zIndex: 0,
    height: 46,
    width: 103,
    marginTop: -22.85,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  streamLayout: {
    height: 86,
    backgroundColor: Color.redHook,
    borderRadius: 4,
    flex: 1,
  },
  title: {
    color: Color.lightJAB,
  },
  pageTitleWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  image146Icon: {
    marginLeft: -51.15,
  },
  frameIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  setting: {
    borderStyle: "solid",
    borderColor: Color.redHook,
    borderWidth: 0.7,
    padding: 8,
    zIndex: 1,
    borderRadius: 4,
    right: 0,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  image146Icon1: {
    marginLeft: -50.65,
  },
  streamChannel1: {
    marginLeft: 16,
  },
  streamChannelParent: {
    flexDirection: "row",
    flex: 1,
  },
  cardsInner: {
    flexDirection: "row",
  },
  cards1: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  upcomingCardMobileParent: {
    backgroundColor: Color.colorBlack,
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  eventsdetails: {

    paddingTop: Padding.p_21xl,
    alignItems: "center",


    backgroundColor: Color.darkUppercut950,
  },
});

