import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({

    link:{
        // textDecoration:'none',
        float:'right',
        fontWeight:'bold',
        transition:'all .3s',
        '&:hover':{
            transform:'scale(1.1)',
            color:'black',
        }
    }
    ,
    message:{
        float:'left',

    },
    deleteIcons:{
        float:'right',
        padding:'0',
    },

    moment:{
        float:'right',
        paddingRight:'1rem',
    },
}));