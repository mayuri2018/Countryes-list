import {
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/strore";  
import { Country } from "../types/type";
import { countriesActions } from "../redux/slice/countries";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

const CountryItem = ({ country }: PropType) => {
  const favoriteState = useSelector(
    (state: RootState) => state.countries.favorite
  );
  const favoriteResult = favoriteState.some(
    (item) => item.name.common === country.name.common
  );
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
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
    if (favoriteResult) {
      dispatch(countriesActions.removeFromFav(country.name.common));
    } else {
      dispatch(countriesActions.addToFav(country));
      handleClick();
    }
  };

  return (
    <TableBody className="country-item">
      <StyledTableRow
        key={crypto.randomUUID()}
        sx={{borderBottom: "1px solid lightgrey"}}>
        <StyledTableCell component="th" scope="row" align="center">
          <img src={country.flags.svg} alt={country.name.common} />
        </StyledTableCell>
        <StyledTableCell align="center">{country.name.common}</StyledTableCell>
        <StyledTableCell align="center">{country.region}</StyledTableCell>
        <StyledTableCell align="center">{country.population}</StyledTableCell>
        <StyledTableCell align="center">
          {country.languages && (
            <ul>
              {Object.keys(country.languages).map((item, index) => {
                return (
                  <li key={crypto.randomUUID()}>
                    
                      {item}: {Object.values(country.languages)[index]}
                    
                  </li>
                );
              })}
            </ul>
          )}
        </StyledTableCell>
        <StyledTableCell align="center">
          <Tooltip title="Add to favorite list">
            <IconButton
              aria-label="add to favorites"
              onClick={favoriteClickHandler}
            >
              <FavoriteIcon sx={{ color: favoriteResult ? "red" : "gray" }} />
            </IconButton>
          </Tooltip>
        </StyledTableCell>
        <StyledTableCell align="center">
          <Tooltip title="More information">
            <Link to={`/countries/${country.name.common}`}>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {country.name.common} add to favorite list!
            </Alert>
          </Snackbar>
        </StyledTableCell>
      </StyledTableRow>
    </TableBody>
  );
};
export default CountryItem;