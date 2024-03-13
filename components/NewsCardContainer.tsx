import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

export type NewsCardContainerType = {
  title?: string;
  timePosted?: string;
};

const NewsCardContainer = ({ title, timePosted }: NewsCardContainerType) => {
  return (
    <View style={styles.text1}>
      <View style={styles.tag}>
        <Text style={styles.lightWeight}>Light Weight</Text>
      </View>
      <Text style={[styles.title, styles.titleClr]}>{title}</Text>
      <View style={styles.timePostedWrapper}>
        <Text style={[styles.timePosted, styles.titleClr]}>{timePosted}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleClr: {
    color: Color.veryLightJAB,
    textAlign: "left",
  },
  lightWeight: {
    fontSize: FontSize.size_3xs,

    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.redHook,
    textAlign: "left",
    textTransform: "uppercase",
  },
  tag: {
    borderRadius: 93,
    borderStyle: "solid",
    borderColor: Color.redHook,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  title: {
    alignSelf: "stretch",
    fontSize: FontSize.size_5xl,
    
    fontFamily: FontFamily.tekoRegular,
    marginTop: 8,
    textTransform: "uppercase",
    color: Color.veryLightJAB,
  },
  timePosted: {
    fontSize: FontSize.size_xs_2,
    textTransform: "lowercase",
    fontWeight: "500",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    opacity: 0.5,
  },
  timePostedWrapper: {
    alignItems: "flex-end",
    marginTop: 8,
    flexDirection: "row",
  },
  text1: {
    position: "absolute",
    bottom: 15,
    left: 16,
    width: 288,
    justifyContent: "flex-end",
  },
});

export default NewsCardContainer;
