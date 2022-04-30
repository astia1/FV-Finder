import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabsIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/144/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/a9a9a9/home.png",
  },
  {
    name: "Profile",
    active: "https://img.icons8.com/ios-glyphs/344/test-account.png",
    inactive: "https://img.icons8.com/ios-glyphs/344/a9a9a9/test-account.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/500/search--v1.png",
    inactive: "https://img.icons8.com/ios/500/a9a9a9/search--v1.png",
  },
  {
    name: "Plus",
    active: "https://img.icons8.com/fluency-systems-regular/48/plus.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/a9a9a9/plus.png",
  },
  {
    name: "Map",
    active: "https://img.icons8.com/material-filled/344/address.png",
    inactive: "https://img.icons8.com/material/344/a9a9a9/address.png",
  },
];

const BottomTabs = () => {
  const [tab, setTab] = useState("home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setTab(icon.name)}>
      <Image source={{ uri: icon.inactive }} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {bottomTabsIcons.map((icon, index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 6,
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 6,
    // borderWidth: 1.6,
    // borderColor: "#cccccc",
  },
});

export default BottomTabs;
