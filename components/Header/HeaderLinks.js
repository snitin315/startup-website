/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps,Home,PersonAdd,CheckBox,Money,People} from "@material-ui/icons";

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
          <Home className={classes.icons} /> Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/about"
          color="transparent"
          className={classes.navLink}
        >
          <Apps className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/eligibility-criteria"
          color="transparent"
          className={classes.navLink}
        >
          <CheckBox className={classes.icons} /> Eligibilty-Criteria
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/application/procedure"
          color="transparent"
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} /> Application Procedure
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/funding-details"
          color="transparent"
          className={classes.navLink}
        >
          <Money className={classes.icons} /> Funding Details
        </Button>
      </ListItem>
      
    </List>
  );
}
