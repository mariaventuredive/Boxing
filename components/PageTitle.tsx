import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type PageTitleType = {
  title?: string;
};

const PageTitle = ({ title }: PageTitleType) => {
  return (
    <View style={styles.pageTitle}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.appEnglishHeadingH6_size,
    letterSpacing: -1,
    lineHeight: 32,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    color: Color.lightJAB,
    textAlign: "left",
  },
  pageTitle: {
    alignSelf: "stretch",
    height: 32,
    justifyContent: "center",
  },
});

export default PageTitle;
