import CountriesItem from "./CountriesItem";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/strore";
import { useEffect } from "react";
import { fetchCountriesData } from "../redux/thunk/countriesthunk";

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
import { styled } from '@mui/material/styles';
import TableHead from '@mui/material/TableHead';
import { tableCellClasses } from '@mui/material/TableCell';

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

const CountriesList = () => {
  const countriesList = useSelector(
    (state: RootState) => state.countries.countries
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  const tableTilte = [
    "Flag",
    "Name",
    "Region",
    "Population",
    "Languages",
    "Favorite",
  ];
  return (
    <div>
        {countriesList.slice(0, 20).map((country) => (
              <CountriesItem key={crypto.randomUUID()} country={country} />
            ))}

      
    </div>
  );
};

export default CountriesList;

