
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  topContainer: {
    position: 'relative',

  },
 

  [theme.breakpoints.down('md')]: {
    mainContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column-reverse'
    },
    
  },
  [theme.breakpoints.down('sm')]: {
    topContainer: {
      margin: '0',
      padding: '0',
    },
    postsItem: {
      padding: '12px 0 !important',
    }
  },
}));

