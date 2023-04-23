import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 250,
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',
  },
  media: {
    height: 200,
  },
});

const Skills = ({ skill }) => {
  const classes = useStyles();

  const maxLevel = 100;

  const getProgress = () => {
    const progress = skill.level ;
    return progress; 
  };

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={skill.img}
          title={skill.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'caveat' }}>
            {skill.title}
          </Typography>
          <div style={{ backgroundColor: 'lightgray', height: '10px', borderRadius: '5px', marginBottom: '10px' }}>
          <div style={{ backgroundColor: 'black', height: '100%', width: `${getProgress()}%`, borderRadius: '5px' }} />
        </div>
        <Typography gutterBottom>Level: {skill.level}/{maxLevel} </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
};

export default Skills;