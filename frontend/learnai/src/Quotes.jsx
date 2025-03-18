import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

function QuoteSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.2)" }}
    >
      <Card 
        className="p-8 bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-xl rounded-2xl"
        sx={{
          padding: "24px",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom 
          className="text-2xl font-semibold text-gray-200"
        >
          "Education is the most powerful weapon which you can use to change the world."
        </Typography>
        <Typography 
          variant="subtitle1" 
          className="italic text-gray-400 text-lg font-light"
        >
          - Nelson Mandela
        </Typography>
      </Card>
    </motion.div>
  );
}

export default QuoteSection;
