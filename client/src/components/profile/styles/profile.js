import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        position: 'relative',
        padding: theme.spacing(6),
        width: '40rem',
        boxShadow: '0 1rem 2rem rgba(0,0,0,.6)',
        backgroundColor: '#252525',
    },
    profileDiv: {
        display: 'flex',
        flex: '0 0 100%',
    },
    profileInfo: {
        color:'#fff',
        flexBasis: '50%',
        marginLeft: '3rem',
        display: 'flex',
        flexDirection: 'column',
    },
    followersCount:{
        fontSize: '1rem',
        '&:hover + $followersList':{
            display:'block',
        }
    },
    followersList:{
        position:'absolute',
        display:'none',
    },
    
    titleName: {
        color:'#fff',
        textTransform: 'capitalize',
        textDecoration: 'underline',
        marginBottom: '1rem',
    },
    avatar: {
        width: '10rem',
        height: '10rem',


    },
    iconEdit: {
        position: 'absolute',
        color: '#595959',
        top: '0',
        right: '0',
        padding: '1rem',
    },
    infoContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    postsCount: {
        fontSize: '1rem',
    },
    highlightCount: {
        fontWeight: 'bold',
    }
    ,
    followButton: {
        marginTop: '2rem',

    },

    [theme.breakpoints.down('sm')]: {
        paper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
        profileDiv: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: '0 0 100%',
        },
        profileInfo: {
            marginLeft: '0',
        },
        infoContent: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        avatar: {
            width: '6rem',
            height: '6rem',
        }

    }
}));