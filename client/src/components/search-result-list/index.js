import React from 'react'
import {Paper, Grid } from "@material-ui/core";
import SearchResultItem from "./search-result-item";
import useStyles from "./styles/search-result-list";
const SearchResultList = ({userProfile, filteredProfiles})=> {
    const classes = useStyles();

    return (
        
            <Paper className= {classes.listContainer}>
                <Grid container>
                    {filteredProfiles.map((profile)=> <Grid item sm={12} key={profile._id}><SearchResultItem  profileItem = {profile} userProfile={userProfile}/> </Grid>)}

                </Grid>
              
            </Paper>
       
    )
}

export default SearchResultList;