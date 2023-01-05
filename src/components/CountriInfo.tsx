import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton  from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { Country } from "../types/type";
import { List, ListItem } from "@mui/material";

type PropType = {
  countryDetail: Country;
};

const CountryDetailItem = ({ countryDetail }: PropType) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {countryDetail.name.common.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={countryDetail.name.common}
          subheader={countryDetail.capital[0]}
        />
        <CardMedia
          component="img"
          height="194"
          sx={{ border: "1px solid lightgrey" }}
          image={countryDetail.flags.png}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <List>
              <ListItem>
                <ArrowRightIcon />
                <strong>Region</strong>: {countryDetail.region}
              </ListItem>
              <ListItem>
                <ArrowRightIcon />
                <strong>Population</strong>: {countryDetail.population}
              </ListItem>
              <ListItem>
                <ArrowRightIcon />
                <strong>Languages</strong>:
                <br />
                <ul>
                  {Object.keys(countryDetail.languages).map((item, index) => {
                    return (
                      <li key={crypto.randomUUID()}>
                        <strong>
                          <em>{item}</em>
                        </strong>
                        :{" "}
                        <em>{Object.values(countryDetail.languages)[index]}</em>
                      </li>
                    );
                  })}
                </ul>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
export default CountryDetailItem;