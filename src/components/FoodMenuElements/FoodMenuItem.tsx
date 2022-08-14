import {Paper,TableContainer, Table,TableHead, TableCell, TableRow, TableBody} from "@mui/material";

const FoodMenuItem = (props: any) => {
    const {foodMenu} = props.foodMenu;
    const { milkFood, vegitablesFood, grainFood, meatFood, foodInfo } = foodMenu;

    const infoItem = (name: string) => {
        return foodInfo[name].map((item:any, key: number) => {
            return <div key={key} style={{fontSize: '10px'}}>{item['directional-statement']}</div>
        })
    }
    const getFoodMenu = (data: any) => {
        return data.map((item:any, key: number) => {
            return (<span key={key} style={{fontSize: '10px'}}>
                        <b>{item.food}: </b>
                        <span style={{fontSize: '9px'}}>{item['srvg_sz']},</span><br/>
                    </span>)
        })
    }

    return (
        <Paper elevation={2}
        >
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>My Numbers</b></TableCell>
                        <TableCell align="right"><b>My Examples menu</b></TableCell>                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                                <h5>Vegetables and Fruit</h5>
                                <span>Servings: {vegitablesFood.servings}</span>
                                {infoItem('vegitablesFood')}
                        </TableCell>
                        <TableCell align="right">
                            {getFoodMenu(vegitablesFood.foods)}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                                <h5>Grain products</h5>
                                <span>Servings: {grainFood.servings}</span>
                                {infoItem('grainFood')}
                        </TableCell>
                        <TableCell align="right">
                            {getFoodMenu(grainFood.foods)}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                                <h5>Milk and alternatives</h5>
                                <span>Servings: {milkFood.servings}</span>
                                {infoItem('milkFood')}
                        </TableCell>
                        <TableCell align="right">
                            {getFoodMenu(vegitablesFood.foods)}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                                <h5>Meat and alternatives</h5>
                                <span>Servings: {meatFood.servings}</span>
                                {infoItem('meatFood')}
                        </TableCell>
                        <TableCell align="right">
                            {getFoodMenu(meatFood.foods)}
                        </TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        );
}

export default FoodMenuItem;