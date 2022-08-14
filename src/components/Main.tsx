import { FC, ReactElement, useState } from "react";
import { Box } from "@mui/material";
import Form from "./Form";
import FoodMenu from "./FoodMenu";

export const Main: FC = (): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [foodMenu, setFoodMenu] = useState<any>({});

  const handleShowMenu = (val: boolean) => {
    setShowMenu(val)
  }
  const submitFoodData = (data: any) => {
      setFoodMenu(data)
  } 
  return (
    <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        style={{margin: "3rem"}}
      >
        {showMenu && <FoodMenu foodMenu={foodMenu} handleShowMenu={handleShowMenu} />}
        {!showMenu && <Form handleShowMenu={handleShowMenu} submitFoodData={submitFoodData} />}
    </Box>
  );
};

export default Main;