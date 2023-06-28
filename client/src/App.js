import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import SearchAppBar from "./components/SearchAppBar";
import "./styles.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Container maxWidth="100%">
        <SearchAppBar />
        <Grow in>
          <Container className="postsContainer" maxWidth="100%">
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={5}>
                <Posts />
              </Grid>

              <Grid item xs={12} sm={7}>
                <Grid container justifyContent="flex-end">
                  <Grid item xs={12} sm={5}>
                    <Form />
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

export default App;
