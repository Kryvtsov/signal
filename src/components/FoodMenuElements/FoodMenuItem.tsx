import { useState} from "react";
import {Box, Typography,Paper,Button, Grid} from "@mui/material";

type Values = {
    name : string,
    gender : string,
    age : string,
}

const FoodMenuItem = () => {
    const [values, setValues] = useState<Values>({
        name : "",
        gender : "",
        age : "",
    });


    return (
        <Paper elevation={2}
        sx={{ padding: "2rem"}}>
                <Grid container spacing={1}  padding={1}>
                    <Grid container spacing={2} margin={1} >
                        <Grid item xs={6} sm={6}>
                            <Paper>item</Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} padding={10}>
                            <Paper>item</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} margin={1}>
                        <Grid item xs={6} sm={6}>
                            <Paper>item</Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Paper>item</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} margin={1}>
                        <Grid item xs={6} sm={6}>
                            <Paper>item</Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Paper>item</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} margin={1}>
                        <Grid item xs={6} sm={6}>
                            <Paper>item</Paper>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <Paper>item</Paper>
                        </Grid>
                    </Grid>
                </Grid>
        </Paper>
    );
}

export default FoodMenuItem;