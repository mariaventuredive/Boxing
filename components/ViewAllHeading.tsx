import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

export type ViewAllHeadingType = {
  title?: string;
  showViewAlll?: boolean;
};

const ViewAllHeading = ({ title, showViewAlll = true }: ViewAllHeadingType) => {
  return (
    <View style={styles.titleParent}>
      <Text style={[styles.title, styles.titleTypo]}>{title}</Text>
      {showViewAlll && (
        <Text style={[styles.historyofboxing2, styles.titleTypo]}>
          View all
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  },
  title: {
    fontSize: FontSize.appEnglishHeadingH6_size,
    color: Color.lightJAB,
  },
  historyofboxing2: {
    fontSize: FontSize.size_base,

    color: Color.redHook,
  },
  titleParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: 0,
  },
});

export default ViewAllHeading;
