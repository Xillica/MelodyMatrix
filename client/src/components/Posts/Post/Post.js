import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";

import "./styles.css";

const Post = ({ post }) => {
  return (
    <Card className="card">
      <CardMedia className="media" image={post.selectedFile} />
      <div className="overlay">
        <Typography variant="h5">
          {post.title}
          <div></div>
          <h12>by</h12> {post.artist}
        </Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className="overlay2">
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <CardContent>
        <Typography className="title" variant="h5" gutterBottom>
          Notation by : {post.creator}
        </Typography>
      </CardContent>
      <div className="details">
        <Typography variant="body1" color="textSecondary">
          Song key : {post.key}
        </Typography>
      </div>
      <CardActions className="cardActions">
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpIcon fontSize="small" /> LIKE
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" /> DELETE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
