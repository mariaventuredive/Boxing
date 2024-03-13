import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type FrameType = {
  showFrame?: boolean;
};

const Frame = ({ showFrame = true }: FrameType) => {
  return (
    showFrame && (
      <View style={styles.frame}>
        <Image
          style={styles.group2Icon}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
        <Text
          style={styles.vs}
        >{`Live fight news : GYPSY KING TAKES DOWN T TYSON `}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  group2Icon: {
    width: 23,
    height: 16,
  },
  vs: {
    flex: 1,
    fontSize: FontSize.appEnglishBodySmall_size,
    letterSpacing: -0.4,
    lineHeight: 14,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    color: Color.veryLightJAB,
    textAlign: "left",
    marginLeft: 30,
  },
  frame: {
    width: 236,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Frame;
