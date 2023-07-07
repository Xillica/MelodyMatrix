import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import "./styles.css";

const CreatorHome = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Container maxWidth="100%">
        <Grow in>
          <Container className="postsContainer" maxWidth="100%">
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={5}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>

              <Grid item xs={12} sm={7}>
                <Grid container justifyContent="flex-end">
                  <Grid item xs={12} sm={5}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default CreatorHome;
