import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Carousel from "react-slick";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

//images
import ssclogo from "assets/img/ssclogo.png"
import nitplogo from "assets/img/nitplogo.jpeg"
import npclogo from "assets/img/npclogo.jpeg"
import srgelogo from "assets/img/srgelogo.png"
import setitlogo from "assets/img/setitlogo.png"
import dilogo from "assets/img/dilogo.jpg"
import uilogo from "assets/img/uilogo.jpeg"
import minlogo from "assets/img/minlogo.png"
import dmrlogo from "assets/img/dmrlogo.jpeg"
import pkslogo from "assets/img/pkslogo.jpeg"
import autologo from "assets/img/autologo.jpeg"
import callogo from "assets/img/callogo.jpeg"
import plucklogo from "assets/img/plucklogo.jpeg"
import rtmlogo from "assets/img/rtmlogo.jpeg"
import spainlogo from "assets/img/spainlogo.jpeg"
import sgrtlogo from "assets/img/sgrtlogo.jpeg"
import negdlogo from "assets/img/negdlogo.jpeg"
import thinklogo from "assets/img/thinklogo.jpeg"
import gvlogo from "assets/img/gvlogo.png"

import x100 from "assets/img/100x.png"
import huddle from "assets/img/huddle.png"
import icici from "assets/img/icici-bank-logo.jpg"

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      centerPadding: "60px",
      speed: 500, 
      autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  
  return (
    <div className={classes.section} style={{marginTop:"-100px"}}>
      <h2 className={classes.title}>Partners & Promotors</h2>
      <br/>
      <div>
          <Carousel {...settings}>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={ssclogo}  style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES, UNIVERSITY OF DELHI</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={nitplogo} height="300px"  style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>NATIONAL INSTITUTE OF TECHNOLOGY PATNA (NITP)</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div >
                    <img src={npclogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong> NATIONAL PRODUCTIVITY COUNCIL </strong></h6>
                </div>
            </GridItem> 
            <GridItem xs={12} sm={12} md={12}>
                <div >
                    <img src={srgelogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>SCIENTIFIC RESEARCH GROUP IN EGYPT (SRGE)</strong></h6>
                </div>
            </GridItem> 
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={setitlogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>SCIENCES of ELECTRONICS, TECHNOLOGIES of INFORMATION & TELECOMMUNICATIONS (SETIT) , TUNISIA</strong></h6>
                </div>
            </GridItem> 
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={dilogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>DIGITAL INDIA</strong></h6>
                </div>
            </GridItem> 
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={uilogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>UNIVERSAL INNOVATORS , INDIA</strong></h6>
                </div>
            </GridItem> 
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={minlogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>MINISTRY OF ELECTRONICS & INFORMAION TECHNOLOGY , GOVERNMENT OF INDIA </strong></h6>
                </div>
            </GridItem>   
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={dmrlogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>DMR Hydroengineering & Infrastructures Ltd.</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={pkslogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>PKS INFRA ENGINEERS PRIVATE LIMTED</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={autologo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>AUTODEALZ.IN</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={callogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>CALIBRE</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={plucklogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>PLUCK ENGINEERING PRIVATE LIMITED</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={rtmlogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong> RTM ENGINEERS PVT. LTD.</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={gvlogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>GENOMIC VALLEY BIOTECH LIMITED</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={sgrtlogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>SCIENTIFIC GROUP FOR RESEARCH AND TECHNOLOGY</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={negdlogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>NATIONAL E-GOVERNANCE DIVISION</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={thinklogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>THINK PARYAVARAN : SAVE EARTH SAVE GENERATION </strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={spainlogo} height="300px" style={{maxWidth:"100%"}} className="slick-image" />
                    <h6 className={classes.description}><strong>UNIVERSITY OF VALLADOLID SPAIN</strong></h6>
                </div>
            </GridItem>
          </Carousel>
          <br/>
          <h3 className={classes.title}>Special Invited Investors</h3>
          <br/>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
                <div>
                    <img src={icici} height="100px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.description}><strong>ICICI BANK</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <div>
                    <img src={huddle} height="100px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.description}><strong>HUDDLE</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <div>
                    <img src={x100} height="100px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.description}><strong>100X VC</strong></h6>
                </div>
            </GridItem>          
        </GridContainer>
      </div>
    </div>
  );
}
