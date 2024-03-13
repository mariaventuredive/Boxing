import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const SplashBoxing = () => {
  return (
    <View style={styles.splashBoxing}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 156,
    height: 71,
  },
  splashBoxing: {
    //borderRadius: Border.br_5xl,
    backgroundColor: Color.darkUppercut950,
    flex: 1,
    width: "100%",
    height: 929,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 72,
    paddingVertical: 309,
  },
});

export default SplashBoxing;
