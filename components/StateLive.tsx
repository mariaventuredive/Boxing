import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

export type StateLiveType = {
};


const StateLive = ({


}: StateLiveType) => {



  return (
    <View style={[styles.statelive,]}>
      <View style={[styles.tabSpaceBlock]}>
        <Text style={[styles.relatedNews,]}>The tape</Text>
      </View>
      <View style={[styles.tab1, styles.tabSpaceBlock,]}>
        <Text style={[styles.relatedNews]}>Livestream</Text>
      </View>
      <View style={[styles.tab1, styles.tabSpaceBlock]}>
        <Text style={styles.relatedNews}>Fight Poll</Text>
      </View>
      <View style={[styles.tab1, styles.tabSpaceBlock]}>
        <Text style={styles.relatedNews}>Thread</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.blueOverhand950,
    borderRadius: Border.br_5xs,
  },
  relatedNews: {
    fontSize: FontSize.size_sm,
    lineHeight: 16,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.veryLightJAB,
    textAlign: "center",
  },
  tab1: {
    marginLeft: 8,
  },
  statelive: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
});

export default StateLive;
