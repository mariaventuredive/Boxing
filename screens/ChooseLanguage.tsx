import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import HeaderComponent from "../components/HeaderComponent";
import OutlinedButton from "../components/OutlinedButton";
import { Border, Padding, Color } from "../GlobalStyles";

const ChooseLanguage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (

    <ImageBackground
      style={styles.chooseLanguageIcon}
      resizeMode="stretch"

      source={require("../assets/chooselanguage.png")}
    >
      <Image
        style={styles.image350Icon}
        contentFit="cover"
        source={require("../assets/image-350.png")}
      />

      <View style={styles.frameParent}>
        <HeaderComponent
          mainHeading="اختار لغة التطبيق "
          tittleValue="Choose App language"
        />
        <View style={styles.buttoncomponentParent}>
          <OutlinedButton
            buttonText="English"
            onButtonComponentPress={() => navigation.navigate("Onboarding")}
          />
          <OutlinedButton
            buttonText="عربي"
            onButtonComponentPress={() => navigation.navigate("Onboarding")}
          />
        </View>
      </View>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  image350Icon: {
    marginTop: -244.5,
    marginLeft: -65,
    top: "50%",
    left: "50%",
    width: 134,
    height: 55,
    zIndex: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "7.27%",
    width: "36.63%",
    top: "17.02%",
    right: "31.56%",
    bottom: "75.71%",
    left: "31.81%",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "none",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  buttoncomponentParent: {
    flexDirection: "row",
    marginTop: 22,
    alignSelf: "stretch",
  },
  frameParent: {
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 2,
    alignSelf: "stretch",
    flex: 1,
  },
  chooseLanguageIcon: {

    flex: 1,
    height: 1289,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_mid,
    paddingVertical: 70,
    overflow: "hidden",
   
  },
});

export default ChooseLanguage;
