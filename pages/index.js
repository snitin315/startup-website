import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import ParticlesContainer from "components/Particle/Particle.js"
import CharPose from "components/Charpose/Charpose.js"
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import Category from "pages-sections/LandingPage-Sections/Category.js";

//images
import rocket from "../assets/img/rocket2.gif"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex ={
    display : "flex",
    alignItems : "center"
  }
  const btn ={
    borderRadius: "25px",
    border : "1px solid #fff"
  }
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Universal-Inovators"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "primary"
        }}
        {...rest}
      />
   
    <Parallax filter responsive style={{backgroundColor:"#28a796"}}> 
    <ParticlesContainer />
        <div className={classes.container}>
          <GridContainer style={flex}>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}><CharPose text="Where StartUp Meet Investors" /></h2>
              <h6 className={classes.title}>Let your dreams come true || Your Story Starts with us</h6>
              <br />
              <Button
                style={btn}
                color="white"
                size="md"
                href="/application-form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
               <b style={{color:"#888"}}>Register Today</b> 
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <img src ={rocket} style={{maxWidth:"100%", opacity:"0.8", borderRadius:" 100% 100% 0% 0%"}}/>
            </GridItem>
          </GridContainer>
        </div>
    </Parallax> 
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <Category />
        </div>
      </div>
      <Footer />
    </div>
  );
}
