import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const HistoryData = () => {
  return (
    <LinearGradient
      style={styles.history}
      locations={[0, 1]}
      colors={["#030a12", "rgba(3, 10, 18, 0)"]}
    >
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/history.png")}
      >
        <View style={styles.leftSection}>
          <Text style={styles.historyOfBoxing}>History of boxing</Text>
          <Text
            style={[styles.lennoxLewisKnocked, styles.lennoxLewisKnockedTypo]}
          >
            Lennox Lewis Knocked out Mike Tyson
          </Text>
          <View style={styles.cta}>
            <Text
              style={[
                styles.historyofboxing2219,
                styles.lennoxLewisKnockedTypo,
              ]}
            >
              Read More
            </Text>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  lennoxLewisKnockedTypo: {
    fontSize: FontSize.appEnglishBodySmall_size,
    textAlign: "center",
  },
  historyOfBoxing: {
    fontSize: FontSize.size_5xl,
   
    textAlign: "center",
    color: Color.veryLightJAB,
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  },
  lennoxLewisKnocked: {
    lineHeight: 13,
    textTransform: "capitalize",
    fontWeight: "500",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    color: Color.goldCross400,
    width: 148,
    marginTop: 8,
  },
  historyofboxing2219: {
    color: Color.veryLightJAB,
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
    fontSize: FontSize.appEnglishBodySmall_size,
  },
  cta: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.redHook,
    borderStyle: "solid",
    borderColor: Color.redHook,
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_9xs,
    marginTop: 8,
    alignItems: "center",
  },
  leftSection: {
    alignItems: "center",
  },
  icon: {
    flex: 1,
    borderRadius: Border.br_base,
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xl,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  history: {
    height: 168,
    marginLeft: 16,
  },
});

export default HistoryData;
