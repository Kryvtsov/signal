import {ChangeEvent, FormEvent, useState} from "react";
import {Box, Typography,Paper,Button, Grid} from "@mui/material";
import UserTextField from "./FormElements/UserTextField";
import UserDropDown from "./FormElements/UserDropDown";
import { ages, gender } from "../../constants/form";
import { handleParse } from "../../utils/converter";
import { getMenu } from '../../utils/getMenu';

type Values = {
    name : string,
    gender : string,
    age : string,
}
type Errors = {
    name : boolean,
    gender : boolean,
    age : boolean,
}

const Form = (props: any) => {
    const [values, setValues] = useState<Values>({
        name : "",
        gender : "",
        age : "",
    });
    const [errors, setErrors] = useState<Errors>({
        name: false,
        gender: false,
        age: false
    })
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

    const validateData = (values: any) => {
        let temp: any = { ...errors };
        if ("name" in values)
            temp.name = !values.name;
        if ("age" in values)
            temp.age = !values.age;
        if ("gender" in values)
            temp.gender = !values.gender;
        setErrors({...temp})
    }

    const formIsValid = (fieldValues = values) => {
        const isValid =
            fieldValues.name &&
            fieldValues.age &&
            fieldValues.gender &&
            Object.values(errors).every(x => x === false);
    
        return isValid;
      };

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setIsSubmitDisabled(false);
            setErrors({...errors, [event.target.name]: false})
        }
        setValues({...values, [event.target.name]: event.target.value});
    }

    const handleSubmit = async (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateData(values);
        if (formIsValid()) {
            const foodData = await handleParse('foods-en_ONPP_rev');
            const servingsData = await handleParse('servings_per_day-en_ONPP');
            const foodInfoData = await handleParse('fg_directional_satements-en_ONPP');
            const foodMenu = getMenu(values, {foodData, servingsData, foodInfoData});
            props.submitFoodData({ foodMenu, values });
            props.handleShowMenu(true);
        } else {
            setIsSubmitDisabled(true);
        }
    }

    return (
        <Paper elevation={3}
        sx={{ padding: "1rem"}}>
            <Typography variant={"h5"}>Please fill in form</Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <UserTextField changeHandler={handleChange} label={"Name"} name={"name"} isError={errors.name} />
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ width: 100 }}>
                        <UserDropDown 
                            label={"Age"} 
                            name={"age"} 
                            changeHandler={handleChange} 
                            values={ages} 
                            currentValue={values.age}
                            isError={errors.age} />
                    </Grid>
                    <Grid item xs={12} sm={12} style={{ width: 100 }}>
                        <UserDropDown 
                            label={"Gender"} 
                            name={"gender"} 
                            changeHandler={handleChange} 
                            values={gender} 
                            currentValue={values.gender}
                            isError={errors.gender} />
                    </Grid>
                </Grid>
                <Box textAlign="right" mt={2} padding={1}>
                    <Button 
                        onClick={() => props.handleShowMenu(false)}
                        variant={"contained"} 
                        color="inherit"
                        style={{marginRight: '20px'}} >
                        Cancel
                    </Button>
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

export default Form;