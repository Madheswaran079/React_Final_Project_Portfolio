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
    width: 250,
  },
  media: {
    height: 200,
  },
});

const ProductCard = ({ product }) => {
  const classes = useStyles();


  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.img}
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'caveat' }}>
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={product.url} target='_blank'  rel='noreferrer'><Button size="small" color="primary">
          View Project
        </Button></a>
      </CardActions>
    </Card>
  );
};

export default ProductCard;