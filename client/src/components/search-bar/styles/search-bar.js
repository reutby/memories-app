import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    form: {
        display: 'flex',
        alignItems:'center',
        position:'relative',
    },
    searchResultList:{
        border:'1px solid black',
        visibility:'hidden',
        // position:'absolute',
        opacity:'0',
        zIndex:'3000',
        // transform:'translateY(-1rem)',
        transition:'all 1s .5s',
    },
    searchInput: {
        flex: '0 0 30%',
        
        fontFamily:'inherit',
        backgroundColor: '#fff',
        padding: '.5rem 2rem .5rem .8rem',
        transition:'all 1s',
        fontSize:'1.2rem',
        '&:focus': {
            outline: 'none',
            border: ' 1px solid #252525',
            flex:'0 0 35%',
            boxShadow:'0 1rem 1rem rgba(0,0,0,.6)',

        },
        '&:focus ~ $searchResultList':{
            opacity:'1',
            visibility:'visible',
            
        }
    },
    searchIcon:{
        color:'#000',
        marginLeft:'-2rem',

    },
   
    
}));