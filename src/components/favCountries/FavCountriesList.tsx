import { useSelector } from "react-redux";
import { RootState } from "../../redux/strore";
import {Snackbar, Alert} from "@mui/material";
import {useState } from "react";

import FavCountriesItem from "./FavCountriesItem";

export default function FavCountriesList (){
  const FavCountriesList = useSelector((state: RootState) => state.countries.favorite);
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="favorite-list">
      {FavCountriesList.length === 0 ? (
        <p>There is no country in your favorite list.</p>
      ) : (
        FavCountriesList.map((favCountry) => {
          return (
            <FavCountriesItem setOpen = {setOpen} key={crypto.randomUUID()} favCountry={favCountry} />
          );
        })
      )}
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
           removed from favorite list!
          </Alert>
        </Snackbar>
    </div>
  );
};