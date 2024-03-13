import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

export type Frame2Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame2 = ({ style }: Frame2Type) => {
  return (
    <View style={[styles.predictionAppParent, style]}>
      <View style={styles.predictionApp}>
        <View style={[styles.pageTitle, styles.recordFlexBox]}>
          <Text style={styles.title}>{`Fight Poll `}</Text>
          <View style={styles.settingParent}>
            <View style={styles.settingBorder}>
              <Image
                style={styles.chevronLeftIcon}
                contentFit="cover"
                source={require("../assets/chevronleft.png")}
              />
            </View>
            <View style={[styles.setting1, styles.settingBorder]}>
              <Image
                style={styles.chevronLeftIcon}
                contentFit="cover"
                source={require("../assets/chevronleft.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.fighterCard, styles.fighterCardFlexBox]}>
          <View style={styles.fighterCardInner}>
            <View style={styles.frameWrapper}>
              <View style={styles.descriptionContainerWrapper}>
                <View style={styles.descriptionContainer}>
                  <View style={[styles.pageTitle, styles.recordFlexBox]}>
                    <View style={styles.leftRecord}>
                      <Image
                        style={styles.cardIcon}
                        contentFit="cover"
                        source={require("../assets/card2.png")}
                      />
                    </View>
                    <Image
                      style={styles.cardIcon}
                      contentFit="cover"
                      source={require("../assets/card3.png")}
                    />
                  </View>
                  <View style={[styles.record, styles.recordFlexBox]}>
                    <View style={styles.fighterNameParent}>
                      <Text
                        style={[styles.fighterName, styles.fighterNameTypo]}
                      >
                        Who wins ?
                      </Text>
                      <View style={styles.fighterCardFlexBox}>
                        <View style={styles.buyTicket}>
                          <Text
                            style={[
                              styles.historyofboxing2,
                              styles.fighterNameTypo,
                            ]}
                          >
                            STEVENSON Will win
                          </Text>
                        </View>
                        <View style={[styles.buyTicket1, styles.buySpaceBlock]}>
                          <Text
                            style={[
                              styles.historyofboxing2,
                              styles.fighterNameTypo,
                            ]}
                          >
                            Draw
                          </Text>
                        </View>
                        <View style={[styles.buyTicket2, styles.buySpaceBlock]}>
                          <Text
                            style={[
                              styles.historyofboxing2,
                              styles.fighterNameTypo,
                            ]}
                          >
                            Ngannou will win
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rectangleParent}>
                      <View style={[styles.frameChild, styles.framePosition]} />
                      <View style={[styles.frameItem, styles.framePosition]} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recordFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  settingBorder: {
    padding: Padding.p_5xs,
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    borderColor: Color.redHook,
    alignItems: "center",
    justifyContent: "center",
  },
  fighterCardFlexBox: {
    marginTop: 24,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  fighterNameTypo: {
    color: Color.veryLightJAB,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  buySpaceBlock: {
    marginTop: 15,
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingLeft: Padding.p_lg,
    height: 48,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  framePosition: {
    top: 0,
    position: "absolute",
    height: 8,
  },
  title: {
    fontSize: FontSize.appEnglishHeadingH6_size,
    letterSpacing: -1,
    lineHeight: 32,
    color: Color.lightJAB,
    textAlign: "center",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  chevronLeftIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  setting1: {
    marginLeft: 14,
  },
  settingParent: {
    opacity: 0,
    flexDirection: "row",
  },
  pageTitle: {
    flexDirection: "row",
  },
  cardIcon: {
    width: 119,
    height: 160,
  },
  leftRecord: {
    justifyContent: "center",
    flex: 1,
  },
  fighterName: {
    fontSize: FontSize.appEnglishBodyXLarge_size,
    letterSpacing: -0.9,
    lineHeight: 29,
    textAlign: "left",
  },
  historyofboxing2: {
    fontSize: FontSize.appEnglishBodyMedium_size,
    letterSpacing: -0.4,
    lineHeight: 18,
    textAlign: "center",
  },
  buyTicket: {
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingLeft: Padding.p_lg,
    height: 48,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    borderColor: Color.redHook,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buyTicket1: {
    borderColor: Color.goldCross400,
  },
  buyTicket2: {
    borderColor: Color.redHook,
    marginTop: 15,
  },
  fighterNameParent: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    left: 0,
    backgroundColor: Color.redHook,
    width: 153,
  },
  frameItem: {
    right: 0,
    backgroundColor: Color.goldCross400,
    width: 152,
  },
  rectangleParent: {
    borderRadius: Border.br_5xl,
    height: 8,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  record: {
    height: 270,
    marginTop: 32,
  },
  descriptionContainer: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  descriptionContainerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  frameWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  fighterCardInner: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  fighterCard: {
    backgroundColor: Color.blueOverhand950,
    padding: Padding.p_base,
    alignItems: "center",
    borderRadius: Border.br_base,
  },
  predictionApp: {
    backgroundColor: Color.colorGray_100,
    padding: Padding.p_xs,
    borderRadius: Border.br_base,
    flex: 1,
  },
  predictionAppParent: {
    paddingBottom: Padding.p_77xl,
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Frame2;
