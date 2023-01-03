import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import PublicIcon from '@mui/icons-material/Public';




function HomeIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

export default function NavBar(){
    const [value, setValue] = React.useState(0);
//const addFavoriteCount = addFavorite.length
    return(

    <div className="navbar">
        <div className="logo">
            <h1>Countries</h1>
        </div>
        <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<Link to = "" className="Links_element"><HomeIcon /></Link>} />
        <BottomNavigationAction label="Countries" icon={<Link to = "/countries" className="Links_element"><PublicIcon /></Link>} />
        <BottomNavigationAction label="FavoriteIcon" icon={<Link to = "/favcountries" className="Links_element"><FavoriteIcon /></Link>} />
      </BottomNavigation>
    </Box>
    </div>
)
}