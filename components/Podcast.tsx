import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Podcast = () => {
  return (
    <View style={styles.podcast}>
      <View style={styles.leftSection}>
        <Text
          style={[styles.boxingnetPodcast, styles.boxingnetPodcastTypo]}
        >{`Boxing.net
Podcast`}</Text>
        <View style={styles.cta}>
          <Text
            style={[styles.historyofboxing2219, styles.boxingnetPodcastTypo]}
          >
            Subscribe now
          </Text>
        </View>
      </View>
      <Image
        style={styles.image369Icon}
        contentFit="cover"
        source={require("../assets/image-369.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxingnetPodcastTypo: {
    textAlign: "center",
    color: Color.veryLightJAB,
    fontFamily: FontFamily.tekoRegular,
    textTransform: "uppercase",
  },
  boxingnetPodcast: {
    fontSize: FontSize.size_5xl,
  
  },
  historyofboxing2219: {
    fontSize: FontSize.appEnglishBodySmall_size,
  },
  cta: {
    borderRadius: Border.br_11xs,
    backgroundColor: Color.darkUppercut950,
    borderStyle: "solid",
    borderColor: Color.darkUppercut950,
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_9xs,
    marginTop: 8,
    alignItems: "center",
  },
  leftSection: {
    alignItems: "center",
  },
  image369Icon: {
    width: 94,
    height: 65,
  },
  podcast: {
    flex: 1,
    borderRadius: Border.br_base,
    backgroundColor: Color.redHook,
    height: 168,
    overflow: "hidden",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_18xl,
    paddingTop: Padding.p_mid,
    alignItems: "center",
  },
});

export default Podcast;
