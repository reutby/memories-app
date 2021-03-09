
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      border:'none',
      borderRadius:'5px',
      // boxShadow:'0 1rem 2rem rgba(0,0,0,.6)',
    },
    '& .MuiInputBase-input':{
      color:'#bbbbbb',

    },
  
    '& .MuiFormLabel-root':{
      fontSize:'1.3rem',
    }
  },
  paper: {
    backgroundColor:'#383838',
    boxShadow:'0 1rem 2rem rgba(0,0,0,.6)',
    position: 'relative',
    padding: theme.spacing(2),
    borderRadius: '5px',
    color:'#fff',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',

  },
  fileInput: {
    width: '97%',
    margin: '10px 0 ',
  },
  message: {
    marginBottom: '8rem !important',
    
  },
  

  buttonSubmit: {
    marginBottom: 10,
  },
  
}));