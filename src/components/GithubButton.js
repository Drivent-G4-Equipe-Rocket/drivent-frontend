import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const GithubBtn = withStyles({
  root: {
    background: '#ff9800',
    '&:hover': {
      background: '#ed6c02',
    },
  },
})(Button);

export default GithubBtn;
