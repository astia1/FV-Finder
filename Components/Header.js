import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {" "}
            🥭 FV <Text style={styles.innerText}>finder</Text>
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.unread}>
          <Text style={styles.unreadText}>Unread: 0</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 25,
  },
  text: {
    height: 50,
    fontSize: 20,
    color: "grey",
  },
  innerText: {
    fontSize: 16,
  },
  textContainer: {
    flexDirection: "row",
  },
  unread: {
    backgroundColor: "#FF8242",
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadText: {
    color: "white",
    fontWeight: "600",
  },
});

export default Header;
