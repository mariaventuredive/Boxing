import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const Livestream = () => {
  return (
    <View style={[styles.livestream, styles.cardsFlexBox]}>
      <View style={styles.frameParent}>
        <View style={styles.frameChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsFlexBox: {
    flex: 1,
    backgroundColor: Color.darkUppercut950,
    alignItems: "center",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  frameChild: {
    height: 110,
    overflow: "hidden",
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  livestream: {
    width: "100%",
    height: 1131,
    alignItems: "center",
  },
});

export default Livestream;
