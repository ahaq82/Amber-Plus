import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  IconButton,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import getProfileObject from "utils/getProfileObject";
import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: (isMobile) => (isMobile ? "row" : "column"),
    width: 300,
    margin: theme.spacing(2, 3, 0),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: theme.spacing(2, 0.5, 0),
      padding: theme.spacing(1, 0.25),
    },
    "& .MuiCardActions-root": {
      justifyContent: (isMobile) => !isMobile && "flex-end",
      padding: 0,
    },
  },
  media: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
      borderRadius: "50%",
    },
  },
  title: {
    color: theme.palette.grey[500],
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.spacing(1.5),
    },
  },
  value: {
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.spacing(1.5),
    },
  },
  shareButton: {
    display: "flex",
    flexDirection: (isMobile) => (isMobile ? "center" : "flex-end"),
  },
  shareIcon: {
    padding: 8,
  },
}));

const PersonAlertCard = ({ person, pathTo, handleShare }) => {
  const isMobile = useMediaQuery("(max-width: 600px)", {
    noSsr: true,
  });
  const classes = useStyles(isMobile);

  const { name, image } = person;
  const profile = getProfileObject(person, "card");

  return (
    <Card className={classes.root}>
      <CardActionArea component="a" href={pathTo}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          direction={isMobile ? "row" : "column"}
        >
          <Grid
            container
            item
            justify="center"
            alignItems="center"
            md={12}
            sm={12}
            xs={4}
          >
            <img src={image} alt={name} className={classes.media} />
          </Grid>
          <Grid
            container
            item
            justify="space-between"
            md={9}
            sm={9}
            xs={7}
            style={{ marginTop: !isMobile && "12px" }}
          >
            {profile.map((data) => (
              <Fragment key={`${name}-${data.value}`}>
                <Grid item xs={4}>
                  <Typography className={classes.title}>
                    {data.title}
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography className={classes.value}>
                    {data.value}
                  </Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActions className={classes.shareButton}>
      <FacebookShareButton
     url={"http://www.camperstribe.com"}
     quote={"CampersTribe - World is yours to explore"}
     hashtag="#camperstribe"
     className={classes.socialMediaButton}
   >
     <FacebookIcon size={36} />
   </FacebookShareButton>
   <TwitterShareButton
     url={"http://www.camperstribe.com"}
     title={"CampersTribe - World is yours to explore"}
     hashtag="#camperstribe"
     className={classes.socialMediaButton}
   >
     <TwitterIcon size={36} />
   </TwitterShareButton>
   <EmailShareButton
     url={"http://www.camperstribe.com"}
     title={"CampersTribe - World is yours to explore"}
     separator=":: "
     className={classes.socialMediaButton}
   >
     <EmailIcon size={36} />
   </EmailShareButton>
      </CardActions>
    </Card>
  );
};

export default PersonAlertCard;
