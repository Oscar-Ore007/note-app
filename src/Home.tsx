import { Box, Card, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Card
        sx={{
          width: "20rem",
          height: "10rem",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5">Welcome to the notes app</Typography>
      </Card>
    </Box>
  );
}

export default Home;
