import React from "react";
//import useStyles from '@material-ui/core/styles'
import Link from "next/link";
import { useRouter } from "next/router";
import { Paper, Grid, Divider, Box, Button, Typography } from "@material-ui/core";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeAnimation from "../components/WelcomeAnimation"

const useStyles = makeStyles((theme) => {
  return {
    root: {
      "& .MuiGrid-item": {
        padding: "0px",
      },
    },
    button: {
      margin: theme.spacing(1),
      background: "#BE399E",
      background: "-webkit-linear-gradient(top left, #36cbeb, #0971ab)",
      background: "moz-linear-gradient(top left, #36cbeb, #0971ab)",
      background: "linear-gradient(to bottom right, #36cbeb, #0971ab)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
    },
    bannerImage: {
      //margin: '1px',
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    padding: {
      padding: "4%",
      [theme.breakpoints.down("md")]: {
        padding: "3%",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "2%",
      },
    },

    paper: {
      padding: theme.spacing(3),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    root: {
      flexGrow: 1,
    },
  };
});

export default function WelcomeBanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mt={4}>
        <Paper elevation={0} className={classes.paper}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
          >
            <Grid
              item
              xs={0}
              sm={12}
              md={5}
              lg={5}
              alignItems="center"
              //className={classes.bannerImage}
            >
              <WelcomeAnimation />
            </Grid>
            <Grid item xs={0} sm={12} md={5} lg={5} alignItems="center">
              <Typography
                variant="h3"
                component="h1"
                align="center"
                color="primary"
              >
                Discovery Environment 2.0
              </Typography>
              <Box mt={3}>
                <Link href="/form">
                  <Button size="large" color="white" className={classes.button}>
                    Now Live
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
