import * as React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import LohoHeader from "../components/LohoHeader";
import BannerCard from "../components/BannerCard";
import MainFightBanner from "../components/MainFightBanner";

import PageTitle from "../components/PageTitle";
import UpcommingFight from "../components/UpcommingFight";
import UpcomingCardMobile from "../components/UpcomingCardMobile";
import ViewAllHeading from "../components/ViewAllHeading";
import SizeBigImageYes from "../components/SizeBigImageYes";
import NewsCard from "../components/NewsCard";
import TopFighterCard from "../components/TopFighterCard";
import Podcast from "../components/Podcast";
import HistoryData from "../components/HistoryData";
import Knockouts from "../components/Knockouts";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Main = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={[styles.mainIcon, styles.mainIconFlexBox]}
      resizeMode="cover"
      source={require("../assets/main.png")}
    >
      <ScrollView
        style={styles.headParent}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <LohoHeader
          icon={require("../assets/vector1.png")}
          onVectorPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Fights" })
          }
        />
        <ScrollView
          style={styles.bar}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bARScrollViewContent}
        >
          <View style={styles.heavyMiddleWwcParent}>
            <Text style={styles.heavyMiddleWwc}>heavy Middle w.w.c</Text>
            <Text style={[styles.myaccount35, styles.myaccount35SpaceBlock]}>
              <Text style={styles.myaccount35Txt}>
                <Text style={styles.poweredBy}>{`Powered by `}</Text>
                <Text style={styles.labelTypo1}>BOXING.NET</Text>
              </Text>
            </Text>
          </View>
          <BannerCard />
          <BannerCard />
        </ScrollView>
        <MainFightBanner />

        <View style={styles.cards}>
          <ViewAllHeading title="Upcoming fights" showViewAlll={false} />

          <ScrollView
            style={styles.upcomingCard}
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
              onUpcomingCardMobilePress={() =>
                navigation.navigate("EventsDetails")
              }
            />
            <UpcomingCardMobile />

            <UpcomingCardMobile />
            <UpcomingCardMobile />
          </ScrollView>
        </View>
        <View style={[styles.cards1, styles.cardsSpaceBlock]}>
          <ViewAllHeading title="What’s on?" showViewAlll />
          <View style={[styles.newsCardParent, styles.myaccount35SpaceBlock]}>
            <SizeBigImageYes
              tag="story of day"
              newsTitle="Chris Eubank On Conor   BennShowdown: “It Will Be An Execution”"
            />
            <ScrollView
              style={[styles.topKnockoutCards, styles.fightersCardSpaceBlock]}
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.topKnockoutCardsContent}
            >
              <NewsCard mainImage={require("../assets/main-image1.png")} />
              <NewsCard mainImage={require("../assets/main-image2.png")} />
              <NewsCard mainImage={require("../assets/main-image3.png")} />
            </ScrollView>
          </View>
        </View>
        <View style={[styles.cards2, styles.cardsBg]}>
          <ViewAllHeading title="top fighters" showViewAlll />
          <ScrollView
            style={styles.fightersCardSpaceBlock}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.fightersCardScrollViewContent}
          >
            <TopFighterCard fighterName="Nx Ngannou" />
            <TopFighterCard fighterName="Nx Ngannou" />
            <TopFighterCard fighterName="Nx Ngannou" />
          </ScrollView>
        </View>
        <View style={[styles.podcastParent, styles.parentFlexBox]}>
          <Podcast />
          <HistoryData />
        </View>
        <View style={[styles.cards3, styles.cardsSpaceBlock]}>
          <ViewAllHeading title="Top knockouts" showViewAlll />
          <ScrollView
            style={[styles.topKnockoutCards, styles.fightersCardSpaceBlock]}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.frameScrollView1Content}
          >
            <Knockouts />
            <Knockouts />
            <Knockouts />
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bARScrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  upcomingCardScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topKnockoutCardsContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fightersCardScrollViewContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView1Content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mainIconFlexBox: {
    justifyContent: "space-between",
    flex: 1,

  },
  myaccount35SpaceBlock: {
    marginTop: 8,
    alignItems: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  cardsSpaceBlock: {
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
  fightersCardSpaceBlock: {
    marginTop: 16,
    width: "100%",
  },
  cardsBg: {
    overflow: "hidden",
    backgroundColor: Color.darkUppercut950,
    borderRadius: Border.br_xl,
    marginTop: 10,
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
  labelTypo1: {
    color: Color.redHook,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  labelTypo: {
    color: Color.goldCross400,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: FontSize.size_3xs,
    marginTop: 10,
  },
  heavyMiddleWwc: {
    fontWeight: "800",
    fontFamily: FontFamily.manropeExtraBold,
    color: Color.veryLightJAB,
    textAlign: "left",
    textTransform: "uppercase",
    fontSize: FontSize.size_3xs,
  },
  poweredBy: {
    fontWeight: "500",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    color: Color.lightJAB,
  },
  myaccount35Txt: {
    width: "100%",
  },
  myaccount35: {

    textTransform: "capitalize",
    display: "flex",
    width: 116,
    // height: 8,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  heavyMiddleWwcParent: {
    justifyContent: "center",

  },
  bar: {
    marginTop: 10,
    backgroundColor: Color.colorBlack,
    alignSelf: "stretch",
    width: "100%",
  },
  frameParent: {
    backgroundColor: Color.redHook,
    marginTop: 10,
  },
  upcomingCard: {
    marginTop: 24,
    alignSelf: "stretch",
    width: "100%",
  },
  cards: {
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_base,
    backgroundColor: Color.darkUppercut950,
    borderRadius: Border.br_xl,
    marginTop: 10,
    alignSelf: "stretch",
  },
  topKnockoutCards: {
    alignSelf: "stretch",
  },
  newsCardParent: {
    alignSelf: "stretch",
  },
  cards1: {
    paddingVertical: Padding.p_xs,
    overflow: "hidden",
    backgroundColor: Color.darkUppercut950,
    borderRadius: Border.br_xl,
    marginTop: 10,
    alignItems: "center",
  },
  cards2: {
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  podcastParent: {
    marginTop: 10,
  },
  cards3: {
    paddingVertical: 1,
    overflow: "hidden",
    backgroundColor: Color.darkUppercut950,
    borderRadius: Border.br_xl,
    marginTop: 10,
  },
  headParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  mainIcon: {

    paddingTop: Padding.p_41xl,
    alignItems: "center",

  },
});

export default Main;
