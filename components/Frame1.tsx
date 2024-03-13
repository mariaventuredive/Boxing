import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type Frame1Type = {
  style?: StyleProp<ViewStyle>;
};

const Frame1 = ({ style }: Frame1Type) => {
  return (
    <View style={[styles.cardsParent, style]}>
      <View style={styles.cards}>
        <View style={styles.pageTitleWrapper}>
          <View>
            <Text style={[styles.title, styles.titleTypo]}>the tape</Text>
          </View>
        </View>
        <View style={styles.tapeNew}>
          <View style={styles.rightFighterImageParent}>
            <Image
              style={[styles.rightFighterImage, styles.fighterPosition]}
              contentFit="cover"
              source={require("../assets/right-fighter-image1.png")}
            />
            <Image
              style={[styles.leftFighterImage, styles.fighterPosition]}
              contentFit="cover"
              source={require("../assets/left-fighter-image1.png")}
            />
            <View style={[styles.fightersName, styles.fightersPosition]}>
              <Text style={[styles.title, styles.titleTypo]}>FAZLIDDIN</Text>
              <Text style={[styles.fighter2, styles.titleTypo]}>Qarnawy</Text>
            </View>
            <View style={[styles.fightersName1, styles.fightersPosition]}>
              <Text style={[styles.title, styles.titleTypo]}>BUTAEV</Text>
              <Text style={[styles.fighter2, styles.titleTypo]}>imadman</Text>
            </View>
          </View>
          <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
            <View>
              <View style={styles.parent}>
                <Text style={styles.text}>47</Text>
                <Text style={[styles.n, styles.nTypo]}>{`N* `}</Text>
                <Image
                  style={styles.logoIcon}
                  contentFit="cover"
                  source={require("../assets/logo8.png")}
                />
              </View>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.parent}>
                <Text style={styles.text}>47</Text>
                <Text style={[styles.n, styles.nTypo]}>{`N* `}</Text>
                <Image
                  style={styles.logoIcon}
                  contentFit="cover"
                  source={require("../assets/logo8.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.containerDetails, styles.moreIconSpaceBlock]}>
            <View style={[styles.nickname, styles.rightFlexBox]}>
              <Text
                style={[styles.theBunchier, styles.theTypo]}
              >{`"The bunchier" `}</Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>
                nickname
              </Text>
              <Text
                style={[styles.theBunchier1, styles.theTypo]}
              >{`"The bunchier" `}</Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Yrs</Text>
              </Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>Age</Text>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Yrs</Text>
              </Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text style={[styles.theBunchier, styles.theTypo]}>Usa</Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>
                Nationality
              </Text>
              <Text
                style={[styles.theBunchier1, styles.theTypo]}
              >{`Ukraine `}</Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <View style={styles.left}>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>147{` `}</Text>
                  <Text style={styles.lbs1}>lbs</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>66.82{` `}</Text>
                  <Text style={styles.yrs1Layout}>kg</Text>
                </Text>
              </View>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>Weight</Text>
              <View style={[styles.right, styles.rightFlexBox]}>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>66.82{` `}</Text>
                  <Text style={styles.yrs1Layout}>kg</Text>
                </Text>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>147{` `}</Text>
                  <Text style={styles.yrs1Layout}>lbs</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <View style={styles.left}>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>5'9½{` `}</Text>
                  <Text style={styles.yrs1Layout}>In</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>1.77{` `}</Text>
                  <Text style={styles.yrs1Layout}>cm</Text>
                </Text>
              </View>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>Hight</Text>
              <View style={styles.left}>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>1.77{` `}</Text>
                  <Text style={styles.yrs1Layout}>cm</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>5'9½{` `}</Text>
                  <Text style={styles.yrs1Layout}>In</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>Orthodox{` `}</Text>
                <Text style={styles.yrs1Layout}>(R)</Text>
              </Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>Stance</Text>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>Orthodox{` `}</Text>
                <Text style={styles.yrs1Layout}>(R)</Text>
              </Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <View style={styles.left}>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>w</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>l</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>D</Text>
                </Text>
              </View>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>Record</Text>
              <View style={styles.left}>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>w</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>l</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>D</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <View style={styles.left}>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>KOs</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>KOs %</Text>
                </Text>
              </View>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>KOS</Text>
              <View style={styles.left}>
                <Text style={[styles.yrs, styles.yrsTypo]}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>KOs</Text>
                </Text>
                <Text style={styles.nTypo}>
                  <Text style={styles.text2}>30{` `}</Text>
                  <Text style={styles.yrs1Layout}>KOs %</Text>
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>DOB</Text>
              </Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>DOB</Text>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>DOB</Text>
              </Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Debut</Text>
              </Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>Debut</Text>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Debut</Text>
              </Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Rounds</Text>
              </Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>
                Pro Rounds
              </Text>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Rounds</Text>
              </Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>bouts</Text>
              </Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>
                Total bouts
              </Text>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Total</Text>
              </Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Ranking</Text>
              </Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>Ranking</Text>
              <Text style={[styles.yrs, styles.yrsTypo]}>
                <Text style={styles.text2}>30{` `}</Text>
                <Text style={styles.yrs1Layout}>Ranking</Text>
              </Text>
            </View>
            <View style={[styles.frameParent, styles.moreIconSpaceBlock]}>
              <Text
                style={[styles.ibfWorldHeavyContainer, styles.ibfContainerTypo]}
              >
                <Text style={styles.text2}>IBF World Heavy 2018{` `}</Text>
                <Text style={styles.yrs1Layout}>+3 others</Text>
              </Text>
              <Text style={[styles.nickname1, styles.yrs1Layout]}>Titles</Text>
              <Text
                style={[
                  styles.ibfWorldHeavyContainer1,
                  styles.ibfContainerTypo,
                ]}
              >
                <Text style={styles.text2}>IBF World Heavy 2018{` `}</Text>
                <Text style={styles.yrs1Layout}>+3 others</Text>
              </Text>
            </View>
          </View>
          <Image
            style={[styles.moreIcon, styles.moreIconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/more1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "center",
    lineHeight: 32,
    letterSpacing: -1,
    fontSize: FontSize.appEnglishHeadingH6_size,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  fighterPosition: {
    top: 0,
    position: "absolute",
    height: 218,
  },
  fightersPosition: {
    left: "50%",
    top: "50%",
    marginTop: 33,
    position: "absolute",
    alignItems: "center",
  },
  moreIconSpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  nTypo: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  rightFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  theTypo: {
    display: "flex",
    height: 14,
    lineHeight: 24,
    letterSpacing: -0.6,
    fontSize: FontSize.appEnglishBodyLarge_size,
    color: Color.veryLightJAB,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
    alignItems: "center",
    flex: 1,
  },
  yrs1Layout: {
    lineHeight: 14,
    letterSpacing: -0.4,
    fontSize: FontSize.appEnglishBodySmall_size,
    color: Color.goldCross400,
  },
  yrsTypo: {
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "left",
  },
  ibfContainerTypo: {
    width: 128,
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  title: {
    color: Color.lightJAB,
  },
  pageTitleWrapper: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  rightFighterImage: {
    right: 0,
    width: 168,
  },
  leftFighterImage: {
    left: 0,
    width: 169,
  },
  fighter2: {
    color: Color.redHook,
    marginTop: -8,
  },
  fightersName: {
    marginLeft: 43,
  },
  fightersName1: {
    marginLeft: -138.5,
  },
  rightFighterImageParent: {
    height: 218,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_21xl,
    fontWeight: "700",
    fontFamily: FontFamily.tekoBold,
    textAlign: "left",
    color: Color.veryLightJAB,
    textTransform: "uppercase",
    lineHeight: 32,
  },
  n: {
    color: Color.goldCross400,
    lineHeight: 24,
    letterSpacing: -0.6,
    marginLeft: 8,
    fontSize: FontSize.appEnglishBodyLarge_size,
  },
  logoIcon: {
    width: 28,
    height: 14,
    marginLeft: 8,
  },
  parent: {
    flexDirection: "row",
  },
  frameContainer: {
    alignItems: "flex-end",
  },
  frameParent: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  theBunchier: {
    textAlign: "left",
  },
  nickname1: {
    textAlign: "left",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  theBunchier1: {
    textAlign: "right",
  },
  nickname: {
    alignSelf: "stretch",
  },
  text2: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    color: Color.veryLightJAB,
  },
  yrs: {
    textAlign: "left",
  },
  lbs1: {
    fontSize: FontSize.size_3xs,
    letterSpacing: -0.3,
    lineHeight: 12,
    color: Color.goldCross400,
  },
  left: {
    alignItems: "center",
    flexDirection: "row",
  },
  right: {
    width: 91,
  },
  ibfWorldHeavyContainer: {
    textAlign: "left",
  },
  ibfWorldHeavyContainer1: {
    textAlign: "right",
  },
  containerDetails: {
    alignItems: "center",
  },
  moreIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
    width: "100%",
    display: "none",
  },
  tapeNew: {
    borderRadius: Border.br_base,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    marginTop: 24,
    alignItems: "center",
    alignSelf: "stretch",
  },
  cards: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkUppercut950,
    padding: Padding.p_base,
    alignItems: "center",
    flex: 1,
  },
  cardsParent: {
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
  },
});

export default Frame1;
