import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    listContainer:{
        position:'absolute',
          
        boxShadow:'0 1rem 2rem rgba(0,0,0,.6)',
        width:'26rem',
        zIndex:'3000',
        marginTop:'-.3rem',
        paddingTop:'.5rem',
        maxHeight:'10rem',
        overflowY:'scroll',
        left:'0',
        top:'3rem',
    },
    [theme.breakpoints.down('sm')]:{
        width:'auto',
    }
}));