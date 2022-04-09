import React from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, Avatar } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsIcon from '@mui/icons-material/Apps';
import "./css/header.css";


const Header = ()=>{
    return (
    <div className="header">
        
        <div className="header_left">
            <IconButton>
                <ReorderIcon/>    
            </IconButton>  
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="Logo" /> 
        </div>

        <div className="header_middle">

            <div className="search_mail">
                <IconButton>
                    <SearchIcon/>  
                </IconButton> 
                <input type="text" placeholder="Seach mail" />
                <IconButton>
                    <ExpandMoreIcon/>    
                </IconButton> 
            </div>

        </div>

        <div className="header_right">

                <IconButton>
                    <HelpOutlineIcon/>  
                </IconButton>

                 <IconButton>
                    <SettingsIcon/>  
                </IconButton> 

                <IconButton>
                    <AppsIcon/>  
                </IconButton> 

                <Avatar src="https://lh3.google.com/u/0/ogw/ADea4I79rk80YwD-wbd1y_pVC7uJCeCXQjSGlZfphIpx=s32-c-mo"/>
                
 
        </div>

    </div>
    )
};

export default Header;