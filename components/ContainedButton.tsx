import React, { useMemo } from "react";
import { Text, StyleSheet, View ,TouchableOpacity} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";


export type ContainedButtonType = {
  text?: string;

  /** Style props */
  propBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainedButton = ({
  text = "Results",
  propBackgroundColor,
}: ContainedButtonType) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <TouchableOpacity style={[styles.scheduleWrapper, frameView1Style]}>
      <Text style={styles.schedule}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  schedule: {
    fontSize: FontSize.appEnglishBodySmall_size,
    lineHeight: 14,
    fontWeight: "500",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    color: Color.veryLightJAB,
    textAlign: "center",
  },
  scheduleWrapper: {
    flex: 1,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.blueOverhand950,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    marginLeft: 10,
  },
});

export default ContainedButton;
