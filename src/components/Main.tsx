import { FC, ReactElement } from "react";
import { Box, Paper, Typography } from "@mui/material";

export const Main: FC = (): ReactElement => {
  return (
    <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <Typography color="primary.dark" variant="h1">
            Place for form
          </Typography>
        </Paper>
      </Box>
  );
};

export default Main;