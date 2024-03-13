import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type OutlinedButtonType = {
  buttonText?: string;

  /** Action props */
  onButtonComponentPress?: () => void;
};

const OutlinedButton = ({
  buttonText = "عربي",
  onButtonComponentPress,
}: OutlinedButtonType) => {
  return (
    <TouchableOpacity
      style={styles.buttoncomponent}
      activeOpacity={0.2}
      onPress={onButtonComponentPress}
    >
      <Text style={styles.historyofboxing226}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  historyofboxing226: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.changaBold,
    color: Color.veryLightJAB,
    textAlign: "center",
  },
  buttoncomponent: {
    flex: 1,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.redHook,
    borderWidth: 2,
    height: 61,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_base,
    marginLeft: 16,
  },
});

export default OutlinedButton;
