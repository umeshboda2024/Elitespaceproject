import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import villa from "../Assets/images/Getintouchimage.jpg";

const GetInTouchSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/Contact");
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        color: "#fff",
        textAlign: "center",
        backgroundImage: `url(${villa})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65), rgba(0,0,0,0.4))",
          zIndex: 1,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
          sx={{ fontSize: { xs: "1.8rem", md: "2.6rem" } }}
        >
          Looking for Your Dream Home?
        </Typography>

        <Typography
          sx={{
            maxWidth: 680,
            mx: "auto",
            mb: 4,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Let our experts guide you to premium properties that fit your
          lifestyle and budget.
        </Typography>

        <Button
          size="large"
          onClick={handleContactClick}
          sx={{
            px: 5,
            py: 1.6,
            borderRadius: "50px",
            fontWeight: "bold",
            color: "#000",
            background: "linear-gradient(90deg, #00e5ff, #1de9b6)",
            "&:hover": {
              background: "linear-gradient(90deg, #1de9b6, #00e5ff)",
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
