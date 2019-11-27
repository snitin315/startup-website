import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";

// @material-ui/icons
import { Info} from "@material-ui/icons";
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
import Fade from 'react-reveal/Fade';
import CustomInput from "components/CustomInput/CustomInput.js";

// Sections for this page


//images
import rocket from "../../assets/img/rocket2.gif"

const popstyle = {
    width : "300px",
    padding : "20px",
    color : "#fff",
    backgroundColor : "rgba(0,0,0,0.6)"
}

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
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
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
              <h2 className={classes.title}><CharPose text="Application Form" /></h2>
              <h6 className={classes.title} style={{marginTop : "-10px"}}> Fill the application form here and pay the registration fees using the button below.</h6>
              <br />
              <Button
                style={btn}
                color="white"
                size="lg"
                href="https://www.scupo.in/event/3rd-international-conference-on-innovative-computing-communication/#bookticket"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-ticket-alt"/>
               <b style={{color:"#888"}}>Pay Registration Fees</b> 
              </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <br/>
              <img src ={rocket} style={{maxWidth:"100%", opacity:"0.8", borderRadius:" 100% 100% 0% 0%"}}/>
            </GridItem>
          </GridContainer>
        </div>
    </Parallax> 
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
        <form class="form" target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLSdrs2xXlLNt2QCD_Kj27dmvfu_SZJgF1qyGigSFOZPUf3QQFQ/formResponse" >
  
  <GridContainer >
         
      <GridItem xs={12} sm={6} md={6}>
          <CustomInput
              labelText="Name of Venture/ StartUp"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.214175899" ,
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem>

      <GridItem xs={12} sm={6} md={6}>
          <CustomInput
              labelText="Founder Name"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.1898308170" , 
                  type : "text",
                  required : "true"
               }}
          />
      </GridItem>

      <GridItem xs={12} sm={6} md={6}>
          <CustomInput
              labelText="Contact Number"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.361562226" , 
                  type : "number",
                  required : "true"
               }}
          />
      </GridItem>

      <GridItem xs={12} sm={6} md={6}>
          <CustomInput
              labelText="Email"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.1755425799" , 
                  type : "email",
                  required : "true"
               }}
          />
      </GridItem>

      <GridItem xs={12} sm={4} md={4}>
          <CustomInput
              labelText="Website"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.1684931971" , 
                  type : "text",
                  required : "true"
               }}
          />
      </GridItem>

      <GridItem xs={12} sm={4} md={4}>
          <CustomInput
              labelText="City"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.213723825" , 
                  type : "text",
                  required : "true"
               }}
          />
      </GridItem>

      <GridItem xs={12} sm={4} md={4}>
          <CustomInput
              labelText="State"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.1703209507" , 
                  type : "text",
                  required : "true"
               }}
          />
      </GridItem>


      <GridItem  xs={12} sm={12} md={6} >
      
          <h4 style={{color : "black", fontWeight : '900'}} > Industry :  </h4>   

          <label class="container2">Customer internet and Information services
          <input type="radio" name="entry.1209461860" value="Customer internet and Information services" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Software products, including Web Applications
          <input type="radio" name="entry.1209461860" value="Software products, including Web Applications" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Mobile applications (Products and Services)
          <input type="radio" name="entry.1209461860" value="Mobile applications (Products and Services)" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Emerging Market Technology
          <input type="radio" name="entry.1209461860" value="Emerging Market Technology" />
          <span class="checkmark"></span>
          </label>
          
          <label class="container2">Manufacturing
          <input type="radio" name="entry.1209461860" value="Manufacturing" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Retail
          <input type="radio" name="entry.1209461860" value="Retail" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Other
          <input type="radio" name="entry.1209461860" value="Other" />
          <span class="checkmark"></span>
          </label>              
           
      </GridItem>

      <GridItem  xs={12} sm={12} md={6} >
          <h4 style={{color : "black" , fontWeight : '900'}} >Current Revenue size: INR (Per Annum) </h4>      

          <label class="container2">Pre Revenue 
          <input type="radio"  name="entry.645105830" value="Pre Revenue" required />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Less than 10 Lakhs
          <input type="radio"  name="entry.645105830" value="< 10 Lakhs" />
          <span class="checkmark"></span>
          </label>


          <label class="container2">10 Lakhs - 50 Lakhs
          <input type="radio" name="entry.645105830" value = "10 Lakhs - 50 Lakhs"/>
          <span class="checkmark"></span>
          </label>


          <label class="container2">50 Lakhs - 1 Crore
          <input type="radio" name="entry.645105830" value="50 Lakhs - 1 Crore" />
          <span class="checkmark"></span>
          </label>

          <label class="container2"> > 1 Crore
          <input type="radio" name="entry.645105830" value="> 1 Crore" />
          <span class="checkmark"></span>
          </label>

      </GridItem>

      <GridItem  xs={12} sm={12} md={6} >
           <h4 style={{color : "black" , fontWeight : '900'}} >Current Stage of Venture :</h4>  


           
          <label class="container2">Ideation
          <input type="radio"  name="entry.934987764" value="Ideation" required />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Beta Launched
          <input type="radio"  name="entry.934987764" value="Beta Launched" />
          <span class="checkmark"></span>
          </label>


          <label class="container2">Proof of Concept
          <input type="radio" name="entry.934987764" value = "Proof of Concept"/>
          <span class="checkmark"></span>
          </label>


          <label class="container2">Early Revenue
          <input type="radio" name="entry.934987764" value="Early Revenue" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Steady Revenues
          <input type="radio" name="entry.934987764" value="Steady Revenues" />
          <span class="checkmark"></span>
          </label>

      </GridItem>

      <GridItem  xs={12} sm={12} md={6} >
           <h4 style={{color : "black" , fontWeight : '900'}} >Current Funding Status : </h4>     

          <label class="container2">Self Funded
          <input type="radio" name="entry.848609369" value="Self Funded" required />
          <span class="checkmark"></span>
          </label>  

          <label class="container2">Friends and Family
          <input type="radio" name="entry.848609369" value="Friends and Family" />
          <span class="checkmark"></span>
          </label>  

          <label class="container2">Angels
          <input type="radio" name="entry.848609369" value="Angels" />
          <span class="checkmark"></span>
          </label>  

          <label class="container2">VC
          <input type="radio" name="entry.848609369" value="VC" />
          <span class="checkmark"></span>
          </label>  

          <label class="container2">Incubator
          <input type="radio" name="entry.848609369" value="Incubator" />
          <span class="checkmark"></span>
          </label>  

          <label class="container2">Other
          <input type="radio" name="entry.848609369" value="Other" />
          <span class="checkmark"></span>
          </label>  

      </GridItem>

      <GridItem xs={8} sm={10} md={9}>
          <CustomInput
              labelText="Business Summary:"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.1239809243" ,
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem> 

      <GridItem xs={4} sm={2} md={3} >   
          <br/>
             <Button onClick={event => setAnchorElLeft(event.currentTarget)} color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
                  
              <Popover
                  classes={{
                  paper: classes.popover
                  }}
                  open={Boolean(anchorElLeft)}
                  anchorEl={anchorElLeft}
                  onClose={() => setAnchorElLeft(null)}
                  anchorOrigin={{
                  vertical: "center",
                  horizontal: "left"
                  }}
                  transformOrigin={{
                  vertical: "center",
                  horizontal: "right"
                  }}
              >
                 
                  <p style={popstyle} >
                  Not more than one paragraph (100 words max )to describe yourbusiness and the business opportunity. If it takes more than a paragraph to describe your business, perhaps you need to revisit the drawing board. The simpler the message, the quicker you will draw investor attention
                  </p>
              </Popover>
          </GridItem>

      <GridItem xs={8} sm={10} md={9}>
          <CustomInput
              labelText="Team (No. of members with Founders)"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.1700014816" ,
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem> 

      <GridItem xs={4} sm={2} md={3} >   
          <br/>
          <Button onClick={event => setAnchorElLeft(event.currentTarget)} color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
                  
              <Popover
                  classes={{
                  paper: classes.popover
                  }}
                  open={Boolean(anchorElLeft)}
                  anchorEl={anchorElLeft}
                  onClose={() => setAnchorElLeft(null)}
                  anchorOrigin={{
                  vertical: "center",
                  horizontal: "left"
                  }}
                  transformOrigin={{
                  vertical: "center",
                  horizontal: "right"
                  }}
              >
                 
                  <p style={popstyle} >
                  This section should answer the question ‘Why is this team/entrepreneur best suited to implement this business opportunity’. Keep it simple. Introduce the member as well as give the link for their LinkedIn Profile
                  </p>
              </Popover>
          

      </GridItem>

      <GridItem xs={8} sm={10} md={9}>
          <CustomInput
              labelText="What is the value proposition/pain point that you are addressing?"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.1797006860" ,
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem> 

      <GridItem xs={4} sm={2} md={3} >   
          <br/>
          <Tooltip
              id="tooltip-right"
              title="Who is going to Wbuy your product/service and how much they would pay for it. Why would consumers choose this over others? Remember to articulate the key differentiators in customer benefits, not an internal perspective on technology superiority."
              placement="right"
              classes={{ tooltip: classes.tooltip }}
          >
              <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
          </Tooltip>

      </GridItem>

      


      <GridItem xs={8} sm={10} md={9}>
          <CustomInput
              labelText="Business Model/financial Model( 2 year projections) "
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.786711826" ,
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem> 

      <GridItem xs={4} sm={2} md={3} >   
          <br/>
          <Tooltip
              id="tooltip-right"
              title="Business Model: This is about how you will make money from this business opportunity (example who will pay you, who will charge the customer, how, when etc) Financial Projections: Provide next 2 year quarterly financial projections and provide an estimate of the 5 year financial projection. Cover revenue, cost, gross margin and net cash flow."
              placement="right"
              classes={{ tooltip: classes.tooltip }}
          >
              <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
          </Tooltip>

      </GridItem>
       

      <GridItem xs={8} sm={10} md={9}>
          <CustomInput
              labelText="Your Go to Market Strategy"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.140617734",
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem> 

      <GridItem xs={4} sm={2} md={3} >   
          <br/>
          <Tooltip
              id="tooltip-right"
              title="How are you going to market and sell your products/services (Go to Market Model). What capability does the team have and plans to build to take the offerings to the market. What partnerships are critical to your business. What is the current status of customer and partner pipeline."
              placement="right"
              classes={{ tooltip: classes.tooltip }}
          >
              <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
          </Tooltip>

      </GridItem>

      <GridItem xs={8} sm={10} md={9}>
          <CustomInput
              labelText="Competitive landscape & Risk factor to execution"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.61768690" ,
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem> 

      <GridItem xs={4} sm={2} md={3} >   
          <br/>
          <Tooltip
              id="tooltip-right"
              title="Who are you currently or in future likely to compete against and what is your plan to win this battle? Remember that competition is not just those providing a similar solution to yours, but all those addressing the same customer need through variety of approaches."
              placement="right"
              classes={{ tooltip: classes.tooltip }}
          >
              <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
          </Tooltip>

      </GridItem>

      <GridItem xs={8} sm={10} md={9}>
          <CustomInput
              labelText="Customer Traction"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.1423951859" ,
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem> 

      <GridItem xs={4} sm={2} md={3} >   
          <br/>
          <Tooltip
              id="tooltip-right"
              title="Mention key milestones achieved since inception of company (prototype development, first revenues etc)"
              placement="right"
              classes={{ tooltip: classes.tooltip }}
          >
              <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
          </Tooltip>

      </GridItem>

      <GridItem  xs={12} sm={12} md={6} >
           <h4 style={{color : "black", fontWeight : '900'}} > Patents / Regulatory permission Status : </h4>   

          <label class="container2">Patent Applied
          <input type="radio" name="entry.1674282930" value="Patent Applied" required />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Patent Granted
          <input type="radio" name="entry.1674282930" value="Patent Granted" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Regulatory Permissions applied for
          <input type="radio" name="entry.1674282930" value="Regulatory Permissions applied for" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Regulatory permissions received
          <input type="radio" name="entry.1674282930" value="Regulatory permissions received" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Not Applicable
          <input type="radio" name="entry.1674282930" value="Not Applicable" />
          <span class="checkmark"></span>
          </label>

          <label class="container2">Other
          <input type="radio" name="entry.1674282930" value="Other" />
          <span class="checkmark"></span>
          </label>

      </GridItem>

      



      <GridItem xs={12} sm={9} md={9}>
          <CustomInput
              labelText="Fund Ask and Use of Funds"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.1562441262" , 
                  type : "text",
                  required : "true"
               }}
          />
      </GridItem>

      <GridItem xs={8} sm={10} md={9}>
          <CustomInput
              labelText="Link for Pitch Deck"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                 name : "entry.2048919300" ,
                 type : "text",
                 required : "true"
              }}
          />
      </GridItem> 

      <GridItem xs={4} sm={2} md={3} >   
          <br/>
          <Tooltip
              id="tooltip-right"
              title="Kindly Upload your pitch deck on DropBox/Google Drive/ Other Cloud Platform and share with us the link for it. Kindly make sure Link Sharing is turned on. Make sure the Pitch Deck has all the relevant details and is not more than 10 slides"
              placement="right"
              classes={{ tooltip: classes.tooltip }}
          >
              <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
          </Tooltip>

      </GridItem>

      <GridItem xs={12} sm={9} md={9}>
          <CustomInput
              labelText="Video link(provide a link of the video of product/Service(if any))"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.164477459" , 
                  type : "text"
               }}
          />
      </GridItem>

      <GridItem xs={12} sm={9} md={9}>
          <CustomInput
              labelText="Kindly Describe Your Equity Structure and Fund Raising History "
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.542578558" , 
                  type : "text",
                  required : "true"
               }}
          />
      </GridItem>

      <GridItem xs={12} sm={9} md={9}>
          <CustomInput
              labelText="Any other Relevant Information/Key Milestones that will help us understand your Venture better"
              id="float"
              formControlProps={{
                  fullWidth: true
              }}
              inputProps={{
                  name : "entry.643250718" , 
                  type : "text",
                  required : "true"
               }}
          />
      </GridItem>
  </GridContainer>
  <input type="submit" value="Submit" />
  <br/>
  </form>
        </div>     
        </div>
      <Footer />
    </div>
  );
}
