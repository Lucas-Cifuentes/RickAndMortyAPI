import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Divider,
  Button,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { People } from "@material-ui/icons";

const useStyles = makeStyles({
  subtitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  people: {
    marginRight: 5,
  },
  card: {
    marginTop: "1rem",
  },
  button: {
    display: "flex",
    margin: "0.5rem auto",
  },
  center: {
    display: "flex",
    margin: "0 auto",
  },
});

const CardComponent = ({
  title,
  image,
  status,
  species,
  LastKnowwLocation,
  typeLocation,
  dimensionLocation,
  dateEpisode,
  episode,
}) => {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Card variant="outlined">
        <CardContent>
          {image && (
            <img className={classes.center} src={image} alt="CharacterImage" />
          )}
          <Typography align="center" variant="h4" component="h1">
            {title}
          </Typography>
          <Divider />
          {/* Characters render condition */}
          {status && (
            <>
              <div className={classes.subtitle}>
                <Typography variant="subtitle2" component="h2">
                  {status}
                </Typography>
                -
                <Typography variant="subtitle2" component="h2">
                  {species}
                </Typography>
              </div>
              <Typography variant="h5">Las Know Location:</Typography>
              <Typography variant="h6" component="h3" color="textSecondary">
                {LastKnowwLocation}
              </Typography>
            </>
          )}
          {/* Locations render condition */}
          {typeLocation && (
            <>
              <div className={classes.subtitle}>
                <Typography variant="h5">Type:</Typography>
                <Typography variant="h6">{typeLocation}</Typography>
              </div>
              <div className={classes.subtitle}>
                <Typography variant="h5">Dimension:</Typography>
                <Typography variant="h6">{dimensionLocation}</Typography>
              </div>
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
              >
                <People className={classes.people} /> Residents
              </Button>
            </>
          )}
          {/* Episodes render condition */}
          {episode && (
            <>
              <div>
                <Typography variant="h5">Episode:</Typography>
                <Typography variant="h6" color="textSecondary">
                  {episode}
                </Typography>
              </div>
              <div>
                <Typography variant="h6">Date:</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {dateEpisode}
                </Typography>
              </div>
              <Button
                className={classes.button}
                color="primary"
                variant="outlined"
              >
                <People className={classes.people} /> Characters
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
