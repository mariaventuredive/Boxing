import * as React from "react";

import { StyleSheet, View, Text } from "react-native";
import HeadingVariantHeader from "../components/HeadingVariantHeader";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import UnderConstruction from "../components/UnderConstruction";

const Community = () => {
  return (
    <View style={[styles.community, styles.communityFlexBox]}>
      <View style={[styles.headParent, styles.communityFlexBox]}>
        <HeadingVariantHeader heading="Community" />
        <UnderConstruction />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  communityFlexBox: {
    justifyContent: "space-between",
    flex: 1,
  },
  title1Typo: {
    marginTop: 16,
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "stretch",
  },
  tabBarButtonsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  title1Typo1: {
    fontFamily: FontFamily.appEnglishBodySmall,
    textTransform: "uppercase",
  },
  barShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelTypo: {
    marginTop: 10,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  title: {
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textTransform: "uppercase",
    color: Color.lightJAB,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  title1: {
    fontSize: FontSize.size_41xl,
    letterSpacing: -1.8,
    lineHeight: 53,
    fontFamily: FontFamily.appEnglishBodySmall,
    textTransform: "uppercase",
    color: Color.lightJAB,
    marginTop: 16,
  },
  location: {
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    color: Color.goldCross400,
    marginTop: 16,
    fontSize: FontSize.size_base,
  },
  titleParent: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  historyofboxing2: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    letterSpacing: -0.6,
    lineHeight: 24,
    color: Color.veryLightJAB,
    display: "flex",
    height: 24,
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frame2888337652: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.veryLightJAB,
    borderWidth: 1,
    padding: Padding.p_base,
    justifyContent: "center",
    flex: 1,
  },
  frame2888337652Wrapper: {
    marginTop: 64,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_56xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  headParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  community: {
    backgroundColor: Color.darkUppercut950,
    width: "100%",
    height: 1122,
    paddingTop: Padding.p_41xl,
    alignItems: "center",
  },
});

export default Community;
