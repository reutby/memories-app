import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    chatFeed: {
        height: '100%',
        width: '100%',
        overflow: 'scroll',
        backgroundColor: '#313235',
        position:'relative',
    },
    exitButton:{
        position:'absolute',
        top:'.5rem',
        right:'.5rem',
        color:'white',
    },
    chatTitleContainer: {
        width: ' calc(100% - 36px)',
        padding: '18px',
        textAlign: 'center',
    },
    chatTitle: {
        color: 'white',
        fontWeight: '800',
        fontSize: '24px',
    },
    chatSubtitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: '12px',
        paddingTop: '4px',
    },
    messageBlock: {
        width: '100%',
        display: 'inline-block',
    },
    isTypingMessage: {
        color: 'white',
        position: 'relative',
        bottom: '0',
    },
    readReceipts: {
        position: 'relative',
        bottom: '6px',
    },
    readReceipt: {
        width: '13px',
        height: '13px',
        borderRadius: '13px',
        margin: '1.5px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '14px',
    },
    messageFormContainer: {
        position:'absolute',
        bottom: '0 !important',
        width: '98%',
        padding: '18px',
        borderRadius: '5px',
        backgroundColor: '#313235',
    }

}));