import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex !important',
    flexDirection: 'row !important',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    position:'relative',
  },
  heading: {
    color: '#FF5471',
    textDecoration: 'none',
    fontSize:'4rem'
  }
  
  ,
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    width: '400px',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    left:'rem'
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
  
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down('sm')] : {
    appBar:{  
      flexDirection:'column !important',
      padding: '10px 10px',
    },
    heading:{
      fontSize:'2rem'
    },
    toolbar:{
      width: 'auto',
      // justifyContent:'right',
    },
    profile:{
      // alignItems:'center',
      right:'10rem',
      width:'250px'
    }
  },
}));


