import * as React from "react";
import { Text, StyleSheet, View,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type SingleRecordType = {
  text?: string;
};

const SingleRecord = ({ text = "History of boxing" }: SingleRecordType) => {
  return (
    <TouchableOpacity style={[styles.singlerecord, styles.singlerecordFlexBox]}>
      <View style={styles.head}>
        <View style={[styles.fighterNameParent, styles.singlerecordFlexBox]}>
          <Text style={styles.fighterName}>{text}</Text>
          <Image
            style={styles.fiRrAngleSmallRightIcon}
            contentFit="cover"
            source={require("../assets/firranglesmallright1.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  singlerecordFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    width: '100%'
  },
  fighterName: {
    flex: 1,
    fontSize: FontSize.appEnglishBodyLarge_size,


    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    color: Color.veryLightJAB,
    textAlign: "left",
  },
  fiRrAngleSmallRightIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 8,
  },
  fighterNameParent: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  head: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.blueOverhand950,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    width: '100%'
  },
  singlerecord: {

    justifyContent: "space-between",
    alignSelf: "stretch",
  },
});

export default SingleRecord;
