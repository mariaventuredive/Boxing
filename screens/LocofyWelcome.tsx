import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground } from "react-native";
import WelcomeContainer from "../components/WelcomeContainer";

const LocofyWelcome = () => {
  return (
    <ImageBackground
      style={styles.locofywelcomeIcon}
      resizeMode="cover"
      source={require("../assets/locofywelcome.png")}
    >
      <WelcomeContainer />
      <Image
        style={styles.image367Icon}
        contentFit="cover"
        source={require("../assets/image-367.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image367Icon: {
    width: 630,
    height: 833,
    display: "none",
  },
  locofywelcomeIcon: {
    flex: 1,
  
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 25,
    paddingVertical: 13,
  },
});

export default LocofyWelcome;
