import {Box, Typography,Paper,Button} from "@mui/material";
import FoodMenuItem from "./FoodMenuElements/FoodMenuItem";

const FoodMenu = (props: any) => {
    const { foodMenus, handleShowMenu } = props;
    return (
        <>
            <Paper elevation={1}
                   sx={{ padding: "10px"}}
            >
            {
                foodMenus.map((foodMenu: any, i: number) => {
                    const { values } = foodMenu;
                    return (
                <Paper elevation={1}
                        sx={{ padding: "20px", margin: "20px"}}
                        key={i}>
                    <Typography variant={"h4"} color="secondary.main">{values.name} food guide</Typography>
                    <Typography variant={"h5"} sx={{marginBottom:"10px"}}>Recomended Food Guide Servings per day</Typography>
                    {values.age && <Typography color="primary.light" >Age: {values.age}</Typography>}
                    {values.gender && <Typography color="primary.light" style={{marginBottom: "20px"}}>Gender: {values.gender}</Typography>}
                    <FoodMenuItem foodMenu={foodMenu} />        
                </Paper>)                                
               })
            }
            </Paper>
            <Box textAlign="right" mt={2} padding={1}>
            <Button 
                onClick={() => handleShowMenu(false)}
                variant={"contained"} 
                color="secondary"
                >
                New menu
            </Button>
            </Box>  
        </>      
    );
}

export default FoodMenu;