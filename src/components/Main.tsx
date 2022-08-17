import { FC, ReactElement, useState } from "react";
import { Box } from "@mui/material";
import Form from "./Form";
import FoodMenu from "./FoodMenu";
import FormFirstStep from "./FormFistStep";
import FormFamily from './FormFamily';

export const Main: FC = (): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [foodMenu, setFoodMenu] = useState<any>({});
  const [showUserForm, setShowUserForm] = useState<boolean>(false);
  const [showFamilyForm, setShowFamilyForm] = useState<boolean>(false);



  const handleShowMenu = (val: boolean, menuType?: string) => {
    setShowUserForm(false);
    setShowFamilyForm(false);
    
    if (showMenu !== val) {
      setShowMenu(val);
    }
    if (menuType) {
      const isUserMenu = menuType === 'user';
      setShowUserForm(isUserMenu);
      setShowFamilyForm(!isUserMenu);
    }
  }
  const submitFoodData = (data: any) => {
      setFoodMenu(data)
  } 
  const isShowFormFirstStep = !showMenu && !showUserForm && !showFamilyForm;
  const isShowUserForm = !showMenu && showUserForm;
  const isShowFamilyForm = !showMenu && showFamilyForm;

  return (
    <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        style={{margin: "5rem"}}
      >
        {isShowFormFirstStep && <FormFirstStep handleShowMenu={handleShowMenu} />}
        {isShowUserForm && <Form handleShowMenu={handleShowMenu} submitFoodData={submitFoodData} />}
        {isShowFamilyForm && <FormFamily handleShowMenu={handleShowMenu} submitFoodData={submitFoodData} />}
        {showMenu && <FoodMenu foodMenu={foodMenu} handleShowMenu={handleShowMenu} />}
    </Box>
  );
};

export default Main;