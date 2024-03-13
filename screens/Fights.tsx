import * as React from "react";
import { ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import HeadingVariantHeader from "../components/HeadingVariantHeader";
import Search from "../components/Search";
import ContainedButton from "../components/ContainedButton";
import UpcommingFight from "../components/UpcommingFight";
import UpcomingCardMobile from "../components/UpcomingCardMobile";
import Sechedule from "../components/Sechedule";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import ViewAllHeading from "../components/ViewAllHeading";

const Fights = () => {
  return (
    <View style={[styles.fights, styles.fightsFlexBox]}>
      <ScrollView
        style={styles.headParent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <HeadingVariantHeader heading="Fighting" />
        <View style={styles.frameParent}>
          <View style={[styles.searchWrapper, styles.wrapperSpaceBlock]}>
            <Search searchCriteriaText="Search by fighter" />
          </View>
          <View style={[styles.instanceParent, styles.cardsSpaceBlock]}>
            <ContainedButton text="Schedule" propBackgroundColor="#ff2924" />
            <ContainedButton text="Results" />
          </View>
          <View style={[styles.cards, styles.cardsLayout]}>
          <ViewAllHeading title="Upcoming fights" showViewAlll={false} />
            <ScrollView
              style={[styles.upcomingCard, styles.thisWeekSpaceBlock]}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.upcomingCardScrollViewContent}
            >
              <UpcommingFight
                fighter1Name="Tyson"
                fighter2Name="Holmes"
                result2="10-20-30"
                underCard={false}
                past={false}
                liveOn
                liveTag={false}
                upcoming={false}
              />
              <UpcomingCardMobile />
              <UpcomingCardMobile />
            </ScrollView>
          </View>
          <View style={[styles.cardsWrapper, styles.cardsSpaceBlock]}>
            <View style={[styles.cards1, styles.cardsLayout]}>
       
              <ViewAllHeading title="Full Upcoming schedule" showViewAlll={false} />
              <View style={[styles.thisWeek, styles.thisWeekSpaceBlock]}>
                <Sechedule title="Thursday, 28 December 2023" />
                <UpcommingFight
                  fighter1Name="Tyson"
                  fighter2Name="Holmes"
                  result2="10-20-30"
                  underCard={false}
                  past={false}
                  liveOn
                  liveTag={false}
                  upcoming={false}
                />
                <Sechedule title="Thursday, 28 December 2023" />
                <UpcomingCardMobile />
                <Sechedule title="Thursday, 28 December 2023" />
                <UpcomingCardMobile />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  upcomingCardScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fightsFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  wrapperSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  cardsSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  cardsLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkUppercut950,
  },
  thisWeekSpaceBlock: {
    marginTop: 24,
    alignSelf: "stretch",
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
  labelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: FontSize.size_3xs,
    marginTop: 10,
  },
  searchWrapper: {
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  instanceParent: {
    height: 38,
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  upcomingCard: {
    width: "100%",
  },
  cards: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_base,
    marginTop: 20,
    alignSelf: "stretch",
  },
  thisWeek: {
    justifyContent: "center",
    alignItems: "center",
  },
  cards1: {
    borderStyle: "solid",
    borderColor: Color.goldCross400,
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    flex: 1,
  },
  cardsWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
  },
  frameParent: {
    paddingHorizontal: Padding.p_mini,
    paddingTop: Padding.p_3xs,
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  headParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  fights: {
    height: 1116,
    paddingTop: Padding.p_41xl,
    width: "100%",
    backgroundColor: Color.darkUppercut950,
    justifyContent: "space-between",
  },
});

export default Fights;
