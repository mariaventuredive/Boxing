
import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type InActiveTabProps = {
  name?: string;
  active?: Boolean;
  style?: StyleProp<ViewStyle>;
};

const bottomTabItemsNormal = {
  Home: require('../assets/image-3661.png'),
  Fights: require('../assets/image-358.png'),
  Community: require('../assets/image-359.png'),
  News: require('../assets/image-360.png'),
  More: require('../assets/image-361.png'),
};

const InActiveTab = ({ style, name, active }: InActiveTabProps) => {
  const imageSource = bottomTabItemsNormal[name || "Home"]; // Default to Home if name is not provided or invalid
  return (
    <View style={[styles.tab6, style]}>
      <Image
        style={[styles.imageIcon, {
          tintColor: active ? Color.redHook : Color.goldCross400
        }]}
        contentFit="cover"

        source={imageSource}
      />
      <Text style={[styles.label, { color: active ? Color.redHook : Color.goldCross400, }]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    width: 25,
    height: 24,
  },
  label: {
    fontSize: FontSize.size_3xs,
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.goldCross400,
    textAlign: "center",
    marginTop: 10,
    alignSelf: "stretch",
  },
  tab6: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
  },
});

export default InActiveTab;
