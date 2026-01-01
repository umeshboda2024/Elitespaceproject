import { Box, Container, Typography, Button } from "@mui/material";
import villa from "../Assets/images/Getintouchimage.jpg";

const GetInTouchSection = () => {
  const handleContactClick = () => {
    const section = document.getElementById("footer-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        py: 10,
        // background: "linear-gradient(135deg, #0b5c6b, #0e7688)",
        color: "#fff",
        textAlign: "center",
        backgroundImage: `url(${villa})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "60%",
        backgroundPositionY: "40%",
      }}
    >
      <Container>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Looking for Your Dream Home?
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 650,
            mx: "auto",
            mb: 4,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Let our experts help you find the perfect property that fits your
          lifestyle and budget.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleContactClick}
          sx={{
            backgroundColor: "#fff",
            color: "#0b5c6b",
            px: 4,
            py: 1.5,
            fontWeight: "bold",
            borderRadius: 3,
            "&:hover": {
              backgroundColor: "#f1f1f1",
            },
          }}
        >
          Get In Touch
        </Button>
      </Container>
    </Box>
  );
};

export default GetInTouchSection;
