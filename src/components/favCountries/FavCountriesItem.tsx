import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Country } from "../../types/type";
import { countriesActions } from "../../redux/slice/countries";

type PropType = {
  favCountry: Country;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function FavCountriesItem({ favCountry, setOpen }: PropType) {
  const dispatch = useDispatch();

  const removeFromFavorite = () => {
    dispatch(countriesActions.removeFromFav(favCountry.name.common));
    setOpen (true)
  };

  return (
    <div className="favorite-item">
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "none",
          position: "relative",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={favCountry.flags.svg}
              sx={{ border: 1 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={favCountry.name.common}
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: "block" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Region: {favCountry.region}
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Population: {favCountry.population}
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
        <IconButton
          sx={{ position: "absolute", right: 0, bottom: 20 }}
          aria-label="removed from favorite list"
          onClick={removeFromFavorite}
        >
          <DisabledByDefaultIcon color="error" />
        </IconButton>
        <Divider variant="inset" component="li" />
        
      </List>
    </div>
  );
};
