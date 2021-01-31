import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundBlendMode: 'darken',
    borderBottom:'2px solid #fff'
  },
  actionIcons:{
    color:'white'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    border:'2px rgb(255,255,255)',
    boxShadow:'0 2rem 3rem #252525',
    display: 'flex',
    paddingBottom:'.5rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor:'#252525',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: 'white',
  },
  title: {
    padding: '0 16px',
    color: 'white',
  },

  cardActions: {
    padding: '0 8px 8px 8px',
    display: 'flex',
  // justifyContent: 'space-between',
  },
 
  commentAction:{
  },

});