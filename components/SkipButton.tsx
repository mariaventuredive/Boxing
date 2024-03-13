import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const SkipButton = () => {
  return (
    <View style={styles.skip}>
      <Text style={styles.skip1}>Skip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  skip1: {
    fontSize: FontSize.size_mid,
    lineHeight: 40,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.tekoSemiBold,
    color: Color.neutralsWhite,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 82,
  },
  skip: {
    alignSelf: "stretch",
    height: 40,
  },
});

export default SkipButton;
