import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type MoreInfoTitleType = {
  title?: string;
};

const MoreInfoTitle = ({ title }: MoreInfoTitleType) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "stretch",
    fontSize: FontSize.appEnglishBodyLarge_size,
    letterSpacing: -0.6,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    color: Color.lightJAB,
    textAlign: "left",
  },
});

export default MoreInfoTitle;
