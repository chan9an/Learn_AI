import React from "react";
import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";

function QuoteSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 215, 0, 0.3)" }}
      className="p-6"
    >
      <Card
        sx={{
          padding: "32px",
          borderRadius: "16px",
          background: "#303030", // Matching dark gray background
          color: "#ffffff",
          boxShadow: "0px 4px 10px rgba(255, 215, 0, 0.2)",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.02)", boxShadow: "0px 6px 20px rgba(255, 215, 0, 0.4)" },
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{
            fontFamily: "'Playfair Display', serif", // Classy font
            fontWeight: 600,
            textAlign: "center",
            fontSize: "24px",
            color: "#f5f5f5", // Softer white for readability
          }}
        >
          "Education is the most powerful weapon which you can use to change the world."
        </Typography>
        <Typography 
          variant="subtitle1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            textAlign: "right",
            fontSize: "18px",
            color: "#d1d1d1", // Subtle gray for a balanced contrast
            marginTop: "12px",
          }}
        >
          - Nelson Mandela
        </Typography>
      </Card>
    </motion.div>
  );
}

export default QuoteSection;
