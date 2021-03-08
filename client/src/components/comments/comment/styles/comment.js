import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme)=>({
    commentCard:{  

        backgroundColor:'#252525',
        position:'relative',
        marginBottom:'1rem',
        boxShadow:'1rem 1rem 3rem rgba(0,0,0,.8)',
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
        width:'10rem',
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
        width:'40rem',
        paddingLeft:'1rem',
        margin:'0 1rem 1rem 3rem',
        overflowWrap: 'break-word',
        color:'#fff',
        // paddingLeft:'.5rem',
    },
    [theme.breakpoints.down('md')] : {
        comment:{
            width:'25rem',
        },
       
    },
    [theme.breakpoints.down('sm')] : {
        comment:{
            width:'12rem',
        },
        userName:{
            width:'5rem',
        }   
    }

}));