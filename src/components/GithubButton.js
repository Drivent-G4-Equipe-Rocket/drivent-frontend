import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const GithubBtn = withStyles({
  root: {
    background: '#ff9800',
    '&:hover': {
      background: '#ed6c02',
    },
    margin: '10px 0px 5px 0px',
  },
})(Button);

export default GithubBtn;
