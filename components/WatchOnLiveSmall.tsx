import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

export type WatchOnLiveSmallType = {
  logo?: ImageSourcePropType;
  image165?: ImageSourcePropType;
  logo1?: ImageSourcePropType;

  /** Style props */
  propFontWeight?: string;
  propFontFamily?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WatchOnLiveSmall = ({
  logo,
  image165,
  logo1,
  propFontWeight,
  propFontFamily,
}: WatchOnLiveSmallType) => {
  const date1Style = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", propFontWeight),
      ...getStyleValue("fontFamily", propFontFamily),
    };
  }, [propFontWeight, propFontFamily]);

  return (
    <View style={styles.watchOnLiveSmall}>
      <View style={styles.watchOn}>
        <Text style={[styles.date, date1Style]}>Watch on</Text>
      </View>
      <View style={styles.logo}>
        <Image
          style={[styles.logoIcon, styles.logoIconLayout]}
          contentFit="cover"
          source={logo}
        />
  
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "16.56%",
    right: "16.88%",
    width: "66.56%",
    height: "33.44%",
    overflow: "hidden",
    position: "absolute",
  },
  date: {
    fontSize: FontSize.appEnglishBodyMedium_size,
    
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.appEnglishBodySmall,
    color: Color.veryLightJAB,
    textAlign: "left",
  },
  watchOn: {

   height:35,
    backgroundColor: Color.redHook,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",

  },
  logoIcon: {
    top: "33.44%",
    bottom: "33.13%",
    zIndex: 0,
  },
  image165Icon: {
    top: 48,
    width: 32,
    zIndex: 1,
    left: 0,
    position: "absolute",
    height: 32,
  },
  logoIcon1: {
    top: "233.44%",
    bottom: "-166.88%",
    zIndex: 2,
  },
  logo: {
    height:35,
    width: "32.65%",
    top: "0%",
    right: "0%",
    bottom: "0%",
   
    backgroundColor: Color.veryLightJAB,
   
   

  
  },
  watchOnLiveSmall: {
 
    alignContent:'center',
    alignItems:'center',
    flexDirection:'row',
  //  backgroundColor:'red',
    width:100
  },
});

export default WatchOnLiveSmall;
