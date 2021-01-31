import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    form:{
        display:'flex',
        flexDirection:'rows',
        width:'100%',
    },
    commentInput: {
        width:'100%',
        padding: '.3rem 1rem',
        borderBottomColor: '#000',
        borderRadius: '15px',
        fontSize: '1rem',
        backgroundColor: '#fff',
        display:'flex',
    },

    postButton: {
        fontWeight: 'bold',
        fontSize: '1rem'
    },
});