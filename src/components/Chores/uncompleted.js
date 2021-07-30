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
      borderColor: 'purple'
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

export default function Uncompleted() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Uncompleted Chore
        </Typography>
        <Typography variant="h5" component="h2">
          Fold laundry
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          $2.50
        </Typography>
        <Typography variant="body2" component="p">
          Again, don't forget to turn of the dishwasher
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See more</Button>
      </CardActions>
    </Card>
  );
}