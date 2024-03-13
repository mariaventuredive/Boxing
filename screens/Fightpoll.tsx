import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, Color, FontFamily } from "../GlobalStyles";

const Fightpoll = () => {
  return (
    <View style={styles.fightpoll}>
      <View style={styles.frameParent}>
        <View style={styles.frameChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recordFlexBox: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
  },
  settingBorder: {
    padding: Padding.p_5xs,
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    borderColor: Color.redHook,
    justifyContent: "center",
    alignItems: "center",
  },
  fighterCardFlexBox: {
    marginTop: 24,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  fighterNameTypo: {
    color: Color.veryLightJAB,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  buySpaceBlock: {
    marginTop: 15,
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingLeft: Padding.p_lg,
    height: 48,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  framePosition: {
    top: 0,
    position: "absolute",
    height: 8,
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
  fightpoll: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.darkUppercut950,
    width: "100%",
    height: 1098,
    alignItems: "center",
    flex: 1,
  },
});

export default Fightpoll;
