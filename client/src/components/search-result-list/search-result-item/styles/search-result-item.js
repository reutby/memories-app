import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    itemContainer:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'.5rem',
        margin:'.5rem',
        '&:hover':{
        //   backgroundColor:'#cdd0cb', 
          boxShadow:'0 1rem 1.5rem rgba(0,0,0,.5)', 
        },
        '& > *':{
            paddingRight:'1rem',
            fontSize:'.8rem',
        }
    },

    profileName:{
        textTransform:'capitalize',
    },
    [theme.breakpoints.down('sm')]:{

    }
    
}));