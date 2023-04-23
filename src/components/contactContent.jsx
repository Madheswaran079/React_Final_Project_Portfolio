import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 80,
  },
});

const Content = ({ content }) => {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={content.img}
          title={content.title}
        />
        <CardContent style={{display:'flex',flexDirection:'row'}}>
            <IconButton href={content.n}>{content.icon}</IconButton>
          <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'caveat' }}>
            {content.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
};

export default Content;