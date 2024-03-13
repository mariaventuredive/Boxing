import * as React from "react";
import { Text, StyleSheet, View,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import WatchOnLiveSmall from "./WatchOnLiveSmall";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";


const UpcomingCardMobile = (onUpcomingCardMobilePress) => {
  return (
    <TouchableOpacity style={styles.upcomingCardMobile}>
      <View style={styles.ctaAddToCalendar}>
        <View style={styles.frame2888337663}>
          <Text style={[styles.location, styles.locationTypo]}>
            🏆 Super Lightweight Championship - 10 Rounds
          </Text>
        </View>
        <Image
          style={styles.fiRrCalendarIcon}
          contentFit="cover"
          source={require("../assets/firrcalendar.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
        <View style={styles.frameGroupFlexBox}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-10000024373.png")}
            />
            <View style={styles.fighter1NameWrapper}>
              <Text style={styles.fighter1Name}>10-20-30</Text>
            </View>
          </View>
          <View style={styles.liveParent}>
            <View style={styles.live}>
              <Image
                style={styles.dotIcon}
                contentFit="cover"
                source={require("../assets/dot.png")}
              />
              <Text style={[styles.location1, styles.locationTypo]}>Live</Text>
            </View>
            <View style={styles.live1}>
              <Image
                style={styles.dotIcon}
                contentFit="cover"
                source={require("../assets/dot1.png")}
              />
              <Text style={[styles.location1, styles.locationTypo]}>
                Upcoming
              </Text>
            </View>
            <View style={styles.live2}>
              <Image
                style={styles.dotIcon}
                contentFit="cover"
                source={require("../assets/dot2.png")}
              />
              <Text style={[styles.location1, styles.locationTypo]}>
                Past event
              </Text>
            </View>
            <View style={styles.fighter1NameParent}>
              <Text style={[styles.fighter1Name1, styles.nameTypo]}>Fury</Text>
              <Text style={[styles.vs, styles.vsTypo]}>vs</Text>
            </View>
            <Text style={[styles.fighter2Name, styles.nameTypo]}>
              FAZLIDDIN
            </Text>
            <View style={styles.upcoming}>
              <Text style={[styles.historyofboxing2, styles.location6Typo]}>
                <Text style={styles.countingDown}>Counting down :</Text>
                <Text style={styles.text}> 23:12</Text>
              </Text>
            </View>
          </View>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-10000024361.png")}
            />
            <View style={styles.fighter1NameContainer}>
              <Text style={styles.fighter1Name}>10-20-30</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame28883376631, styles.frameParentSpaceBlock]}>
          <View style={styles.frameContainer}>
            <Text style={[styles.location4, styles.location4Typo]}>
              WBO World Heavyweight championship
            </Text>
            <Text style={[styles.location5, styles.pstTypo]}>
              World boxing center, Riyadh, KSA
            </Text>
            <View style={styles.time}>
              <Text style={[styles.pst, styles.pstTypo]}>23:00 PST</Text>
              <Text style={[styles.gmt, styles.pstTypo]}>07:00 GMT</Text>
            </View>
          </View>
          <View style={styles.live3}>
            <WatchOnLiveSmall
              logo={require("../assets/logo.png")}
              image165={require("../assets/image-165.png")}
              logo1={require("../assets/logo.png")}
              propFontWeight="500"
              propFontFamily="Teko-Medium"
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameParent1, styles.frameParentSpaceBlock]}>
        <View style={styles.fiRrScreenParent}>
          <Image
            style={styles.fiRrScreenIcon}
            contentFit="cover"
            source={require("../assets/firrscreen.png")}
          />
          <Text style={[styles.historyofboxing21, styles.location4Typo]}>
            Fight Details
          </Text>
        </View>
        <View style={styles.logoParent}>
          <Image
            style={styles.logoIconLayout}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
          <Image
            style={[styles.logoIcon1, styles.logoIconLayout]}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
          <Image
            style={[styles.logoIcon1, styles.logoIconLayout]}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
        </View>
      </View>
      <View style={[styles.underCard, styles.frameParentSpaceBlock]}>
        <View style={[styles.underCardParent, styles.frameGroupFlexBox]}>
          <Text style={styles.fighter1Name}>Under card</Text>
          <Image
            style={styles.fiRrAngleSmallDownIcon}
            contentFit="cover"
            source={require("../assets/firranglesmalldown.png")}
          />
        </View>
        <View style={styles.underCardInner}>
          <View style={styles.frameParent2}>
            <View style={styles.frameParent3}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-10000024371.png")}
              />
              <Text style={[styles.fighter1Name3, styles.location4Typo]}>
                Regis Prograis
              </Text>
            </View>
            <View style={styles.locationGroup}>
              <Text style={[styles.location6, styles.location6Typo]}>
                World boxing center, Riyadh, KSA
              </Text>
              <View style={styles.time1}>
                <Text style={[styles.pst1, styles.vsTypo]}>23:00 PST</Text>
                <Text style={[styles.gmt1, styles.vsTypo]}>07:00 GMT</Text>
              </View>
            </View>
            <View style={styles.frameParent4}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-10000024372.png")}
              />
              <Text style={[styles.fighter1Name3, styles.location4Typo]}>
                Devin Haney
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  locationTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    textAlign: "center",
    color: Color.veryLightJAB,
  },
  frameParentSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  nameTypo: {
    display: "flex",

    letterSpacing: -1,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    height: 20,
    textAlign: "center",
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "center",
  },
  vsTypo: {
    fontFamily: FontFamily.appEnglishBodySmall,
   // textAlign: "left",
    fontWeight: "500",
    textTransform: "uppercase",
  },
  location6Typo: {
    fontFamily: FontFamily.tekoRegular,
    textAlign: "center",
    textTransform: "uppercase",
  },
  location4Typo: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  pstTypo: {


    fontSize: FontSize.appEnglishBodyLarge_size,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  logoIconLayout: {
    height: 32,
    width: 64,
  },
  frameGroupFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  location: {
    textAlign: "center",
    color: Color.veryLightJAB,
    textTransform: "uppercase",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
  },
  frame2888337663: {
    backgroundColor: Color.redHook,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  fiRrCalendarIcon: {
    width: 20,
    overflow: "hidden",
    height: 20,
    marginLeft: 16,
  },
  ctaAddToCalendar: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameChild: {
    height: 64,
    width: 64,
    overflow: "hidden",
    borderRadius: Border.br_5xs,
  },
  fighter1Name: {

    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
    fontSize: FontSize.appEnglishBodySmall_size,
    textAlign: "center",
    color: Color.veryLightJAB,
  },
  fighter1NameWrapper: {
    marginTop: 8,
  },
  frameContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dotIcon: {
    width: 8,
    height: 8,
  },
  location1: {

    textTransform: "capitalize",
    marginLeft: 4,
    textAlign: "center",
    color: Color.veryLightJAB,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
  },
  live: {
    zIndex: 0,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  live1: {
    zIndex: 1,
    display: "none",
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  live2: {
    zIndex: 2,
    display: "none",
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  fighter1Name1: {
    color: Color.goldCross400,
    flex: 1,
  },
  vs: {
    fontSize: FontSize.appEnglishBodyMedium_size,
 
    textAlign: "left",
    color: Color.redHook,
  },
  fighter1NameParent: {
    width: 86,
    // alignItems: "flex-end",
    zIndex: 3,
    // marginTop: 8,
    flexDirection: "row",
  },
  fighter2Name: {
    zIndex: 4,
    color: Color.redHook,
    marginTop: 8,
    alignSelf: "stretch",
  },
  countingDown: {
    color: Color.blueOverhand950,
  },
  text: {
    color: Color.redHook,
  },
  historyofboxing2: {

    fontSize: FontSize.appEnglishBodySmall_size,
  },
  upcoming: {
    position: "absolute",
    marginLeft: -48.5,
    top: 65,
    left: "50%",
    backgroundColor: Color.veryLightJAB,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    zIndex: 5,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  liveParent: {
    height: 64,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fighter1NameContainer: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  location4: {
    textAlign: "left",
    display: "none",
    color: Color.veryLightJAB,
  },
  location5: {
    color: Color.goldCross400,
    textAlign: "center",
  },
  pst: {
    textAlign: "left",
    color: Color.veryLightJAB,
  },
  gmt: {
    marginLeft: 17,
    textAlign: "left",
    color: Color.veryLightJAB,
  },
  time: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  live3: {
    paddingTop: Padding.p_5xs,
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  frame28883376631: {
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent: {
    justifyContent: "center",
  },
  fiRrScreenIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  historyofboxing21: {

    marginLeft: 8,
    color: Color.redHook,
    textAlign: "center",
  },
  fiRrScreenParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  logoIcon1: {
    marginLeft: 24,
  },
  logoParent: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  frameParent1: {
    display: "none",
  },
  fiRrAngleSmallDownIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  underCardParent: {
    alignItems: "center",
  },
  fighter1Name3: {

    // marginTop: -16,
    textAlign: "center",
    color: Color.veryLightJAB,
    alignSelf: "stretch",
  },
  frameParent3: {
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  location6: {
    fontSize: FontSize.size_base,
    color: Color.goldCross400,
    alignSelf: "stretch",
  },
  pst1: {
    textAlign: "left",
    fontSize: FontSize.appEnglishBodySmall_size,
    color: Color.veryLightJAB,
  },
  gmt1: {
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.appEnglishBodySmall_size,
    color: Color.veryLightJAB,
  },
  time1: {
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  locationGroup: {
    marginLeft: 8,
    height: 64,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent4: {
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent2: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  underCardInner: {
    display: "none",
    marginTop: 8,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  underCard: {
    backgroundColor: Color.blueOverhand950,
    padding: Padding.p_5xs,
    display: "none",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  upcomingCardMobile: {
    borderRadius: Border.br_base,
    backgroundColor: Color.darkUppercut950,
    width: 294,
    padding: Padding.p_base,
    marginLeft: 16,
    justifyContent: "center",
  },
});

export default UpcomingCardMobile;
