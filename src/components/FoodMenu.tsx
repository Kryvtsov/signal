import { useState} from "react";
import {Box, Typography,Paper,Button, Grid} from "@mui/material";
import UserTextField from "./FormElements/UserTextField";
import UserDropDown from "./FormElements/UserDropDown";
import { ages, gender } from "../constants/form";
import { handleParse } from "../utils/converter";
import { getMenu } from '../utils/getMenu';
import FoodMenuItem from "./FoodMenuElements/FoodMenuItem";

type Values = {
    name : string,
    gender : string,
    age : string,
}

const FoodMenu = (props: any) => {
    const [values, setValues] = useState<Values>({
        name : "",
        gender : "",
        age : "",
    });
    
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);


    return (
        <Paper elevation={1}
        sx={{ padding: "2rem"}}>
            <Typography variant={"h3"} color="secondary.main">My food guide</Typography>
            <Typography variant={"h5"}>My recomended Food Guide Servings per day</Typography>

                <FoodMenuItem />
                <Box textAlign="right" mt={2} padding={1}>
                    <Button 
                        onClick={() => props.handleShowMenu(false)}
                        variant={"contained"} 
                        color="secondary"
                        >
                        New menu
                    </Button>
                </Box>              
        </Paper>
    );
}

export default FoodMenu;