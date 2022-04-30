import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/48/a9a9a9/like.png",
    likedImgUrl:
      "https://img.icons8.com/fluency-systems-regular/48/fa314a/like.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/48/a9a9a9/comments--v1.png",
  },
  {
    name: "Pin",
    imageUrl: "https://img.icons8.com/color/344/map-pin.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 8 }}>
        <PostFooter post={post} />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 12 }}>
        <Caption post={post} />
      </View>
      <View style={{ marginTop: 12, marginLeft: 20 }}>
        <Comments post={post} />
        <CommentsOpen post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      paddingTop: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.postHead} />
      <Text style={{ marginLeft: 10, fontSize: 16, color: "grey" }}>
        {post.user}
      </Text>
    </View>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 350 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftFootIcons}>
        <Icon imgStyle={styles.postFoot} imgUrl={postFooterIcons[1].imageUrl} />
        <Icon imgStyle={styles.postFoot} imgUrl={postFooterIcons[0].imageUrl} />
        <Text style={styles.likesText}>
          {post.likes.toLocaleString("en")} likes
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Icon imgStyle={styles.pin} imgUrl={postFooterIcons[2].imageUrl} />
        <Text style={styles.locoText}>{post.location}</Text>
      </View>
    </View>
  );
};

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Caption = ({ post }) => {
  return (
    <View>
      <Text style={styles.text}>{post.caption}</Text>
      <Text style={styles.unemphasized}>
        {post.date} @ {post.time}
      </Text>
    </View>
  );
};

const Comments = ({ post }) => (
  <View>
    {!!post.comments.length && (
      <Text style={{ color: "#a9a9a9", marginLeft: 5 }}>
        View {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);

const CommentsOpen = ({ post }) => (
  <View>
    {post.comments.map((comment, index) => (
      <View key={index}>
        <Text style={styles.text}>
          <Text style={styles.textBold}>{comment.user}</Text> -{" "}
          {comment.comment}
        </Text>
        <Text style={styles.unemphasized}>
          {comment.date} @ {comment.time}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  postHead: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#cccccc",
  },
  postFoot: {
    width: 33,
    height: 33,
    marginLeft: 10,
    flexDirection: "row",
  },
  pin: {
    width: 20,
    height: 40,
    flexDirection: "row",
  },
  leftFootIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 5,
  },
  likesText: {
    marginTop: 10,
    fontSize: 12,
    color: "grey",
  },
  locoText: {
    marginTop: 15,
    fontSize: 12,
    color: "grey",
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 14,
    color: "grey",
  },
  textBold: {
    fontSize: 16,
  },
  unemphasized: { color: "grey", marginLeft: 10, fontSize: 12 },
});

export default Post;
