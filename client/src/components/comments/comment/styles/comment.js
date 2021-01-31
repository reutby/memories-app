import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme)=>({
    commentCard:{  
        border:'1px solid #fff',
        backgroundColor:'#000',
        borderRadius:'10px',
        position:'relative',
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
        top:'.5rem',
        right:'.5rem',
    },
    userName:{
        color:'#fff',   
        display:'flex',
        margin:'.5rem',
        'width':'5rem',
        fontSize:'1.1rem',
        fontWeight:'bold',
        textAlign:'left',
        textTransform:'capitalize',
        position:'relative',
        top:'.2rem',
    },
    comment:{
        // display:'flex',
        position:'relative',
        width:'12rem',
        paddingLeft:'1rem',
        margin:'0 1rem 1rem 3rem',
        overflowWrap: 'break-word',
        color:'#fff',
        // paddingLeft:'.5rem',
    }

}));