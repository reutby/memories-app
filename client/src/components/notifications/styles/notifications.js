import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    notification: {
        boxShadow:'0 1rem 1rem rgba(0,0,0,.8)',
        margin:'1rem',
        padding:'1rem',
        transition:'all .5s',
        paddingRight:'0',
        backgroundColor:'#fff',
        '&::after':{
            content: '""',
            display: 'table',
            clear: 'both',
        },
        '&:hover':{
           transform:'scale(1.1)',
        }
    }

}
));
