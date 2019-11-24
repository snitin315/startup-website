import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Fade from 'react-reveal/Fade';

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

//images
import sideImage from "assets/img/startup2.gif"

const useStyles = makeStyles(styles);
const flex = {
  display : 'flex',
  alignItems : 'center',
} 

export default function ProductSection() {
  const classes = useStyles();
  
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h3 className={classes.title}>ICICC Startup Event: Where Startup Meets Investor</h3>
          <h5 className={classes.description}>
          ICICC is a non-profit organization under the umbrella of Universal Innovator. It has successfully conducted numerous technical conferences, FDPs and workshops. It has also been parts of Nasa hackthons and has members who have successfully organized and prepared teams for AICTE’s Smart India Hackathons. It has support of many reputed international and national organizations. ICICC enjoys support of many top private companies, research labs, government agencies, Private and Government Banks, funding agencies, publishing houses and many more other organizations.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer style = {flex}>  
        <GridItem xs={12} sm={12} md={6}>
          <img style={{width : '100%'}} src={sideImage} /> 
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h3 className={classes.title}> About The StartUp Event</h3>
          <p className={classes.description}>
           ICICC in association with many reputed funding agencies is organizing a Startup event, where startup ideas meet funder. The selection procedure for the startup idea will be professional, stringent and scientific in nature.
           The prime objective of the startup meet is for successful ventures of future. The process of converting ideas into ventures will be monitored by several standard associated expert agencies at various levels to increase the hit ratio.
           In short the investors’ money will be invested in right direction. New and already running startup ideas will be invited to showcase their innovative ideas with all the desired details. Funders (Crowdfunding, Self-funding,
           Venture Capitalists, Angel Investment) will also be invited to listen the ideas showcased by the startup teams. There will be close interaction between startup teams and Funders to chart the future path. The event will be organized under 
           the banner of ICICC and supported by many Government and Private Organizations. This event is a flagship initiative of ICICC, intended to build a strong ecosystem that is conducive for the growth of startup businesses, to drive sustainable economic growth 
           and generate large scale employment opportunities. 
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
