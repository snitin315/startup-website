import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import Fade from 'react-reveal/Fade';
import ServiceBox from "components/ServiceBox/ServiceBox.js"


//images
import session from "assets/img/session.svg"
import session2 from "assets/img/startup-about-2.jpg"
import EventTracks from "./EventTracks";


const useStyles = makeStyles(styles);
const flex = {
  display : 'flex',
  alignItems : 'center',
} 

export default function AboutDetails() {
  const classes = useStyles();
  const awards = {
    display : 'flex',
    justifyContent : "center"
  }

  return (
    <div className={classes.section}>
      <div className={classes.section} >
      

      <h3 className={classes.title}>Mentoring Session </h3>
      <br/>

      

      <GridContainer style = {flex}>
      <GridItem xs={12} sm={12} md={6}>
        <Fade left duration={2000}>
         <img src={session} style={{width:'100%'}}/>
         </Fade> 
      </GridItem>    

      <GridItem xs={12} sm={12} md={6}>

      <Fade right duration ={2000}>
      <p className={classes.description} >
      A mentoring session is utmost important for the budding entrepreneurs who seek a direction and the conviction and confidence on the insight of their start-up ideas. All qualified teams at our Start-Up event will be mentored and monitored by experts. There will be a one-on-one mentoring session with mentors having an expert knowledge in the field of your start-up. There will two mentors allotted to each start-up namely:<br/>
      <ul>
         <li><strong>Technical Mentor -</strong>For Core Field Guidance, technical enhancement, etc.</li> 
         <li><strong>Finance/Business Mentor -</strong>For Guidance on Financial Aspect of the Start-Up, market study, enhanced profit margins, viability and longevity aspects, etc.</li> 
      </ul>
     

      </p>
      </Fade>

      </GridItem>
      </GridContainer>

      <h3 className={classes.title}>Awards & Prizes </h3>
      <br/>       
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Fade up>
              <ServiceBox
              icon = "fas fa-trophy"
              title = "Start-up of the year Award"
              description = "The start-up with the greatest growth and success rate."
              />
            </Fade>
          </GridItem>
                    
          <GridItem xs={12} sm={12} md={4}>
            <Fade up delay={500}>
              <ServiceBox 
              icon = "fas fa-trophy"
              title = "Young Innovator Award"
              description = "Best Student Start-Up"
              />
            </Fade>
          </GridItem>
           
            <GridItem xs={12} sm={12} md={4}>
              <Fade up delay={1000}>
                <ServiceBox 
                  icon = "fas fa-trophy"
                  title = "Womanovator Award"
                  description = "Best of a start-up/innovative idea led by a woman."
                  />
                </Fade>
            </GridItem>
          </GridContainer>
    

        
      <h3 className={classes.title}>Executive Networking Session – High Tea Session</h3>

      <GridContainer style = {flex}>
      <GridItem xs={12} sm={12} md={6}>
        <Fade left duration={2000}>
         <img src={session2} style={{width:'100%'}}/>
         </Fade> 
      </GridItem>    

      <GridItem xs={12} sm={12} md={6}>

      <Fade right duration ={2000}>
      <p className={classes.description}  >
      This world is now becoming more and more entrepreneur-oriented. A start-up begins with an idea and the prime obstruction is how to take forward that idea towards a successful business keeping in view the societal issues. We expect people coming with different interests and backgrounds. Some people may have successful start-ups while some might just have ideas and looking for some kind of mentorship and funding to take the
      idea to implementation. Through our Start-Up event we will lay a platform for the networking and interaction amongst the speakers, young entrepreneurs and the audience (participants).       
      </p>
      </Fade>

      </GridItem>
      </GridContainer>
    
      <EventTracks/>
     
      
  <div>
  
   
   
  </div>
</div>
    </div>
  );
}
