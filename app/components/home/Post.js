import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "@rneui/themed";

import AppText from "../Text";
import TouchableIcon from "../TouchableIcon";
import colors from "../../config/colors";

const PostHeader = ({ post }) => (
  <View style={styles.head_container}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.head_image} />
      <AppText style={styles.head_title}>{post.user}</AppText>
    </View>
    <TouchableOpacity hitSlop={10}>
      <AppText style={{ fontWeight: "900", color: colors.bottom }}>...</AppText>
    </TouchableOpacity>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageurl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View
    style={{
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: colors.light,
      paddingLeft: 10,
      paddingVertical: 10,
    }}
  >
    <PostIconH name={"cards-heart-outline"} size={30} />
    <PostIconC name={"comment-outline"} size={30} style={{ marginLeft: 10 }} />
  </View>
);

const PostIconH = ({ name, size, style }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <TouchableIcon
      name={clicked ? "cards-heart" : name}
      size={size}
      iconColor={clicked ? colors.danger : colors.background}
      style={style}
      onPress={() => (clicked ? setClicked(false) : setClicked(true))}
    />
  );
};
const PostIconC = ({ name, size, style }) => {
  return (
    <TouchableIcon
      name={name}
      size={size}
      iconColor={colors.background}
      style={style}
    />
  );
};

const PostLikes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <AppText style={{ fontWeight: "600" }}>
      {Platform.OS === "android"
        ? post.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : post.likes.toLocaleString("en")}
    </AppText>
    <AppText> likes</AppText>
  </View>
);

const PostCaption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <AppText>
      <AppText style={{ fontWeight: "600" }}>{post.user}</AppText>
      <AppText> {post.caption}</AppText>
    </AppText>
  </View>
);

const PostCommentsSection = ({ post }) => {
  const [showComments, setShowComments] = useState(0);
  return (
    <View style={{ marginTop: 5 }}>
      {!!post.comments.length && (
        <View>
          {post.comments.length > 1 ? (
            <>
              <TouchableOpacity
                onPress={() => {
                  setShowComments(1);
                }}
              >
                <AppText style={{ color: "gray" }}>
                  View all {post.comments.length} comments
                </AppText>
              </TouchableOpacity>
              {showComments ? (
                <PostComments post={post} />
              ) : (
                <PostSingleComment post={post} />
              )}
            </>
          ) : (
            <>
              <AppText style={{ color: "gray" }}>View 1 comment</AppText>
              <PostSingleComment post={post} />
            </>
          )}
        </View>
      )}
    </View>
  );
};

const PostComments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <AppText style={{ fontWeight: "600" }}>{comment.user}</AppText>
        <AppText> {comment.comment}</AppText>
      </View>
    ))}
  </>
);

const PostSingleComment = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <AppText style={{ fontWeight: "600" }}>{post.comments[0].user}</AppText>
    <AppText> {post.comments[0].comment}</AppText>
  </View>
);

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
      <View style={{ marginHorizontal: 10, marginTop: 5 }}>
        <PostLikes post={post} />
        <PostCaption post={post} />
        <PostCommentsSection post={post} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  head_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.light,
  },
  head_image: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    borderRadius: 50,
    marginleft: 6,
    borderWidth: 1.6,
    borderColor: "#FF8501",
  },
  head_title: {
    fontSize: 14,
    marginLeft: 5,
    fontWeight: "700",
    color: colors.bottom,
  },
});
