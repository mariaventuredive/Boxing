import * as React from "react";
import { Text, StyleSheet, View ,TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding, } from "../GlobalStyles";


export type Property1onboardType = {
  tittle?: string;
  subTittle?: string;
  pageNo?: number;

  /** Action props */
  onFrameTouchableOpacityPress?: () => void;
};

const Property1onboard = ({
  tittle = "float like a butterfly, sting like a bee",
  subTittle = "Breaking Down the Ringside Action and Champion Showdowns",
  onFrameTouchableOpacityPress,
  pageNo
}: Property1onboardType) => {



  function getPageSequence(pageNumber:number) {
    switch (pageNumber) {
      case 1:
        return (
          <>
            <View style={[styles.indecatorsItem, styles.indecatorsSpaceBlock,{marginRight:5}]} />
            <View style={[styles.indecatorsChild, styles.indecatorsLayout]} />
            <View style={[styles.indecatorsInner, styles.indecatorsSpaceBlock]} />
          </>
        );
      case 2:
        return (
          <>
            <View style={[styles.indecatorsChild, styles.indecatorsLayout]} />
            <View style={[styles.indecatorsItem, styles.indecatorsSpaceBlock]} />
            <View style={[styles.indecatorsInner, styles.indecatorsSpaceBlock]} />
          </>
        );
      case 3:
        return (
          <>
            <View style={[styles.indecatorsChild, styles.indecatorsLayout]} />
            <View style={[styles.indecatorsInner, styles.indecatorsSpaceBlock]} />
            <View style={[styles.indecatorsItem, styles.indecatorsSpaceBlock]} />
          </>
        );
      default:
        return null;
    }
  }
  

  
  return (
    <View style={styles.property1onboard2}>
      <View style={styles.quateParent}>
        <Text style={styles.quate}>{tittle}</Text>
        <Text style={[styles.subtitle, styles.subtitleSpaceBlock]}>
          {subTittle}
        </Text>
        <View style={[styles.frameParent, styles.indecatorsFlexBox]}>
          <View style={styles.indecatorsWrapper}>
            <View style={[styles.indecators, styles.indecatorsFlexBox]}>
               {getPageSequence(pageNo)}
            </View>
          </View>
          <TouchableOpacity
            onPress={onFrameTouchableOpacityPress}
          >
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/frame-665.png")}

            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleSpaceBlock: {
    marginTop: 13,
    alignSelf: "stretch",
  },
  indecatorsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  indecatorsLayout: {
    opacity: 0.5,
    height: 8,
    width: 8,
  },
  indecatorsSpaceBlock: {
    marginLeft: 8,
    backgroundColor: Color.redHook,
    borderRadius: Border.br_11xs,
  },
  quate: {
    fontSize: FontSize.size_21xl,

    color: Color.lightJAB,
    display: "flex",
    width: 397,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: FontSize.size_5xl,
    color: Color.goldCross400,
    opacity: 0.7,
    textAlign: "left",
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
    marginTop: 13,
  },
  indecatorsChild: {
    backgroundColor: Color.redHook,
    borderRadius: Border.br_11xs,
    opacity: 0.5,
    height: 8,
    width: 8,
  },
  indecatorsItem: {
    width: 10,
    height: 10,
  },
  indecatorsInner: {
    opacity: 0.5,
    height: 8,
    width: 8,
  },
  indecators: {
    justifyContent: "center",
  },
  indecatorsWrapper: {
    padding: Padding.p_5xs,
  },
  frameChild: {
    width: 52,
    height: 52,
  },
  frameParent: {
    justifyContent: "space-between",
    marginTop: 13,
    alignSelf: "stretch",
  },
  quateParent: {
    alignSelf: "stretch",
  },
  property1onboard2: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
});

export default Property1onboard;
