import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CountriesItem from "./CountriesItem";
import { Country } from "../types/type";
import { fetchCountriesData } from "../redux/thunk/countries";
import { RootState, AppDispatch } from "../redux/strore";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

type PropType = {
  userInput: string;
};

function createData(
  flags: {
    svg: string;
  },
  name: {
    common: string;
  },
  region: string,
  population: number,
  languages: object,
  favorite: boolean,
  capital: string[],
  maps: {
    googleMaps: string;
  }
): Country {
  return {
    flags,
    name,
    region,
    population,
    languages,
    favorite,
    capital,
    maps,
  };
}

export default function CountriesList({ userInput }: PropType) {
  //const [sortBtn, setSortBtn] = useState(false);
  const countriesList = useSelector(
    (state: RootState) => state.countries.countries
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userInput === "") {
      dispatch(fetchCountriesData());
    }
  }, [dispatch, userInput]);

  const countryRows = countriesList.map((country) => {
    return createData(
      country.flags,
      country.name,
      country.region,
      country.population,
      country.languages,
      country.favorite,
      country.capital,
      country.maps
    );
  });

  return (
    <div>
      {countriesList.length === 0 && (
        <div>
          <i className="fas fa-spinner fa-spin fa-xl" />
          <p style={{ marginTop: "10px" }}>Loading...</p>
        </div>
      )}
      <TableContainer component={Paper} style={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <strong>Flag</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Name</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Region</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Population</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Languages</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>Favorite</strong>
              </StyledTableCell>
              <StyledTableCell align="center">
                <strong>More</strong>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          {countryRows.map((country) => {
            return <CountriesItem key={crypto.randomUUID()} country={country} />;
          })}
        </Table>
      </TableContainer>
    </div>
  );
}