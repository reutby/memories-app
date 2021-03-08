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

    },
   
    moment:{

        paddingRight:'1rem',
        
    },

    // [theme.breakpoints.down('sm')] :{
    //     notification:{
    //         flexDirection:'column',
    //     }
    // }
}));