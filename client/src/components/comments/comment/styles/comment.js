import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme)=>({
    commentCard:{  
        border:'1px solid #fff',
        backgroundColor:'#000',
        borderRadius:'10px',
    },
    profile:{
        display:'flex',
        flexDirection:'row',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        width:'2rem',
        height:'2rem',
        margin:'.5rem',
        display:'flex',
    },
    avatar:{
        width:'2rem',
        height:'2rem',
        margin:'.5rem',
        display:'flex',
    },
    time:{
        color:'#fff',
        position:'absolute',
        top:'1rem',
        right:'1rem',
    },
    userName:{
        color:'#fff',   
        display:'flex',
        margin:'.5rem',
        fontSize:'1.1rem',
        fontWeight:'bold',
        textAlign:'center',
        position:'relative',
        top:'.2rem',
    },
    comment:{
        // display:'flex',
        position:'relative',
        margin:'0 3rem 1rem 3rem',
        overflowWrap: 'break-word',
        // margin:'.5rem',
        color:'#fff',
        // paddingLeft:'.5rem',
    }

}));