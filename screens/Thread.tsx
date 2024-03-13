import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, Border, FontFamily } from "../GlobalStyles";

const Thread = () => {
  return (
    <View style={[styles.thread, styles.cardsBg]}>
      <View style={styles.threadInner} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardsBg: {
    backgroundColor: Color.darkUppercut950,
    flex: 1,
  },
  cardsFlexBox: {
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
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
  threadInner: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  thread: {
    borderRadius: Border.br_21xl,
    height: 1330,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default Thread;
