import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

export type SizeBigImageYesType = {
  tag?: string;
  newsTitle?: string;
};

const SizeBigImageYes = ({
  tag = "story of day",
  newsTitle = "Chris Eubank On Conor   BennShowdown: “It Will Be An Execution”",
}: SizeBigImageYesType) => {
  return (
    <View style={[styles.sizebigImageyes, styles.footerSpaceBlock]}>
      <Image
        style={[styles.mainImageIcon, styles.mainImageIconLayout]}
        contentFit="cover"
        source={require("../assets/main-image5.png")}
      />
      <View style={styles.container}>
        <View style={styles.tag}>
          <Text style={styles.storyOfDay}>{tag}</Text>
        </View>
        <Text style={styles.historyofboxing2211}>{newsTitle}</Text>
      </View>
      <View style={[styles.footer, styles.footerSpaceBlock]}>
        <View style={styles.copyright}>
          <Text style={styles.timeTypo}>Boxing.net</Text>
          <Image
            style={[styles.copyrightChild, styles.mainImageIconLayout]}
            contentFit="cover"
            source={require("../assets/vector-5351.png")}
          />
          <Text style={[styles.timePosted1, styles.timeTypo]}>27 mins ago</Text>
        </View>
        <Image
          style={styles.fiRrMenuDotsIcon}
          contentFit="cover"
          source={require("../assets/firrmenudots4.png")}
        />
      </View>
      <Image
        style={styles.settingIcon}
        contentFit="cover"
        source={require("../assets/setting5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footerSpaceBlock: {
    paddingHorizontal: Padding.p_base,
 
    alignItems: "center",
  },
  mainImageIconLayout: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  timeTypo: {
    opacity: 0.5,
    textTransform: "lowercase",
    fontSize: FontSize.appEnglishBodySmall_size,
    color: Color.veryLightJAB,
    textAlign: "left",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
  },
  mainImageIcon: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderBottomRightRadius: Border.br_11xs,
    borderBottomLeftRadius: Border.br_11xs,
    height: 160,
    zIndex: 0,
  },
  storyOfDay: {
    fontSize: FontSize.size_3xs,

    textTransform: "capitalize",
    color: Color.redHook,
    display: "flex",
  
    textAlign: "left",
    fontFamily: FontFamily.webEnglishCaptionXSmall,
    fontWeight: "500",
    alignItems: "center",
  },
  tag: {
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: Color.redHook,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorGray_300,
    height:30
  },
  historyofboxing2211: {
    fontSize: FontSize.appEnglishBodyLarge_size,
    
    textTransform: "uppercase",
    fontFamily: FontFamily.tekoRegular,
    color: Color.veryLightJAB,
    textAlign: "left",
    marginTop: 12,
    alignSelf: "stretch",
  },
  container: {
    zIndex: 1,
    marginTop: 12,
    alignSelf: "stretch",
  },
  copyrightChild: {
    maxHeight: "100%",
    marginLeft: 8,
  },
  timePosted1: {
    marginLeft: 8,
  },
  copyright: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  fiRrMenuDotsIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  footer: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_xs,
    zIndex: 2,
    flexDirection: "row",
    marginTop: 12,
  },
  settingIcon: {
    position: "absolute",
    bottom: 257,
    left: 25,
    borderRadius: Border.br_5xs,
    width: 28,
    height: 28,
    zIndex: 3,
  },
  sizebigImageyes: {
    borderRadius: Border.br_base,
    paddingVertical: 0,
    backgroundColor: Color.colorGray_300,
    alignSelf: "stretch",
    width:'100%'
  },
});

export default SizeBigImageYes;
