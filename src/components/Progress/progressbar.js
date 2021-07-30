import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import { FaCentercode } from "react-icons/fa";

const BorderLinearProgress = withStyles(theme => ({
  root: {
      margin: 30,
    height: 30,
    borderRadius: 12
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "orange"
  }
}))(LinearProgress);

export default function App() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        return Math.min(oldProgress + 15, 100);
      });
    }, 500);

  return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
        <h1 align="center">Weeks Earnings</h1>
      <BorderLinearProgress variant="determinate" value={progress}/>
      <h1 align="center" >Goal</h1>
      <BorderLinearProgress variant="determinate" value={progress} color="secondary"></BorderLinearProgress>
    </div>
  );
}