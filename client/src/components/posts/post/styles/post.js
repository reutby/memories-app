import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

  media: {
    height: 0,
    paddingTop: '70%',
    backgroundBlendMode: 'darken',
    borderBottom: '2px solid #fff'
  },
  buttonAvatar: {
    float: 'left',
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginRight: '1rem',
    top: '.3rem',

  },
  actionIcons: {
    color: 'white'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    border: '2px rgb(255,255,255)',
    boxShadow: '0 1rem 2rem rgba(0,0,0,.6)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
      
    height: '100%',
    position: 'relative',
     
    paddingBottom: '0',
  },

  profileCard:{
    transition:'transform .5s',
    '&:hover':{
      transform:'scale(1.1)',
    }
  },
  overlay: {
    position: 'absolute',
    top: '0',
    padding: '.7rem',
    left: '0',
    
    backgroundColor: 'rgba(117, 116, 108,.6)',
    width: '100%',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
     
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
     
  },
  tags: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  title: {
    padding: '0 16px',
     
  },
  creatorName: {
    textTransform: "capitalize",
  },
  cardActions: {
    padding: '0 8px 8px 8px',
    display: 'flex',
    // justifyContent: 'space-between',
  },
  postContent: {
    position: "absolute",
    visibility: 'hidden',


  },
  gotoPost: {
     
    backgroundColor: 'rgba(0,0,0,.8)',
    padding: 'auto 0',
    position: 'absolute',
    bottom: '1rem',
    borderRadius:'5px 0 0 5px',
    right: '0',
    transition:'backgroundColor color .5s',
    '&:hover':{
      backgroundColor:'rgba(255,255,255,.6)',
      color:'black'
    }
  },
}

));