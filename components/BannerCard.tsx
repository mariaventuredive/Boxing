import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const BannerCard = () => {
  return (
    <View style={styles.bannerCard}>
      <View style={[styles.myaccount35Parent, styles.rectangleParentFlexBox]}>
        <Text style={[styles.myaccount35, styles.myaccountTypo1]}>
          Tue 12 Dec
        </Text>
        <Text style={[styles.myaccount351, styles.myaccountTypo1]}>PPV</Text>
      </View>
      <View style={styles.frameParentSpaceBlock}>
        <View style={[styles.rectangleParent, styles.rectangleParentFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-57001.png")}
          />
          <View style={[styles.fury2Parent, styles.parentFlexBox]}>
            <Text style={styles.fury2}>Regis</Text>
            <Text style={styles.myaccountTypo}>21-0-0</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.frameParentSpaceBlock]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-57011.png")}
          />
          <View style={styles.parentFlexBox}>
            <Text style={styles.fury2}>Abdulah</Text>
            <Text style={[styles.myaccount353, styles.myaccountTypo]}>
              21-0-0
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  myaccountTypo1: {
   
    display: "flex",
    textAlign: "center",
    
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
    textTransform: "capitalize",
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    marginLeft: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParentSpaceBlock: {
    marginTop: 8,
    justifyContent: "center",
  },
  myaccountTypo: {
    color: Color.redHook,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  myaccount35: {
    color: Color.goldCross400,
    width: 50,
  },
  myaccount351: {
    color: Color.goldCross400,
    width: 19,
  },
  myaccount35Parent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameChild: {
    width: 18,

  },
  fury2: {
    fontSize: FontSize.appEnglishBodySmall_size,

    color: Color.goldCross400,
    textAlign: "left",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  fury2Parent: {
    flex: 1,
    justifyContent: "space-between",
  },
  rectangleParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  myaccount353: {
    marginLeft: 24,
  },
  rectangleGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  bannerCard: {
    justifyContent: "center",
    alignItems: "center",
    marginRight:10
  },
});

export default BannerCard;
