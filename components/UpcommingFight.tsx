import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";


export type UpcommingFightType = {
  fighter1Name?: string;
  fighter2Name?: string;
  result2?: string;
  underCard?: boolean;
  past?: boolean;
  liveOn?: boolean;
  liveTag?: boolean;
  upcoming?: boolean;
  fullWidth?: boolean;

  /** Action props */
  onUpcomingCardMobilePress?: () => void;
};

const UpcommingFight = ({
  fighter1Name = "BUTAEV",
  fighter2Name = "FAZLIDDIN",
  result2 = "10-20-30",
  underCard = false,
  past = false,
  liveOn = false,
  liveTag = false,
  upcoming = false,
  fullWidth=false,
  onUpcomingCardMobilePress,
}: UpcommingFightType) => {
  return (
    <TouchableOpacity style={[styles.property1live,{width:fullWidth?"95%":300}]} onPress={onUpcomingCardMobilePress}>
      <View style={styles.ctaAddToCalendar}>
        <View style={styles.frame2888337663}>
          <Text style={styles.location}>
            🏆 Super Lightweight Championship - 10 Rounds
          </Text>
        </View>
        <View style={styles.live}>
          <Text style={[styles.location1, styles.locationTypo]}>Live</Text>
          <Image
            style={[styles.dotIcon, styles.dotIconLayout]}
            contentFit="cover"
            source={require("../assets/dot13.png")}
          />
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
        <View style={styles.frameGroupFlexBox}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-10000024374.png")}
            />
            <View style={styles.fighter1NameWrapper}>
              <Text style={styles.fighter1Name}>10-20-30</Text>
            </View>
          </View>
          <View style={styles.liveParent}>
            {liveTag && (
              <View style={styles.live1}>
                <Image
                  style={styles.dotIconLayout}
                  contentFit="cover"
                  source={require("../assets/dot3.png")}
                />
                <Text style={[styles.location2, styles.locationTypo]}>
                  Live
                </Text>
              </View>
            )}
            {upcoming && (
              <View style={styles.live2}>
                <Image
                  style={styles.dotIconLayout}
                  contentFit="cover"
                  source={require("../assets/dot3.png")}
                />
                <Text style={[styles.location2, styles.locationTypo]}>
                  Upcoming
                </Text>
              </View>
            )}
            {past && (
              <View style={styles.live2}>
                <Image
                  style={styles.dotIconLayout}
                  contentFit="cover"
                  source={require("../assets/dot3.png")}
                />
                <Text style={[styles.location2, styles.locationTypo]}>
                  Past event
                </Text>
              </View>
            )}
            <View style={styles.fighter1NameParent}>
              <Text style={[styles.fighter1Name1, styles.nameTypo]}>
                {fighter1Name}
              </Text>
              <Text style={[styles.vs, styles.vsTypo]}>vs</Text>
            </View>
            <Text style={[styles.fighter2Name, styles.nameTypo]}>
              {fighter2Name}
            </Text>
          </View>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-10000024362.png")}
            />
            <View style={styles.fighter1NameContainer}>
              <Text style={styles.fighter1Name}>{result2}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame28883376631, styles.frameParentSpaceBlock]}>
          <View style={styles.frameContainer}>
            <Text style={[styles.location5, styles.dateTypo]}>
              WBO World Heavyweight championship
            </Text>
            <Text style={[styles.location6, styles.pstTypo]}>
              World boxing center, Riyadh, KSA
            </Text>
            <View style={styles.time}>
              <Text style={[styles.pst, styles.pstTypo]}>23:00 PST</Text>
              <Text style={[styles.gmt, styles.pstTypo]}>07:00 GMT</Text>
            </View>
          </View>
          {liveOn && (
            <View style={styles.live4}>
              <View style={styles.watchOnLiveSmall}>
                <View style={[styles.watchOn, styles.watchOnPosition]}>
                  <Text style={[styles.date, styles.dateTypo]}>Watch on</Text>
                </View>
                <View style={styles.logo}>
                  <Image
                    style={[styles.logoIcon, styles.logoIconLayout]}
                    contentFit="cover"
                    source={require("../assets/logo4.png")}
                  />
                  <Image
                    style={[styles.image165Icon, styles.watchOnPosition]}
                    contentFit="cover"
                    source={require("../assets/image-1652.png")}
                  />
                  <Image
                    style={[styles.logoIcon1, styles.logoIconLayout]}
                    contentFit="cover"
                    source={require("../assets/logo5.png")}
                  />
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={[styles.frameParent1, styles.frameParentSpaceBlock]}>
        <View style={styles.fiRrScreenParent}>
          <Image
            style={styles.fiRrScreenIcon}
            contentFit="cover"
            source={require("../assets/firrscreen1.png")}
          />
          <Text style={[styles.historyofboxing2, styles.dateTypo]}>
            Fight Details
          </Text>
        </View>
        <View style={styles.logoParent}>
          <Image
            style={styles.logoIcon2}
            contentFit="cover"
            source={require("../assets/logo6.png")}
          />
          <Image
            style={styles.logoIcon3}
            contentFit="cover"
            source={require("../assets/logo6.png")}
          />
          <Image
            style={styles.logoIcon3}
            contentFit="cover"
            source={require("../assets/logo6.png")}
          />
        </View>
      </View>
      {underCard && (
        <View style={[styles.underCard, styles.frameParentSpaceBlock]}>
          <View style={[styles.underCardParent, styles.frameGroupFlexBox]}>
            <Text style={styles.fighter1Name}>Under card</Text>
            <Image
              style={styles.fiRrAngleSmallDownIcon}
              contentFit="cover"
              source={require("../assets/firranglesmalldown1.png")}
            />
          </View>
          <View style={styles.underCardInner}>
            <View style={styles.frameParent2}>
              <View style={styles.frameParent3}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/frame-10000024375.png")}
                />
                <Text style={[styles.fighter1Name3, styles.dateTypo]}>
                  Regis Prograis
                </Text>
              </View>
              <View style={styles.locationGroup}>
                <Text style={styles.location7}>
                  World boxing center, Riyadh, KSA
                </Text>
                <View style={styles.time1}>
                  <Text style={[styles.pst1, styles.dateTypo]}>23:00 PST</Text>
                  <Text style={[styles.gmt1, styles.dateTypo]}>07:00 GMT</Text>
                </View>
              </View>
              <View style={styles.frameParent4}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/frame-10000024375.png")}
                />
                <Text style={[styles.fighter1Name3, styles.dateTypo]}>
                  Devin Haney
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  locationTypo: {
    textTransform: "capitalize",

    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
  },
  dotIconLayout: {
    height: 8,
    width: 8,
  },
  frameParentSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  nameTypo: {
    display: "flex",


    fontSize: FontSize.appEnglishBodyXLarge_size,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textAlign: "center",
    textTransform: "uppercase",

    alignItems: "center",
    justifyContent: "center",
  },
  vsTypo: {
    fontSize: FontSize.appEnglishBodyMedium_size,
    textAlign: "left",
  },
  dateTypo: {
    fontFamily: FontFamily.tekoBold,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  pstTypo: {

    letterSpacing: -0.6,
    fontSize: FontSize.appEnglishBodyLarge_size,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  watchOnPosition: {
    left: 0,
    position: "absolute",
  },
  logoIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "16.56%",
    right: "16.88%",
    width: "66.56%",
    height: "33.44%",
    position: "absolute",
    overflow: "hidden",
  },
  frameGroupFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  location: {
    textAlign: "center",
    color: Color.veryLightJAB,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    textTransform: "uppercase",
  },
  frame2888337663: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_9xs,
    height: 20,
    backgroundColor: Color.redHook,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  location1: {
    color: Color.redHook,
  },
  dotIcon: {
    marginLeft: 4,
  },
  live: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  ctaAddToCalendar: {
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameChild: {
    overflow: "hidden",
    height: 64,
    width: 64,
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
  location2: {
    marginLeft: 4,
    color: Color.veryLightJAB,
  },
  live1: {
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  live2: {
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


    textAlign: "left",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontSize: FontSize.appEnglishBodyMedium_size,
    fontWeight: "500",
    color: Color.redHook,
    textTransform: "uppercase",
  },
  fighter1NameParent: {
    width: 86,
    alignItems: "flex-end",

    flexDirection: "row",
  },
  fighter2Name: {
    marginTop: 8,
    color: Color.redHook,
    alignSelf: "stretch",
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
  location5: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    fontFamily: FontFamily.tekoBold,
    textAlign: "left",
    display: "none",
    color: Color.veryLightJAB,
  },
  location6: {
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
  date: {

    textAlign: "left",
    fontSize: FontSize.appEnglishBodyMedium_size,
    color: Color.veryLightJAB,
  },
  watchOn: {
    top: "50%",
    padding: Padding.p_3xs,
    marginTop: -16,
    backgroundColor: Color.redHook,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  logoIcon: {
    top: "33.44%",
    bottom: "33.13%",
    zIndex: 0,
  },
  image165Icon: {
    top: 48,
    width: 32,
    zIndex: 1,
    height: 32,
  },
  logoIcon1: {
    top: "233.44%",
    bottom: "-166.88%",
    zIndex: 2,
  },
  logo: {
    height: "100%",
    width: "32.65%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "67.35%",
    backgroundColor: Color.veryLightJAB,
    padding: 7,
    position: "absolute",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  watchOnLiveSmall: {
    width: 98,
    height: 32,
  },
  live4: {
    paddingTop: Padding.p_5xs,
    display: "none",
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
  historyofboxing2: {

    marginLeft: 8,
    fontSize: FontSize.appEnglishBodyLarge_size,
    fontFamily: FontFamily.tekoBold,
    color: Color.redHook,
    textAlign: "center",
  },
  fiRrScreenParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  logoIcon2: {
    height: 32,
    width: 64,
  },
  logoIcon3: {
    marginLeft: 24,
    height: 32,
    width: 64,
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

    marginTop: -16,
    fontSize: FontSize.appEnglishBodyLarge_size,
    fontFamily: FontFamily.tekoBold,
    textAlign: "center",
    color: Color.veryLightJAB,
    alignSelf: "stretch",
  },
  frameParent3: {
    width: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  location7: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.tekoRegular,
    color: Color.goldCross400,
    textAlign: "center",
    textTransform: "uppercase",
    alignSelf: "stretch",
  },
  pst1: {
    textAlign: "left",
    fontSize: FontSize.appEnglishBodySmall_size,
    fontFamily: FontFamily.tekoBold,
    color: Color.veryLightJAB,
  },
  gmt1: {
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.appEnglishBodySmall_size,
    fontFamily: FontFamily.tekoBold,
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
  property1live: {
    borderRadius: Border.br_base,
    backgroundColor: Color.darkUppercut950,

    padding: Padding.p_base,
    justifyContent: "center",
  },
});

export default UpcommingFight;
