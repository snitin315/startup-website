import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";
import NavPills from "components/NavPills/NavPills.js";


const useStyles = makeStyles(styles);
export default function Example(){
    const classes = useStyles();
  return (
    <div className={classes.section} style={{marginTop:"-100px"}} >
      <h3 className={classes.title}>Funding Details </h3>  
    <NavPills
      color="primary"
      alignCenter
      horizontal={{
        tabsGrid: { xs: 2, sm: 4, md: 4 },
        contentGrid: { xs: 10, sm: 8, md: 8 }
      }}
      tabs={[
        {
          tabButton: "Profile",
          tabContent: (
            <span>
              
            </span>
          )
        },
        {
          tabButton: "Settings",
          tabContent: (
            <span>
              
            </span>
          )
        },
        {
          tabButton: "Options",
          tabContent: (
            <span>
              
            </span>
          )
        }
      ]}
    />
    </div>
  );
}