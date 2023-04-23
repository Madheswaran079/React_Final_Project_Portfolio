import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 200,
  },
});

const Services = ({ service }) => {
  const classes = useStyles();


  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={service.img}
          title={service.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'caveat' }}>
            {service.title}
          </Typography>
          <Typography gutterBottom variant="caption" component="h6" style={{ fontFamily: 'caveat' }}>
            {service.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
};

export default Services;