import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type HeaderComponentType = {
  mainHeading?: string;
  tittleValue?: string;
};

const HeaderComponent = ({ mainHeading, tittleValue }: HeaderComponentType) => {
  return (
    <View style={styles.parentFlexBox}>
      <Text style={[styles.text, styles.textLayout]}>{mainHeading}</Text>
      <View style={[styles.chooseAppLanguageWrapper, styles.parentFlexBox]}>
        <Text style={[styles.chooseAppLanguage, styles.textLayout]}>
          {tittleValue}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textLayout: {
    width: 342,
    textAlign: "center",
    color: Color.veryLightJAB,
 
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    fontWeight: "700",
    fontFamily: FontFamily.changaBold,
  },
  chooseAppLanguage: {
    fontSize: FontSize.size_21xl,
    textTransform: "uppercase",
    fontFamily: FontFamily.tekoRegular,
  },
  chooseAppLanguageWrapper: {
    marginTop: 5,
  },
});

export default HeaderComponent;
