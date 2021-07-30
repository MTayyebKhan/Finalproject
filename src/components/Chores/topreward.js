import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FaCentercode } from 'react-icons/fa';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
      backgroundColor: '#F5F5F5',
      borderColor: 'violet'
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

export default function Topreward() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined"  color='red'>
      <CardContent align="center">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Top Reward
        </Typography>
        <Typography variant="h5" component="h2">
          Clean the kitty litter
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          $5
        </Typography>
        <Typography variant="body2" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See shop for more</Button>
      </CardActions>
    </Card>
  );
}