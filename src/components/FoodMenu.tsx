import {Box, Typography,Paper,Button} from "@mui/material";
import FoodMenuItem from "./FoodMenuElements/FoodMenuItem";

const FoodMenu = (props: any) => {
    const { foodMenu, handleShowMenu } = props;
    const { values } = foodMenu;
    return (
        <Paper elevation={1}
        sx={{ padding: "20px"}}>
            <Typography variant={"h3"} color="secondary.main">{values.name} food guide</Typography>
            <Typography variant={"h5"} >My recomended Food Guide Servings per day</Typography>
            <Typography color="primary.light" >Age: {values.age}</Typography>
            <Typography color="primary.light" style={{marginBottom: "20px"}}>Gender: {values.gender}</Typography>
                <FoodMenuItem foodMenu={foodMenu} />
                <Box textAlign="right" mt={2} padding={1}>
                    <Button 
                        onClick={() => handleShowMenu(false)}
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