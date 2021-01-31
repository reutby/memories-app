import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    form: {
        display: 'flex',
        flexDirection: 'rows',
        width: '100%',

    },
    commentInput: {
        width: '100%',
        padding: '.3rem .5rem',
        borderBottomColor: '#000',
        borderRadius: '15px',
        fontSize: '1.5rem',
        backgroundColor: '#fff',
        display: 'flex',
    },
    emojiButton: {
        color: '#fff',
        display:'flex',
    },
    postButton: {
        fontWeight: 'bold',
        fontSize: '1rem',
        display:'flex',
    },
    emojiPicker: {
        position: 'absolute',
        right: '6rem',
        bottom: '4rem',
        zIndex: '1000',
        width: 'auto',
        height: 'auto',
    },
    flexBox:{
        display:'flex',
        flexDirection:'row', 
        width:'90%',   
    },
    [theme.breakpoints.down('sm')] :{
        emojiPicker:{
            width:'auto',
            right:'.8rem',
            bottom:'6.5rem',
        },
        form:{
            flexDirection:'column',
        },
        commentInput: {
            fontSize:'1rem',
            width:'90%',
        },
        flexBox:{
            width:'100%',
        }
    }
}))
