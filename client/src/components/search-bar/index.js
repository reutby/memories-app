import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./styles/search-bar";
import { SearchResultList } from "../";

const SearchBar = ({ user }) => {
    const classes = useStyles();
    const [searchInput, setSearchInput] = useState("");
    const userId = user?.result?._id || user?.result?.googleId;
    const profiles = useSelector((state) => state.profiles);
    const [userProfile, setUserProfile] = useState(null);
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    useEffect(() => {
        setFilteredProfiles(profiles.filter((profile) => profile.userId !== userId));
        const userIndex = profiles.findIndex((profile) => profile.userId === userId);
        if (userIndex !== -1) {
            setUserProfile(profiles[userIndex]);
        }
       
    }, [profiles, userId]);

    const handleChange = (e) => {

        const value = e.target.value;
        setSearchInput(value);
        if (value === "") {
            setFilteredProfiles(profiles.filter((profile) => profile.userId !== userId));
        }
        else {
            setFilteredProfiles((prev) => prev.filter((profile) => profile.name.includes(value)));
        }
    }

    return (

        <form className={classes.form}>
            <input placeholder="Search friends..." value={searchInput} type="text" onChange={handleChange} className={classes.searchInput} id="outlined-basic" variant="outlined" />
            <SearchIcon className={classes.searchIcon} fontSize="default" />
            {filteredProfiles.length && <div className={classes.searchResultList}>
                <SearchResultList filteredProfiles={filteredProfiles} userProfile={userProfile} />

            </div>}

        </form>

    )
}

export default SearchBar;
