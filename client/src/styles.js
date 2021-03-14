
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({


  darkModeSwitch: {
    position: 'fixed',
    top: '94vh',
    left: '.5rem',
  },
  topContainer: {

    margin: '0 auto',
  },
  [theme.breakpoints.down('sm')]: {
    darkModeSwitch: {
      position: 'relative',
      display: 'flex',
      alignSelf: 'center',
      top: '0',
      margin: '0 auto',
    }
  }

}));