import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex !important',
    flexDirection: 'row !important',
    
    padding: '10px 50px',
    position: 'relative',

  },
  heading: {
    color: '#FF5471',
    textDecoration: 'none',
    fontSize: '4rem',
  },
  brandContainer: {
    width: '60%',
    display: 'flex',
  }
  ,
  image: {
    position: 'relative',

    marginLeft: '.5rem',
  },
  toolbar: {
    width: '40%',
    display: 'flex',

  },
  profile: {
    display: 'flex',
    '& > *': {
      margin: '0 2rem',
      padding: '.2rem',
    }
  },
  logout: {
    padding: '.5rem !important',
    margin: '1rem  !important',
  },

  userName: {
    display: 'flex',
    alignItems: 'center',
    textTransform:'capitalize',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    position: 'relative',
  },
  notificationButton: {
    backgroundColor: 'transparent',
  },
  notificationIcon: {
    
   
  },
  notificationsDiv: {
    position: 'relative',
    margin: '0',
  },
  notificationCount: {
    position: 'absolute',
    display: 'inline-block',
    borderRadius: '100%',
    backgroundColor: '#f44336',
    top: '.6rem',
    right: '.8rem',
    padding: '0 .3rem',
    fontSize: '.8rem',
  },
  [theme.breakpoints.down('md')]: {
    heading: {
      fontSize: '2.5rem',
    },
    profile: {
      '& > *': {
        margin: '0 1rem',
        padding: '.2rem',
      }
    },
    brandContainer: {
      width: '50%'
    },
    toolbar: {
      width: '50%',
    }
  },
  [theme.breakpoints.down('sm')]: {
    appBar: {
      flexDirection: 'column !important',
      padding: '10px 10px',
      justifyContent: 'center !important',
      alignItems: 'center',
    },
    heading: {
      textAlign: 'center',
    },
    brandContainer: {
      width: 'auto'
    },
    toolbar: {
      width: 'auto',
    }
  },
}));


