import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

function ProgressBar({ progress = 50 }) { // Default progress at 50%
  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1, color: "#ffffff" }}>
        Learning Progress: {progress}%
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#444", // Darker background for contrast
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#e0c097", // Gold progress color
          },
        }}
      />
    </Box>
  );
}

export default ProgressBar;
