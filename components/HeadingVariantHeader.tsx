import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type HeadingVariantHeaderType = {
  heading?: string;
};

const HeadingVariantHeader = ({
  heading = "BUTAEY vs  Fazlioon",
}: HeadingVariantHeaderType) => {
  return (
    <View style={[styles.property1headingvariant, styles.frameParentFlexBox]}>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.rectangleWrapper, styles.vectorParentFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-752.png")}
          />
        </View>
        <Text style={styles.date}>{heading}</Text>
        <View style={[styles.vectorParent, styles.vectorParentFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector12.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: Border.br_4xs,
    width: 32,
    height: 32,
  },
  rectangleWrapper: {
    width: 72,
  },
  date: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    letterSpacing: -0.6,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    color: Color.veryLightJAB,
    textAlign: "center",
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  vectorIcon1: {
    width: 15,
    marginLeft: 24,
    height: 16,
  },
  vectorParent: {
    justifyContent: "flex-end",
    padding: Padding.p_5xs,
  },
  frameParent: {
    flex: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  property1headingvariant: {
    backgroundColor: Color.colorGray_200,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
  },
});

export default HeadingVariantHeader;
