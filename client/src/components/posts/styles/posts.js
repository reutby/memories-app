import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  post:{
    position:'relative',
    margin:'1rem 0',
  },
  [theme.breakpoints.down('sm')] :{
    post:{
      position:'relative',
      width:'100%',
      padding:'12px 0 !important',
      margin:'1rem 0',
    }
  }
}));