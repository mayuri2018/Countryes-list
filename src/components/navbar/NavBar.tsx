import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge, { BadgeProps } from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';

import { useSelector } from "react-redux";
import { RootState } from "../../redux/strore"; 

import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { MenuItem } from "@mui/material";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -2,
    padding: "0 4px",
  },
}));

export default function NavBar() {
  const favList = useSelector((state: RootState) => state.countries.favorite);

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", width: "100%", zIndex: "100" }}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography fontSize="20px">
             COUNTRY
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <MenuItem component={Link} to={"/"}>
          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
             <HomeIcon/>
            </IconButton>
          </MenuItem>
          <MenuItem component={Link} to={"/countries"}>
          <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
             <PublicIcon/>
            </IconButton>
          </MenuItem>
            <MenuItem component={Link} to={"/favcountries"}>
              <StyledBadge badgeContent={favList.length} color="error">
                <FavoriteIcon />
              </StyledBadge>
            </MenuItem>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}