import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import useStylesBootstrap from "./styles/bootstrap-tool-tip" 
const BootstrapTooltip = (props)=> {
    const classes = useStylesBootstrap();

    return <Tooltip arrow classes={classes} {...props} />;
}

export default BootstrapTooltip;