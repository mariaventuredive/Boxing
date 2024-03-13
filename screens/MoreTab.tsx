import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import LohoHeader from "../components/LohoHeader";
import MoreInfoTitle from "../components/MoreInfoTitle";
import SingleRecord from "../components/SingleRecord";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MoreTab = () => {
  return (
    <View style={[styles.moreTab, styles.tabFlexBox1]}>
      <ScrollView
        style={styles.headParent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <LohoHeader icon={require("../assets/vector2.png")} />
        <View style={[styles.moreoptionscards, styles.cards1SpaceBlock]}>
          <View style={[styles.cards, styles.cardsSpaceBlock]}>
            <MoreInfoTitle title="Explore boxing" />
            <View style={styles.singlerecordParent}>
              <SingleRecord text="History of boxing" />
              <SingleRecord text="Legacy media" />
              <SingleRecord text="Archive" />
              <SingleRecord text="Ranking" />
              <SingleRecord text="Sponsored " />
              <SingleRecord text="Gym finder" />
              <SingleRecord text="Hall of fam" />
            </View>
          </View>
        </View>
        <View style={[styles.cards1, styles.cardsSpaceBlock]}>
          <MoreInfoTitle title="Setting" />
          <View style={styles.singlerecordGroup}>
            <SingleRecord text="Account setting" />
            <SingleRecord text="Language" />
            <SingleRecord text="Units" />
          </View>
        </View>
        <View style={[styles.cards1, styles.cardsSpaceBlock]}>
          <MoreInfoTitle title="Support" />
          <View style={styles.singlerecordGroup}>
            <SingleRecord text="Terms and Conditions" />
            <SingleRecord text="Privacy Policy" />
            <SingleRecord text="FAQS" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabFlexBox1: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  cards1SpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  cardsSpaceBlock: {
    padding: Padding.p_base,
    backgroundColor: Color.colorLinen_100,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  barShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  labelTypo: {
    marginTop: 10,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: FontSize.size_3xs,
  },
  singlerecordParent: {
    marginTop: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  cards: {
    flex: 1,
  },
  moreoptionscards: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  singlerecordGroup: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  cards1: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  headParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  moreTab: {
    backgroundColor: Color.darkUppercut950,
   
    paddingTop: Padding.p_41xl,
  },
});

export default MoreTab;
