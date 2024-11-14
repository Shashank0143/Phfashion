import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  LocalShipping,
  Security,
  LocalOffer,
  CreditCard,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  Services_section: {
    backgroundColor: "#CAD1D9",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    fontFamily: "'century-gothic', sans-serif",
  },
  Services_wrapper: {
    display: "flex",
    gap: "2.5rem",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]:{
      gap:".5rem",

    }
  },
  Services_card: {
    alignItems: "center",
    backgroundColor: "#CAD1D9",
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
    marginLeft: "1rem",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]:{
      padding: theme.spacing(.5),
      marginLeft: ".5rem",
      marginBottom: theme.spacing(1),
    }
  },
  Services_icon: {
    color: "#0B1634",
    fontSize: "3rem",
    textAlign:"center",
    marginRight: theme.spacing(2.5),
    "& svg": {
      fontSize: "3rem !important",
    },

    [theme.breakpoints.down("sm")]:{
      "& svg": {
      fontSize: "1.5rem !important",
    },
    marginRight: theme.spacing(1),
    }

  },
  Services_cardTitle: {
    color: "#0B1634",
    fontWeight: "bold",
    fontSize: "1rem",
    [theme.breakpoints.down("sm")]:{
      fontSize: ".5rem",
    }
  },
  Services_cardInfo: {
    color: "#0B1634",
    fontWeight: 300,
    fontSize: "0.8rem",
  },
}));

const servicesData = [
  {
    id: 1,
    icon: <LocalShipping fontSize="large" />,
    title: "Express Delivery",
    info: "Ships in 24 Hours",
  },
  {
    id: 2,
    icon: <Security fontSize="large" />,
    title: "Brand Warranty",
    info: "100% Original products",
  },
  {
    id: 3,
    icon: <LocalOffer fontSize="large" />,
    title: "Exciting Deals",
    info: "On all prepaid orders",
  },
  {
    id: 4,
    icon: <CreditCard fontSize="large" />,
    title: "Secure Payments",
    info: "SSL / Secure сertificate",
  },
];

const Service = () => {
  const classes = useStyles();

  return (
    <>
      <div  className={classes.Services_section}>
        <div className={classes.Services_wrapper} style={{ width: "100%" }}>
          {servicesData.map((item) => {
            
            return (
              <div className={classes.Services_card} key={item.id}>
                <div className={classes.Services_icon}>{item.icon}</div>
                <div>
                  <div className={classes.Services_cardTitle}>{item.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Service;
