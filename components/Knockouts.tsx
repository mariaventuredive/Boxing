import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import NewsCardContainer from "./NewsCardContainer";

const Knockouts = () => {
  return (
    <ImageBackground
      style={styles.knockoutsIcon}
      resizeMode="cover"
      source={require("../assets/knockouts.png")}
    >
      <NewsCardContainer
        title="Torrez Jr maintains perfect KO record"
        timePosted="27 mins ago"
      />


    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  knockoutsIcon: {
    borderRadius: 18,
    width: 361,
    height: 559,
    overflow: "hidden",
    margin: 5
  },
});

export default Knockouts;
