/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps,Home,PersonAdd,CheckBox,Money,People, Create} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>      
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          <Home className={classes.icons} /> <strong>Home</strong>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/about"
          color="transparent"
          className={classes.navLink}
        >
          <Apps className={classes.icons} /> <strong>About</strong>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/eligibility-criteria"
          color="transparent"
          className={classes.navLink}
        >
          <CheckBox className={classes.icons} /> <strong>Eligibilty-Criteria</strong>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/application/procedure"
          color="transparent"
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} /> <strong>Application Procedure</strong>
        </Button>
      </ListItem>  
      <ListItem className={classes.listItem}>
        <Button
          href="/application/form"
          color="transparent"
          className={classes.navLink}
        >
          <Create className={classes.icons} /> <strong>Apply Now</strong>
        </Button>
      </ListItem>      
    </List>
  );
}
