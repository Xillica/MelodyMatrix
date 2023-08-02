import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { getPosts } from "../../actions/posts";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import "./styles.css";

//Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const CreatorHome = () => {
  const [currentId, setCurrentId] = useState(null);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    gsap.from(".head", { opacity: 0, duration: 2, y: 100 });
    gsap.from(".head .powered", { opacity: 0, duration: 2, delay: 0.3 });
    gsap.from(".head .logo-m", { opacity: 0, duration: 3, delay: 0.3, x: 100 });

    gsap.from(".content1", {
      opacity: 0,
      duration: 1.5,
      x: 100,
      scrollTrigger: {
        trigger: ".content1",
        start: "top 80%", // Start animation when 80% of the element is visible in the viewport
        end: "bottom 20%", // End animation when 20% of the element is still visible in the viewport
      },
    });
    setUser(JSON.parse(localStorage.getItem("profile")));

    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Container maxWidth="100%">
        <Grow in>
          <Container className="postsContainer" maxWidth="100%">
            <section className="head">
              <div className="logo-m">M</div>
              <div>Melody`Matrix</div>
              <div className="powered">Powered by Chipsey</div>
              <br />
              <div className="greeting">
                {user
                  ? `Nice to Have You Back, ${user?.result.name}.`
                  : "SignUp is Free! We are Waiting..."}
                <div className="userID">
                  {user &&
                    `MelodyMatrix ID : ${user?.result._id}.`}
                </div>
              </div>
            </section>

            <section className="content1">
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
            </section>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default CreatorHome;
