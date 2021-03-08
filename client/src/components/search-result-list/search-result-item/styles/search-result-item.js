import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    itemContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'1rem',
        margin:'.5rem',
        '&:hover':{
        //   backgroundColor:'#cdd0cb', 
          boxShadow:'0 1rem 1.5rem rgba(0,0,0,.5)', 
        },
    },
    profileName:{
        textTransform:'capitalize',
        color:'#bbbbbb',
    },
    
}));