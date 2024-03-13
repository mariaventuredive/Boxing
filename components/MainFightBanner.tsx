import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const MainFightBanner = () => {
  return (
    <ImageBackground
      style={styles.bannerIcon}
      resizeMode="cover"
      source={require("../assets/banner.png")}
    >
      <View style={styles.frameParent}>
        <View
          style={[styles.fighter1NameParent, styles.progressIndicatorFlexBox]}
        >
          <Text style={[styles.fighter1Name, styles.nameTypo]}>Fury</Text>
          <Text style={[styles.vs, styles.nameTypo]}>vs</Text>
          <Text style={[styles.fighter2Name, styles.nameTypo]}>Ngannou</Text>
        </View>
        <View style={[styles.frameWrapper, styles.frameWrapperSpaceBlock]}>
          <View style={styles.dateTimeParent}>
            <View style={[styles.dateTime, styles.dateFlexBox]}>
              <View style={[styles.dateTime, styles.dateFlexBox]}>
                <Text style={styles.date}>WBO Heavyweight</Text>
              </View>
            </View>
            <View style={[styles.dateTime2, styles.dateFlexBox]}>
              <View style={[styles.dateTime, styles.dateFlexBox]}>
                <Text style={styles.date1Typo}>Sunday DEC 09 2023</Text>
                <View style={styles.separator} />
                <Text style={[styles.pstTime, styles.date1Typo]}>
                  23:00 PST
                </Text>
                <View style={styles.separator} />
                <Text style={[styles.pstTime, styles.date1Typo]}>
                  07:00 GMT
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.progressIndicator, styles.frameWrapperSpaceBlock]}>
          <View
            style={[styles.progressIndicatorChild, styles.progressLayout]}
          />
          <View style={[styles.progressIndicatorItem, styles.progressLayout]} />
          <View style={[styles.progressIndicatorItem, styles.progressLayout]} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  progressIndicatorFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  nameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  },
  frameWrapperSpaceBlock: {
    marginTop: 23,
    justifyContent: "center",
  },
  dateFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  date1Typo: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    textAlign: "center",

    color: Color.veryLightJAB,
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  },
  progressLayout: {
    height: 2,
    borderRadius: Border.br_5xs,
  },
  fighter1Name: {
    color: Color.veryLightJAB,
    textAlign: "left",
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",

    fontSize: FontSize.size_37xl,
  },
  vs: {
    fontSize: FontSize.size_5xl,

    color: Color.veryLightJAB,
    textAlign: "left",
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  },
  fighter2Name: {
    color: Color.redHook,
    width: 157,
    textAlign: "left",
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  
    fontSize: FontSize.size_37xl,
  },
  fighter1NameParent: {
    width: 156,
    flexWrap: "wrap",
  },
  date: {
    fontSize: FontSize.size_lg,
    color: Color.goldCross400,
    textAlign: "center",
   
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  },
  dateTime: {
    alignItems: "center",
  },
  separator: {
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderRightWidth: 0.8,
    width: 1,
    height: 15,
    marginLeft: 16,
  },
  pstTime: {
    marginLeft: 16,
  },
  dateTime2: {
    marginTop: 8,
    alignItems: "center",
  },
  dateTimeParent: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameWrapper: {
    width: 313,
    alignItems: "center",
  },
  progressIndicatorChild: {
    backgroundColor: Color.redHook,
    width: 48,
  },
  progressIndicatorItem: {
    backgroundColor: Color.goldCross400,
    width: 8,
    marginLeft: 8,
  },
  progressIndicator: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  bannerIcon: {
    borderRadius: Border.br_21xl,
    height: 300,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_6xs,
    marginTop: 10,
    alignSelf: "stretch",
  },
});

export default MainFightBanner;
