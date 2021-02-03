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
    position:'relative',
    float:'right',
    width: '300px',
    
  },
  logout:{
    padding:'.5rem !important',
    margin:'1rem  !important',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
    '& > *':{
      margin:'0 1rem',
      padding:'.2rem',
    }
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
    position:'relative',
    top:'.5rem',
    marginRight:'.5rem',
  },
  notificationButton:{
    backgroundColor:'transparent',
    
    '&:hover':{
      // backgroundColor:'#FF5471',
    }
  },
  notificationIcon:{
    color:'#000',
  },
  notificationsDiv:{
    position:'relative',
    margin:'0',
  },
  notificationCount:{
    position:'absolute',
    display:'inline-block',
    borderRadius:'100%',
    backgroundColor:'#f44336',
    top:'.6rem',
    right:'.8rem',
    padding:'0 .3rem',
    fontSize:'.8rem',
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
      padding: '.5rem 0',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    profile:{
     
    }
  },
}));


