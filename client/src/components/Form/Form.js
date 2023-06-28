import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import "./styles.css";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    artist: "",
    key: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className="paper">
      <form
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Contribute a Song</Typography>
        <TextField
          sx={{ my: 0.5 }}
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          sx={{ my: 0.5 }}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          sx={{ my: 0.5 }}
          name="artist"
          variant="outlined"
          label="Artist"
          fullWidth
          value={postData.artist}
          onChange={(e) => setPostData({ ...postData, artist: e.target.value })}
        />
        <TextField
          sx={{ my: 0.5 }}
          name="key"
          variant="outlined"
          label="Key"
          fullWidth
          value={postData.key}
          onChange={(e) => setPostData({ ...postData, key: e.target.value })}
        />

        <div className="fileInput">
          <FileBase
            sx={{ my: 0.5 }}
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          sx={{ my: 0.5 }}
          className="buttonSubmit"
          variant="outlined"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          CREATE
        </Button>
        <Button
          sx={{ my: 0.5 }}
          variant="outlined"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          CLEAR
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
