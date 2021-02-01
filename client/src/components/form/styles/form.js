
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    position:'relative',
    padding: theme.spacing(2),
    borderRadius:'15px'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position:'relative',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0 ',

  },
  message:{
    marginBottom:'8rem !important',
  },

  buttonSubmit: {
    marginBottom: 10,
  },
}));