import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import NameD from "./nameanddate";
import Subjects from "./subjects";
import { Container, Card, Typography, Box, Grid } from "@mui/material";
import QuoteSection from "./Quotes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ProgressBar from "./Progressbar";

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito', sans-serif", // Elegant & modern font
  },
  palette: {
    mode: "dark",
    primary: { main: "#d4af37" }, // Gold
    secondary: { main: "#ff7043" }, // Deep Orange
    background: { default: "#1a1a1a", paper: "#2a2a2a" }, // Softer grayish-black
    text: { primary: "#ffffff", secondary: "#bdbdbd" },
  },
});

function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="flex min-h-screen bg-black text-white">
        <Sidebar />
        <motion.div
          className="flex-1 ml-64 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="stretch">
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    padding: "24px",
                    boxShadow: 8,
                    borderRadius: "16px",
                    background: theme.palette.background.paper,
                    color: "#ffffff",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.02)", boxShadow: 12 },
                  }}
                >
                  <NameD />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    padding: "24px",
                    boxShadow: 8,
                    borderRadius: "16px",
                    background: theme.palette.background.paper,
                    color: "#ffffff",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.02)", boxShadow: 12 },
                  }}
                >
                  <QuoteSection />
                </Card>
              </Grid>
            </Grid>

            {/* Dashboard Welcome Section */}
            <Card
              className="p-6 my-6 shadow-lg rounded-2xl text-white"
              sx={{
                padding: "24px",
                boxShadow: 8,
                borderRadius: "16px",
                background: "#303030",
                color: "#ffffff",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 12 },
              }}
            >
              <Typography variant="h4" color="primary" className="mb-4">
                🎯 Welcome to Your Learning Dashboard!
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Track your progress, explore subjects, and excel in your studies with AI-powered learning.
              </Typography>

              {/* Progress Bar Component */}
              <Box sx={{ mt: 3 }}>
                <ProgressBar progress={75} />
              </Box>
            </Card>

            {/* 10th Class Subjects Section (NO EXTRA BOX) */}
            <Card
              className="p-6 my-6 shadow-lg rounded-2xl text-white"
              sx={{
                padding: "24px",
                boxShadow: 8,
                borderRadius: "16px",
                background: "#303030",
                color: "#ffffff",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 12 },
              }}
            >
             {/*  <Typography variant="h4" color="primary" className="mb-10">
                📚 10th Class Subjects
              </Typography> */}

              {/* Directly rendering Subjects component */}
              <Subjects classLevel="10th" />
            </Card>
          </Container>
        </motion.div>
      </Box>
    </ThemeProvider>
  );
}

export default Homepage;
