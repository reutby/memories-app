import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  posts:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  mainContainerProfile: {
    display: 'flex',
    flexWrap:'wrap',
    marginTop:'1rem',
  },
  
  
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  post:{
    width:'100%',
  },
  // post:{
  //   position:'relative',
  //   margin:'1rem 0',
  // },
  [theme.breakpoints.down('sm')] :{
    post:{
      width:'95%',
      // padding:'12px 0 !important',
      // margin:'1rem 0',
    },
    mainContainerProfile:{
      alignItems:'center',
      justifyContent:'center',
    }
  }
}));