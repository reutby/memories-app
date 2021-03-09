import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    followCount: {
        fontSize: '1rem',
        textTransform: 'capitalize',
        color: '#fff',

    },
    followersList: {
        position: 'absolute',
        bottom: '3rem',
        left:'0',
    },
    followDiv:{
        position:'relative',
    },
    infoContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
       
    },
    postsCount: {
        textTransform: 'capitalize',
        fontSize: '1rem',
        display: 'flex',
    },
    highlightCount: {
        fontWeight: 'bold',
        marginRight: '.5rem',
    }
    ,

    [theme.breakpoints.down('sm')]: {

        profileInfo: {
            marginLeft: '0',
        },
        infoContent: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },


    }
}));