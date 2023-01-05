import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  IconButton,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Country } from "../types/type";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState, AppDispatch } from "../redux/strore";
import countriesActions from "../redux/slice/countries";
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import { tableCellClasses } from '@mui/material/TableCell';
import Tooltip from "@mui/material/Tooltip";
import { MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




type PropType = {
  country: Country;
};

const CountriesItem = ({ country }: PropType) => {
  const [favoritClick, setFavoriteClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const favoriteClickHandler = () => {
    setFavoriteClick(!favoritClick);
    if (favoritClick){
      dispatch(countriesActions.removeFromFav(country.name.common))
      setFavoriteClick(!favoritClick)
    }else{
      dispatch(countriesActions.addToFav(country))
      handleClick()
      setFavoriteClick(!favoritClick)
    }
  };
  return (
    <div className="countriesitem">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Flag</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Region</StyledTableCell>
            <StyledTableCell align="right">Population</StyledTableCell>
            <StyledTableCell align="right">Language</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         <StyledTableRow key={crypto.randomUUID()} >
              <StyledTableCell component="th" scope="row">
              <img src={country.flags.png} alt ="flag" />
              </StyledTableCell>
              <StyledTableCell align="right">{country.name.common}</StyledTableCell>
              <StyledTableCell align="right">{country.region}</StyledTableCell>
              <StyledTableCell align="right">{country.population}</StyledTableCell>
              <StyledTableCell align="center" className="language">
                  {country.languages && (
                    <div>
                      {Object.keys(country.languages).map((countri, index) => {
                        return (
                          <li key={crypto.randomUUID()}>
                           {countri}: {Object.values(country.languages)[index]}
                          </li>
                        );
                      })}
                    </div>
                  )}
                </StyledTableCell>
                <StyledTableCell align="center" className="language">
                <Tooltip title="Add to favorite list">
              <IconButton
                aria-label="add to favorites"
                onClick={favoriteClickHandler}
              >
                <FavoriteIcon sx={{ color: favoritClick ? "red" : "gray" }} />
              </IconButton>
            </Tooltip>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                {country.name.common} add to favorite list!
              </Alert>
            </Snackbar>
            </StyledTableCell>
            <StyledTableCell align="center" className="language">
            
            <Tooltip title="More information">
              <MenuItem
                component={Link}
                to={`/countries/${country.name.common}`}
              >
                <MoreHorizIcon />
              </MenuItem>
            </Tooltip>
            
            </StyledTableCell>
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
export default CountriesItem
