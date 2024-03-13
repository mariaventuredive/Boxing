import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const UnderConstruction = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.frameParent}>
      <View style={styles.titleParentFlexBox}>
        <Text style={styles.title}>402</Text>
        <Text style={[styles.title1, styles.title1Typo]}>
          under construction
        </Text>
        <Text style={[styles.location, styles.title1Typo]}>
          Sorry this page is still under construction
        </Text>
      </View>
      <Pressable
        style={[styles.frame2888337652Wrapper, styles.titleParentFlexBox]}
        onPress={() => navigation.goBack()}
      >
        <View style={[styles.frame2888337652, styles.frame2888337652FlexBox]}>
          <Text
            style={[styles.historyofboxing2, styles.frame2888337652FlexBox]}
          >
            back to home
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title1Typo: {
    marginTop: 16,
    fontWeight: "500",
    textAlign: "center",
    alignSelf: "stretch",
  },
  titleParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frame2888337652FlexBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    textAlign: "center",
    textTransform: "uppercase",
    color: Color.lightJAB,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  title1: {
    fontSize: FontSize.size_41xl,
 
    fontFamily: FontFamily.appEnglishBodySmall,
    textTransform: "uppercase",
    color: Color.lightJAB,
    marginTop: 16,
  },
  location: {
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    color: Color.goldCross400,
    marginTop: 16,
    fontSize: FontSize.size_base,
  },
  historyofboxing2: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    letterSpacing: -0.6,
    lineHeight: 24,
    color: Color.veryLightJAB,
    display: "flex",
    height: 24,
    fontFamily: FontFamily.appEnglishBodySmall,
    textTransform: "uppercase",
    fontWeight: "500",
    flex: 1,
    textAlign: "center",
  },
  frame2888337652: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.veryLightJAB,
    borderWidth: 1,
    padding: Padding.p_base,
    flexDirection: "row",
  },
  frame2888337652Wrapper: {
    marginTop: 64,
    flexDirection: "row",
  },
  frameParent: {
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_56xl,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default UnderConstruction;
