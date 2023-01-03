import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/strore";
import { fetchCountriesData } from "../redux/thunk/countriesthunk";
import SearchForm from "./SearchForm";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';


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


export default function CountriesList() {
  const countriesList = useSelector(
    (state:RootState)=> state.countries.countries);
    const dispatch = useDispatch<AppDispatch>();
//fetch data
    useEffect(()=>{
      dispatch(fetchCountriesData());
    }, [dispatch]);

    console.log(countriesList, "list")
  return (
    <div>

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
          </TableRow>
        </TableHead>
        <TableBody>
        {
        countriesList.map((item) => <StyledTableRow key={crypto.randomUUID()} >
              <StyledTableCell component="th" scope="row">
              <img src={item.flags.png} alt ="flag" />
              </StyledTableCell>
              <StyledTableCell align="right">{item.name.common}</StyledTableCell>
              <StyledTableCell align="right">{item.region}</StyledTableCell>
              <StyledTableCell align="right">{item.population}</StyledTableCell>
              <StyledTableCell align="right">{item.area}</StyledTableCell>
              <BottomNavigationAction label="Favorites" value="favorites"icon={<FavoriteIcon />}/>
              <BottomNavigationAction label="Favorites" value="favorites"icon={<NavigateNextSharpIcon />}/>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

