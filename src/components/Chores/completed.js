import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F5F5F5',
      borderColor: 'green'
    // minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Completed() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Completed Chore
        </Typography>
        <Typography variant="h5" component="h2">
          Wash dishes
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          $1.50
        </Typography>
        <Typography variant="body2" component="p">
          Don't forget to turn of the dishwasher
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See more</Button>
      </CardActions>
    </Card>
  );
}