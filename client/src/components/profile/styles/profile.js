import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        position: 'relative',
        padding: theme.spacing(2),
        borderRadius: '15px',
        width: '30rem',

    },
    profileDiv: {
        display: 'flex',
        flex: '0 0 100%',
    },
    profileInfo: {

        flexBasis: '50%',
        marginLeft: '3rem',
        display: 'flex',
        flexDirection: 'column',
    },
    titleName: {
        textTransform: 'capitalize',
        textDecoration: 'underline',
        marginBottom:'1rem',
    },
    avatar: {
        width: '8rem',
        height: '8rem',


    },
    iconEdit: {
        position: 'absolute',
        color: '#595959',
        top: '0',
        right: '0',
        padding: '1rem',
    },
    infoContent:{
        display:'flex',
        justifyContent:'space-between',
    },
    postsCount: {
        fontSize:'1rem',
    },
    highlightCount:{
        fontWeight:'bold',
    }

}));