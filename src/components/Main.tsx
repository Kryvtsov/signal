import { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import Form from "./Form";

export const Main: FC = (): ReactElement => {
  return (
    <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Form />
    </Box>
  );
};

export default Main;