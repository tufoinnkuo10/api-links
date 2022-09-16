import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
// import { CallMissedSharp } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
    return(
        <AppBar>
            <Toolbar className={Classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Tufoin Travel
                </Typography>
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Tufoin adventures
                </Typography>
                <Autocomplete>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputinput}} />
                    </div>
                </Autocomplete>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header