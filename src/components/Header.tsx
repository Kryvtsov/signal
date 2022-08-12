import { FC, ReactElement } from "react";
import { Box, Container, Grid, Hidden, Typography } from "@mui/material";

export const Header: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="secondary.light" variant="h4">
              <Hidden mdDown>Welcome to the </Hidden>
              Canada Food Guide
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;