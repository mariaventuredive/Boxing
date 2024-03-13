import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Border, Padding, Color } from "../GlobalStyles";

export type LohoHeaderType = {
  icon?: ImageSourcePropType;

  /** Action props */
  onVectorPress?: () => void;
};

const LohoHeader = ({ icon, onVectorPress }: LohoHeaderType) => {
  return (
    <View style={[styles.head, styles.headFlexBox]}>
      <View style={[styles.frameParent, styles.headFlexBox]}>
        <View style={[styles.rectangleWrapper, styles.vectorParentFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-75.png")}
          />
        </View>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <View style={[styles.vectorParent, styles.vectorParentFlexBox]}>
          <TouchableOpacity
            style={styles.vector}
            activeOpacity={0.2}
            onPress={onVectorPress}
          >
            <Image style={styles.icon} contentFit="cover" source={icon} />
          </TouchableOpacity>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  vectorParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    borderRadius: Border.br_4xs,
    width: 32,
    height: 32,
  },
  rectangleWrapper: {
    width: 72,
  },
  vectorIcon: {
    width: 58,
    height: 25,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  vector: {
    width: 16,
    height: 16,
  },
  vectorIcon1: {
    width: 15,
    marginLeft: 24,
    height: 16,
  },
  vectorParent: {
    padding: Padding.p_5xs,
  },
  frameParent: {
    flex: 1,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  head: {
    alignSelf: "stretch",
    backgroundColor: Color.colorGray_200,
    paddingBottom: Padding.p_xl,
  },
});

export default LohoHeader;
