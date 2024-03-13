import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

export type FrameType = {
  style?: StyleProp<ViewStyle>;
};

const Frame = ({ style }: FrameType) => {
  return (
    <View style={[styles.cardsParent, style]}>
      <View style={[styles.cards, styles.cardsFlexBox]}>
        <View style={styles.pageTitleWrapper}>
          <View>
            <Text style={styles.title}>Fight thread</Text>
          </View>
        </View>
        <View style={[styles.frameParent, styles.buyTicket2SpaceBlock]}>
          <View style={[styles.frameGroup, styles.cardsFlexBox]}>
            <View style={styles.frameContainer}>
              <View style={styles.historyofboxing2220Parent}>
                <Text
                  style={[
                    styles.historyofboxing2220,
                    styles.myaccount311FlexBox,
                  ]}
                >
                  Mohmed ali
                </Text>
                <Text style={styles.yearsago}>Ancient Boxer</Text>
              </View>
              <View style={styles.cta}>
                <View style={[styles.likeCta, styles.likeCtaLayout]}>
                  <Text
                    style={[styles.historyofboxing228, styles.myaccount311Typo]}
                  >
                    12K
                  </Text>
                  <Image
                    style={styles.frame6Icon}
                    contentFit="cover"
                    source={require("../assets/frame-6.png")}
                  />
                </View>
              </View>
            </View>
            <Image
              style={[styles.frameChild, styles.frameChildSpaceBlock]}
              contentFit="cover"
              source={require("../assets/rectangle-30411.png")}
            />
            <View
              style={[
                styles.historyofboxing22Parent,
                styles.frameChildSpaceBlock,
              ]}
            >
              <Text style={styles.historyofboxing22}>12 Min ago</Text>
              <View style={[styles.buyTicket, styles.likeCtaLayout]}>
                <Text style={styles.historyofboxing2}>Read story</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.cardsFlexBox]}>
            <View style={styles.frameContainer}>
              <View style={styles.historyofboxing2220Parent}>
                <Text
                  style={[
                    styles.historyofboxing2220,
                    styles.myaccount311FlexBox,
                  ]}
                >
                  Mohmed ali
                </Text>
                <Text style={styles.yearsago}>Ancient Boxer</Text>
              </View>
              <View style={styles.cta}>
                <View style={[styles.likeCta, styles.likeCtaLayout]}>
                  <Text
                    style={[styles.historyofboxing228, styles.myaccount311Typo]}
                  >
                    12K
                  </Text>
                  <Image
                    style={styles.frame6Icon}
                    contentFit="cover"
                    source={require("../assets/frame-6.png")}
                  />
                </View>
              </View>
            </View>
            <View
              style={[styles.myaccount311Wrapper, styles.frameChildSpaceBlock]}
            >
              <Text
                style={[styles.myaccount311, styles.myaccount311Typo]}
                numberOfLines={2}
              >
                Rising undefeated WBA Super Middleweight World Champion David
                Morrell Jr. and trainer Andrew Council are this week's guests on
                The PBC Podcast. Morrell has plenty to say, from calling out
                David Benavidez for avoiding him to promising to make Sena
                Agbeko eat his words when the two clash in a Premier Boxing
                Champions headliner Saturday, December 16, live on SHOWTIME
              </Text>
            </View>
            <View
              style={[
                styles.historyofboxing22Parent,
                styles.frameChildSpaceBlock,
              ]}
            >
              <Text style={styles.historyofboxing22}>12 Min ago</Text>
              <View style={[styles.buyTicket, styles.likeCtaLayout]}>
                <Text style={styles.historyofboxing2}>Read story</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.buyTicket2, styles.buyTicket2SpaceBlock]}>
          <Text style={styles.historyofboxing23}>Show more</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsFlexBox: {
    padding: Padding.p_base,
    alignItems: "center",
    justifyContent: "center",
  },
  buyTicket2SpaceBlock: {
    marginTop: 24,
    alignItems: "center",
  },
  myaccount311FlexBox: {
    textAlign: "left",
    color: Color.veryLightJAB,
    lineHeight: 32,
  },
  likeCtaLayout: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  myaccount311Typo: {
    textTransform: "lowercase",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
  },
  frameChildSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.appEnglishHeadingH6_size,
    letterSpacing: -1,
    lineHeight: 32,
    color: Color.lightJAB,
    textAlign: "center",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  pageTitleWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  historyofboxing2220: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 1,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
    color: Color.veryLightJAB,
  },
  yearsago: {
    marginTop: -8,
    color: Color.goldCross400,
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    textTransform: "capitalize",
    lineHeight: 24,
    fontSize: FontSize.appEnglishBodySmall_size,
    textAlign: "left",
    fontWeight: "500",
  },
  historyofboxing2220Parent: {
    justifyContent: "center",
  },
  historyofboxing228: {
    color: Color.darkUppercut950,
    opacity: 0.5,
    fontSize: FontSize.appEnglishBodySmall_size,
    textTransform: "lowercase",
    textAlign: "center",
  },
  frame6Icon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    overflow: "hidden",
  },
  likeCta: {
    backgroundColor: Color.veryLightJAB,
    padding: Padding.p_5xs,
  },
  cta: {
    flexDirection: "row",
  },
  frameContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild: {
    maxWidth: "100%",
    height: 272,
    width: "100%",
    overflow: "hidden",
    borderRadius: Border.br_base,
  },
  historyofboxing22: {
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtraBold,
    color: Color.goldCross400,
    textTransform: "capitalize",
    fontSize: FontSize.appEnglishBodySmall_size,
    lineHeight: 32,
    textAlign: "center",
  },
  historyofboxing2: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    color: Color.goldCross400,
    lineHeight: 32,
    textAlign: "center",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  buyTicket: {
    alignItems: "center",
    justifyContent: "center",
  },
  historyofboxing22Parent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    backgroundColor: Color.blueOverhand950,
    borderRadius: Border.br_base,
    alignSelf: "stretch",
  },
  myaccount311: {
    fontSize: FontSize.size_sm,
    height: 64,
    overflow: "hidden",
    textAlign: "left",
    color: Color.veryLightJAB,
    lineHeight: 32,
    flex: 1,
  },
  myaccount311Wrapper: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent: {
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch",
  },
  historyofboxing23: {
    fontSize: FontSize.appEnglishBodyMedium_size,
    lineHeight: 24,
    color: Color.veryLightJAB,
    textAlign: "center",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  buyTicket2: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.redHook,
    height: 48,
    padding: Padding.p_xs,
    justifyContent: "center",
    flexDirection: "row",
  },
  cards: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkUppercut950,
    height: 816,
    flex: 1,
  },
  cardsParent: {
    paddingBottom: Padding.p_77xl,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Frame;
