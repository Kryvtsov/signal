import {ChangeEvent, FormEvent, useState} from "react";
import {Box, Typography,Paper,Button, FormControl, RadioGroup, FormControlLabel, Radio} from "@mui/material";

const FormFirstStep = (props: any) => {
    const [value, setValue] = useState<string>('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        setIsSubmitDisabled(false);
        setValue(event.target.value);
    }

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.handleShowMenu(false, value);
    }

    return (
        <Paper elevation={3}
        sx={{ padding: "1rem"}}>
            <Typography variant={"h5"} sx={{ marginBottom: "1rem"}}>Please choose type of menu:</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                <FormControl>
                    <RadioGroup
                        row
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="user" control={<Radio />} label="User daily Menu" />
                        <FormControlLabel value="family" control={<Radio />} label="Family daily Menu" />
                    </RadioGroup>
                </FormControl>
                <Box textAlign="right" mt={2} padding={1}>
                    <Button 
                        type={"submit"} 
                        variant={"contained"} 
                        color="secondary"
                        disabled={isSubmitDisabled}>
                        Submit
                    </Button>
                </Box>              
            </form>
        </Paper>
    );
}

export default FormFirstStep;