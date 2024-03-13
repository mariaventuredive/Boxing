import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type NewsCardType = {
  mainImage?: ImageSourcePropType;
};

const NewsCard = ({ mainImage }: NewsCardType) => {
  return (
    <View style={[styles.newsCard, styles.footerSpaceBlock]}>
      <Image
        style={styles.mainImageIcon}
        contentFit="cover"
        source={mainImage}
      />
      <View style={styles.container}>
        <View style={styles.tag}>
          <Text style={styles.storyOfDay}>story of day</Text>
        </View>
        <Text style={[styles.historyofboxing2211, styles.timePostedClr]}>
          Chris Eubank On Conor BennShowdown: “It Will Be An Execution”
        </Text>
      </View>
      <View style={[styles.footer, styles.footerSpaceBlock]}>
        <View style={styles.copyright}>
          <Text style={[styles.timePosted, styles.timePostedClr]}>
            27 mins ago
          </Text>
        </View>
        <Image
          style={styles.fiRrMenuDotsIcon}
          contentFit="cover"
          source={require("../assets/firrmenudots1.png")}
        />
      </View>
      <Image
        style={styles.settingIcon}
        contentFit="cover"
        source={require("../assets/setting1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerSpaceBlock: {
    paddingHorizontal: 15,
    alignItems: "center",
    marginHorizontal:5
  },
  timePostedClr: {
    color: Color.veryLightJAB,
    textAlign: "left",
  },
  mainImageIcon: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
    height: 119,
    zIndex: 0,
    width: 156,
  },
  storyOfDay: {
    fontSize: FontSize.size_3xs_3,
    lineHeight: 7,
    textTransform: "capitalize",
    color: Color.redHook,
    display: "flex",
    width: 54,
    height: 7,
    textAlign: "left",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
    alignItems: "center",
  },
  tag: {
    borderRadius: 93,
    borderStyle: "solid",
    borderColor: Color.redHook,
    borderWidth: 0.9,
    padding: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorGray_300,
  },
  historyofboxing2211: {
    fontSize: FontSize.size_smi,
    lineHeight: 17,
    textTransform: "uppercase",
    fontFamily: FontFamily.tekoRegular,
    marginTop: 11.14,
    alignSelf: "stretch",
  },
  container: {
    paddingTop: 11,
    zIndex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  timePosted: {
    fontSize: FontSize.size_xs_1,
    textTransform: "lowercase",
    opacity: 0.5,
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
    color: Color.veryLightJAB,
  },
  copyright: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  fiRrMenuDotsIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  footer: {
    justifyContent: "space-between",
    paddingVertical: 11,
    zIndex: 2,
    flexDirection: "row",
    width: 156,
  },
  settingIcon: {
    position: "absolute",
    top: 11,
    right: 119,
    borderRadius: 7,
    width: 26,
    height: 26,
    zIndex: 3,
  },
  newsCard: {
    borderRadius: 15,
    width: 145,
    paddingVertical: 0,
    overflow: "hidden",
    backgroundColor: Color.colorGray_300,
    paddingHorizontal: 15,
  },
});

export default NewsCard;
