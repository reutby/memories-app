import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    messageForm: {
        overflow: 'hidden',
        borderRadius: '6px',
        border: ' 2px solid white',
        backgroundColor:'#313235',   
        display: 'flex',        
    },

    messageInput: {
        height: '40px',
        width: '90%',
        backgroundColor:'#313235', 
        border: '1px solid #313235',
        color: 'white',
        padding: '0px 18px',
        outline: 'none',
        fontSize: '15px',
        display: 'flex',
    },

    imageButton: {
        cursor: ' pointer',
        // padding: '0 18px',
        height: '100%',
        position:'relative',
        top:'.5rem',
        
    },
    imageButtonContainer: {
        
        position:'relative',
        backgroundColor:'#313235',   
        height: '100%',
      
    },
    buttonsDiv:{
        width:'10%',
        display:'flex',
        marginLeft:'1rem',
    },

    sendButton: {
        height: '42px',
        color: 'white',
        border: 'none',
        backgroundColor:'#313235', 
        //padding: ' 0px 18px',
        position: 'relative',
        cursor: ' pointer',

    },
    sendIcon: {
        
        fontSize:'1.3rem',
        position: ' relative',
        transform: 'rotate(-90deg)',
    },

    pictureIcon: {

        position: 'relative',
        fontSize: '1.5rem',
        color: 'white',
    }

}));