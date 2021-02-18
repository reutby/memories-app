import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    appButton:{
        borderRadius:'50%',
        color:'white',
        
        backgroundColor:' #313235',
        position:'fixed',
        top:'94vh',
        right:'.5rem',

        '&:hover':{
            color:'#313235',
            backgroundColor:'white',
        }
        ,
        
    }
    ,chatContainer:{
        position: 'fixed',
        height: '80vh',
        width: '70%',
        top: '20vh',
        borderRadius: '1rem 0 0 0',
        border: 'solid 2px #313235',
        boxShadow: '0 1rem 2rem rgba(0,0,0,.5)',
        overflow: 'hidden',
        right: '0'
    },
    [theme.breakpoints.down('md')] : {
        chatContainer:{
            width:'100%',
            height:'100vh',
            top:'0',

            
        }
       
    },
    [theme.breakpoints.down('sm')] : {
      
    }

}))