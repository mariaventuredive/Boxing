import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import HeadingVariantHeader from "../components/HeadingVariantHeader";
import UnderConstruction from "../components/UnderConstruction";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const News = () => {
  return (
    <View style={[styles.news, styles.newsFlexBox]}>
      <View style={[styles.headParent, styles.newsFlexBox]}>
        <HeadingVariantHeader heading="News" />
        <UnderConstruction />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  barFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  labelTypo: {
    marginTop: 10,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: FontSize.size_3xs,
  },
  headParent: {
    alignSelf: "stretch",
  },
  news: {
    backgroundColor: Color.darkUppercut950,
    width: "100%",
    height: 1116,
    paddingTop: Padding.p_41xl,
  },
});

export default News;
