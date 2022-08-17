import {Paper,TableContainer, Table,TableHead, TableCell, TableRow, TableBody, Button} from "@mui/material";

const FamilyTable = (props: any) => {
    const {familyMembers} = props;

    return (
        <Paper elevation={2}
        >
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Age</b></TableCell>
                        <TableCell><b>gender</b></TableCell>
                        <TableCell align="right">Delete</TableCell>                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        familyMembers.map((member: any) => {
                            return(
                            <TableRow key={member.id}>
                                <TableCell component="th" scope="row">
                                        <span>{member.name}</span>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                        <span>{member.age}</span>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                        <span>{member.gender}</span>
                                </TableCell>
                                <TableCell align="right">
                                <Button 
                                    variant="contained"
                                    color="warning"
                                    onClick={() => props.deleteMember(member.id)}>
                                    Delete
                                </Button>
                                </TableCell>
                            </TableRow>)
                        })
                    }
                </TableBody>
                </Table>
            </TableContainer>
        </Paper>
        );
}

export default FamilyTable;