import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SkipButton from "../components/SkipButton";
import Property1onboard from "../components/Property1onboard";
import { Border, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.onboarding2Icon}
      resizeMode="cover"
      source={require("../assets/onboarding2.png")}
    >
      <SkipButton />
      <Property1onboard
        tittle="Lets Start float like a butterfly, sting like a bee"
        subTittle="Breaking Down the Ringside Action and Champion Showdowns"
        onFrameTouchableOpacityPress={() => navigation.navigate("Onboarding2")}
        pageNo={2}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  onboarding2Icon: {

    flex: 1,

    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_14xl,
    paddingTop: Padding.p_19xl,
    paddingBottom: Padding.p_31xl,
  },
});

export default Onboarding1;
