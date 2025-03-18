import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import NameD from "./nameanddate";
import Subjects from "./subjects";
import { Container, Card, Typography, Box ,Grid} from "@mui/material";
import QuoteSection from "./Quotes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", // Modern font
  },
  palette: {
    mode: "dark", // Ensures consistent dark mode
    primary: { main: "#64ffda" }, // Cyan color
    secondary: { main: "#ff4081" }, // Pink highlight
    background: { default: "#121212", paper: "#1e1e1e" }, // Dark mode shades
    text: { primary: "#ffffff", secondary: "#b0bec5" }, // Better contrast
  },
});
function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="flex min-h-screen bg-gray-900 text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <motion.div
          className="flex-1 ml-64 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Container maxWidth="lg">
            {/* Name & Quote Section */}
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    padding: "24px",
                    boxShadow: 8,
                    borderRadius: "16px",
                    backgroundColor: "background.paper",
                    transition: "0.3s",
                    "&:hover": { transform: "scale(1.02)", boxShadow: 12 },
                  }}
                >
                  <NameD />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <QuoteSection />
              </Grid>
            </Grid>

            {/* Dashboard Card */}
            <Card
              className="p-6 my-6 shadow-lg rounded-2xl text-white"
              sx={{
                padding: "24px",
                boxShadow: 8,
                borderRadius: "16px",
                backgroundColor: "background.paper",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 12 },
              }}
            >
              <Typography variant="h4" color="primary" gutterBottom>
                🎯 Welcome to Your Learning Dashboard!
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Track your progress, explore subjects, and excel in your studies with AI-powered learning.
              </Typography>
            </Card>

            {/* 10th Class Subjects */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" color="primary" className="mb-4">
                📚 10th Class Subjects
              </Typography>
              <Subjects classLevel="10th" />
            </motion.div>
          </Container>
        </motion.div>
      </Box>
    </ThemeProvider>
  );
}

export default Homepage;



