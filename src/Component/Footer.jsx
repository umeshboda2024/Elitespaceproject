import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0b5c6b", color: "#fff", mt: 8 }}>
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Grid container spacing={{ xs: 4, md: 10 }}>
          {/* Brand */}
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Elite Space
            </Typography>
            <Typography mt={2} color="rgba(255,255,255,0.8)">
              Elite Space helps you buy, sell, and rent premium properties
              across India with trusted agents and verified listings.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Quick Links
            </Typography>
            {["Home", "Buy", "Rent", "Sell", "Agent", "Blog"].map((item) => (
              <Typography key={item} mb={1}>
                <Link href="#" underline="none" color="inherit">
                  {item}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Cities */}
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Popular Cities
            </Typography>
            {["Ahmedabad", "Mumbai", "Pune", "Gurugram", "Delhi"].map(
              (city) => (
                <Typography key={city} mb={1}>
                  <Link href="#" underline="none" color="inherit">
                    {city}
                  </Link>
                </Typography>
              )
            )}
          </Grid>

          {/* Contact */}
          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Contact Us
            </Typography>
            <Typography mb={1}>📧 support@elitespace.com</Typography>
            <Typography mb={1}>📞 +91 98765 43210</Typography>
            <Typography mb={2}>📍 India</Typography>

            <Box>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Bar */}
      <Box sx={{ backgroundColor: "#084c59", py: 2 }}>
        <Container>
          <Typography align="center" variant="body2">
            © {new Date().getFullYear()} Elite Space. All Rights Reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
