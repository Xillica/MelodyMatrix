import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import "./styles.css";
import { CircularProgress, Grid } from "@mui/material";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  // console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid xs={12} sm={12} container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={4} sm={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
