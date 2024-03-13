import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type SearchType = {
  searchCriteriaText?: string;
};

const Search = ({ searchCriteriaText }: SearchType) => {
  return (
    <View style={[styles.search, styles.searchFlexBox]}>
      <View style={[styles.container, styles.searchFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
        <TextInput style={styles.searchByFighter}
          placeholder={searchCriteriaText}
          placeholderTextColor={Color.veryLightJAB}
        />
      </View>
      <LinearGradient
        style={[styles.vuesaxWrapper, styles.searchFlexBox]}
        locations={[0, 1]}
        colors={["rgba(0, 158, 61, 0.1)", "rgba(223, 8, 38, 0.1)"]}
      >
        <Image
          style={styles.vuesaxIcon}
          contentFit="cover"
          source={require("../assets/vuesax.png")}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  searchFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 16,
    height: 16,
  },
  searchByFighter: {
    fontSize: FontSize.appEnglishBodySmall_size,
    lineHeight: 14,
    fontWeight: "500",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    color: Color.veryLightJAB,
    textAlign: "left",
    width: 270,
    opacity: 0.5,
    marginLeft: 8,
  },
  container: {
    flex: 1,
    zIndex: 0,
  },
  vuesaxIcon: {
    width: 18,
    height: 18,
  },
  vuesaxWrapper: {
    position: "absolute",
    top: 1,
    right: 1,
    borderRadius: Border.br_4xl,
    backgroundColor: "transparent",
    padding: Padding.p_mini,
    display: "none",
    zIndex: 1,
  },
  search: {
    alignSelf: "stretch",
    borderRadius: Border.br_base,
    backgroundColor: Color.blueOverhand950,
    borderStyle: "solid",
    borderColor: Color.darkUppercut950,
    borderWidth: 1,
    height: 48,
    overflow: "hidden",
    justifyContent: "space-between",
    padding: Padding.p_base,
  },
});

export default Search;
