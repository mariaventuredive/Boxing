import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

export type InnerviewsType = {
  style?: StyleProp<ViewStyle>;
};

const Innerviews = ({ style }: InnerviewsType) => {
  return (
    <View style={[styles.innerviews, style, styles.cardsFlexBox]}>
      <View style={[styles.cards, styles.cardsFlexBox]}>
        <View style={[styles.pageTitleWrapper, styles.wrapperFlexBox]}>
          <View>
            <Text style={[styles.title, styles.titleTypo]}>
              Livestream access
            </Text>
          </View>
        </View>
        <ImageBackground
          style={[styles.frame288833765226Wrapper, styles.wrapperFlexBox]}
          resizeMode="cover"
          source={require("../assets/frame1000002459.png")}
        >
          <View style={styles.frame288833765226}>
            <Text style={[styles.historyofboxing226, styles.titleTypo]}>
              Book a livestream spot
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  titleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.appEnglishBodySmall,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  title: {
    fontSize: FontSize.appEnglishHeadingH6_size,
    letterSpacing: -1,
    lineHeight: 32,
    color: Color.lightJAB,
  },
  pageTitleWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  historyofboxing226: {
    fontSize: FontSize.appEnglishBodySmall_size,
    color: Color.veryLightJAB,
  },
  frame288833765226: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.redHook,
    borderStyle: "solid",
    borderColor: Color.redHook,
    borderWidth: 2,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  frame288833765226Wrapper: {
    borderRadius: Border.br_base,
    height: 250,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.darkUppercut950,
    padding: Padding.p_base,
    alignItems: "center",
  },
  innerviews: {
    paddingBottom: Padding.p_77xl,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default Innerviews;
