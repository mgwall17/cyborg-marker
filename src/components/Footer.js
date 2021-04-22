import { Typography, Box,Grid } from '@material-ui/core'
import React from "react"
import { makeStyles } from "@material-ui/core/styles"; 
import Image from 'next/link'
  
const useStyles = makeStyles((theme) => {
  return {
    footer: {
      textDecoration: "none",
      color:"#0971ab",
    }
  }
});

function Footer() {
  const classes = useStyles();
    return (
      <React.Fragment>
        <div>
          <Box mt={6} mb={3} mx={2}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item md={7} align="center">
                <Typography variant="body2" color="inherit" align="center">
                  This material is based upon work supported by the National
                  Science Foundation <br/> under Grant Nos. DBI-0735191, DBI-1265383,
                  and DBI-1743442
                </Typography>
                <Typography variant="body2" color="primary" align="center">
                  {"Copyright © "}
                  CyVerse {new Date().getFullYear()}
                  {"."}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </React.Fragment>
    );
}
export default Footer