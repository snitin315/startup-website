import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Quote from "components/Typography/Quote.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from 'react-reveal/Fade';
import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";
import Button from 'components/CustomButtons/Button';

const useStyles = makeStyles(styles);

const Steps = function(props){
  const design ={
    width : '50%',
    textAlign : 'justify',
  }
  const border ={
    border : "2px solid #3aafa9",
    borderRadius : '10px',
    minwidth: "12rem"
  }
  return ( 
    <Card style={border}>
      <strong><CardHeader color="primary" style={design}>As {props.num} Step</CardHeader></strong>
      <CardBody >
        <Quote style ={{textAlign:"justify",textJustify:"inter-word",color:"blue"}} 
          text={props.text}
        />
      </CardBody>
    </Card>
  );
}

export default function Details(){
    const classes = useStyles();
    return(
       <div className={classes.section}> 
        <h3 className={classes.title}>Application Procedure</h3>
        <Fade duration={1500}>
            <Steps num= "1st" text="The Venture must fill the form and complete their Registration of INR 5,000 here. Click the button below to fill the application form. "/>              
        </Fade> 
       
        <GridContainer>
            <GridItem xs={12} sm={10} md={6}>
              <div style={{display:"flex" , justifyContent : "center"}}>
                <Button size="lg" color="primary" href="/startup-application-form" target="-blank" type="button"> <i class="fas fa-angle-right"></i> <strong>Click Here To Fill the Application Form</strong> </Button>
              </div>
            </GridItem>
            <GridItem xs={12} sm={10} md={6}>
              <div style={{display:"flex" , justifyContent : "center"}}>
               <Button size="lg" color="primary" href="https://www.scupo.in/event/3rd-international-conference-on-innovative-computing-communication/#bookticket" target="-blank" type="button"> <i class="fas fa-angle-right"></i> <strong>Click Here To Pay The Registration Fees</strong> </Button>
              </div>
            </GridItem>
        </GridContainer>     
        <br/>
        <br/>
        <Fade duration={1500}>
        <Steps num= "2nd" text="The Registration must include a Pitch Deck with not more than 10 Slides. The Deck Must include Business Plan, Value Proposition, Projections for the next 5 years, Current Financials and Necessary Statistics (Traction, Users, Pricing etc.), Competition Analysis, Team and any other relevant data"/>  
        </Fade> 

        <br/>
        <Fade duration={1500}>
        <Steps num= "3rd" text="If the Start-up has any video highlighting their Venture and/or Product, the link of the video must also be shared in the Registration"/>  
        </Fade>   

        <br/>
        <Fade duration={1500}>
        <Steps num= "4th" text="After Submission, All Entries will be evaluated by our Team of Analysts. All Entries that are Shortlisted will be intimated about the same. All decision made by ICICC are final"/>  
        </Fade> 

        <br/>
        <Fade duration={1500}>
        <Steps num= "5th" text="After Shortlisting, The Selected Start-ups will be invited to the Start-up Event to pitch their Venture to the Panel of Judges and Investors. The decision for Investment is at the sole discretion of the Investors and the Judges."/>  
        </Fade> 

        <br/>  
        <Fade duration={1500}>
        <Steps num= "6th" text="Post Event, ICICC will collect the details from investors regarding any Investment Decisions and will intimate your Start-up about the same"/>  
        </Fade>   

       <br/>
        <Fade duration={1500}>
        <Steps num= "7th" text="All Investment Discussion between the Investor and the Start-up will take place under the presence of an ICICC Representative."/>  
        </Fade> 

         <br/>
         <Fade duration={1500}>
        <Steps num= "8th" text="Post Successful investment, The Start-up will pay 4% of the total amount successfully raised by the Start-up through the medium of the Start-up Event."/>  
        </Fade> 
        <br/>
    </div>
    )
}
