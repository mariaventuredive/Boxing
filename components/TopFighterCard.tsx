import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type TopFighterCardType = {
  fighterName?: string;
};

const TopFighterCard = ({ fighterName }: TopFighterCardType) => {
  return (
    <View style={styles.topFighterCard}>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <View style={styles.bg} />
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame1.png")}
          />
        </View>
        <View style={[styles.frameFrame, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame2.png")}
          />
        </View>
        <View style={[styles.frameView, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame3.png")}
          />
        </View>
      </View>
      <View style={[styles.new, styles.newPosition]}>
        <Text style={[styles.following, styles.followingText]}>Following</Text>
      </View>
      <Text style={[styles.fighterName, styles.followingText]}>
        {fighterName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameSpaceBlock: {
    padding: 11,
    flexDirection: "row",
  },
  newPosition: {
    left: 16,
    position: "absolute",
  },
  followingText: {
    textAlign: "left",
    color: Color.veryLightJAB,
    textTransform: "uppercase",
  },
  imageIcon: {
    width: 296,
    height: 380,
    zIndex: 0,
  },
  bg: {
    borderRadius: 11,
    width: 298,
    height: 400,
    display: "none",
    zIndex: 1,
    marginLeft: 10,
    backgroundColor: Color.redHook,
  },
  frameIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  frameWrapper: {
    top: 0,
    left: 53,
    backgroundColor: Color.colorGray_400,
    borderRadius: 3,
    padding: 11,
    position: "absolute",
  },
  frameContainer: {
    top: 59,
    left: 64,
    backgroundColor: Color.colorGray_400,
    borderRadius: 3,
    padding: 11,
    position: "absolute",
  },
  frameFrame: {
    top: 117,
    left: 75,
    backgroundColor: Color.colorGray_400,
    borderRadius: 3,
    padding: 11,
    position: "absolute",
  },
  frameView: {
    top: 176,
    left: 85,
    backgroundColor: Color.colorGray_400,
    borderRadius: 3,
    padding: 11,
    position: "absolute",
  },
  frameParent: {
    left: 245,
    width: 37,
    height: 213,
    zIndex: 2,
    overflow: "hidden",
    top: 16,
    position: "absolute",
  },
  following: {
    fontSize: FontSize.size_xs_2,
  
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
  },
  new: {
    borderRadius: 67,
    borderStyle: "solid",
    borderColor: Color.veryLightJAB,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
    padding: 11,
    flexDirection: "row",
    top: 16,
  },
  fighterName: {
    bottom: 16,
    fontSize: FontSize.size_50xl,
    
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    display: "flex",
    alignItems: "flex-end",
    width: 240,
   
    zIndex: 4,
    left: 16,
    position: "absolute",
  },
  topFighterCard: {
    borderRadius: 15,
    flexDirection: "row",
    backgroundColor: Color.redHook,
    margin:5
  },
});

export default TopFighterCard;
