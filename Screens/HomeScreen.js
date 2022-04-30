import React from "react";
import Header from "../Components/Header";
import Post from "../Components/Post";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {<Header />}
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
