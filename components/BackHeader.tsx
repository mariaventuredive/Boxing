import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type BackHeaderType = {
  heading?: string;
  /** Action props */
  onFiRrAngleSmallLeftPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BackHeader = ({
  heading = "BUTAEY vs  Fazlioon",
  onFiRrAngleSmallLeftPress,
}: BackHeaderType) => {

return (
    <View
      style={[
        styles.property1backheading,
        styles.property1backheadingFlexBox,
       
      ]}
    >
      <View
        style={[
          styles.fiRrAngleSmallLeftParent,
          styles.property1backheadingFlexBox,
        ]}
      >
        <TouchableOpacity  onPress={onFiRrAngleSmallLeftPress}>
        <Image
          style={[styles.fiRrAngleSmallLeftIcon]}
          contentFit="cover"
          source={require("../assets/firranglesmallleft1.png")}
        
        />
        </TouchableOpacity>
   
        <Text style={[styles.date,]}>{heading}</Text>
        <View style={[styles.vectorParent,]}>
          <Image
            style={[styles.vectorIcon,]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
       
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1backheadingFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  fiRrAngleSmallLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
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
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  fiRrAngleSmallLeftParent: {
    flex: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  property1backheading: {
    backgroundColor: Color.colorGray_200,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    alignSelf: "stretch",
  },
});

export default BackHeader;
