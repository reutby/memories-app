import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    notification:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    link:{
        // textDecoration:'none',
        marginRight:'1rem',
        fontWeight:'bold',
        transition:'all .3s',
        '&:hover':{
            transform:'scale(1.1)',
            color:'black',
        }
    }
    ,
    message:{
        marginRight:'auto',
        color:'#fff',

    },
   
    moment:{
        color:'#fff',
        paddingRight:'1rem',
        
    },
    deleteIcons:{
        color:'#fff',
        padding:'1rem',
        marginRight:'1rem',
        '&:hover':{
            backgroundColor:'rgba(0,0,0,.6)',
        }
    }
    // [theme.breakpoints.down('sm')] :{
    //     notification:{
    //         flexDirection:'column',
    //     }
    // }
}));