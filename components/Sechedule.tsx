import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type SecheduleType = {
  title?: string;
};

const Sechedule = ({ title }: SecheduleType) => {
  return (
    <View style={styles.pageTitle}>
      <Image
        style={styles.fiRrCalendarIcon}
        contentFit="cover"
        source={require("../assets/firrcalendar3.png")}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fiRrCalendarIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.appEnglishBodyLarge_size,

    
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    color: Color.goldCross400,
    textAlign: "left",
    marginLeft: 8,
  },
  pageTitle: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
  },
});

export default Sechedule;
