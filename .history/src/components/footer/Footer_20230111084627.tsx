import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, position: "relative", textAlign: "center" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#1976d2", padding: "30px 50px"}}
      >
        <Toolbar>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ display: "block", margin: "0 20px" }}
          >
            <h1>Coutryes</h1>
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
          <div className="contact">
          <h3>Contact Us</h3>
          <IconButton
              size = "small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <EmailIcon/> 
            info@example.com
            </IconButton><br/>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <LocalPhoneIcon/> + 98 765 432 10
            </IconButton><br/>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <WhatsAppIcon /> + 01 234 567 89
            </IconButton>
          </div>
          </Box>
          <Box sx={{ margin: "0 20px" }}>
            <h3>Follow Us</h3>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}