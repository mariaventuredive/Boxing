import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import OutlinedButton from "./OutlinedButton";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const WelcomeContainer = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.frameParent, styles.frameFlexBox]}>
      <View style={[styles.frameParent, styles.frameFlexBox]}>
        <Text
          style={[styles.welcomeToThe, styles.weWouldLoveFlexBox]}
        >{`Welcome to the
boxing.net`}</Text>
        <Text
          style={[styles.weWouldLove, styles.weWouldLoveFlexBox]}
        >{`We would love to get to
know you better. please share some
information about yourself.`}</Text>
      </View>
      <View style={[styles.frameGroup, styles.frameFlexBox]}>
        <View style={styles.buttoncomponentParent}>
          <OutlinedButton
            buttonText="REGISTER"
            onButtonComponentPress={() => navigation.navigate("Onboarding")}
          />
          <OutlinedButton
            buttonText="LOGIN"
            onButtonComponentPress={() => navigation.navigate("Onboarding")}
          />
        </View>
        <TouchableOpacity
          style={styles.historyofboxing226}
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Main" })
          }
        >
          <Text style={styles.surfAsAVisitor}>Surf as a visitor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  weWouldLoveFlexBox: {
    textAlign: "left",
    color: Color.veryLightJAB,
    fontWeight: "500",
    alignSelf: "stretch",
  },
  welcomeToThe: {
    fontSize: FontSize.size_41xl,
   
    fontFamily: FontFamily.appEnglishBodySmall,
    textTransform: "uppercase",
  },
  weWouldLove: {
    lineHeight: 24,
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    marginTop: 20,
    fontSize: FontSize.size_base,
  },
  frameParent: {
    justifyContent: "center",
  },
  buttoncomponentParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  surfAsAVisitor: {
    fontWeight: "600",
    fontFamily: FontFamily.tekoSemiBold,
    color: Color.goldCross400,
    textAlign: "center",
    fontSize: FontSize.size_base,
    textTransform: "uppercase",
  },
  historyofboxing226: {
    marginTop: 24,
  },
  frameGroup: {
    marginTop: 60,
  },
});

export default WelcomeContainer;
