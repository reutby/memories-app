
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  [theme.breakpoints.down('md')] : {
    mainContainer:{
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column-reverse'
    }
  }
}));

