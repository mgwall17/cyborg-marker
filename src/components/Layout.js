import React from "react"
import Nav from "../components/Header"
import Footer from "../components/Footer"
import {Container} from "@material-ui/core"
const Layout = (props) => {
   
    return (
      <React.Fragment>
          <Nav />
          <Container> {props.children} </Container>
          <Footer />
      </React.Fragment>
    );
}

export default Layout