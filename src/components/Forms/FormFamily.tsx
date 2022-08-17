import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Box, Typography,Paper,Button, Grid} from "@mui/material";
import UserTextField from "./FormElements/UserTextField";
import UserDropDown from "./FormElements/UserDropDown";
import FamilyTable from "./FormElements/FamilyTable";
import { ages, gender } from "../../constants/form";
import { handleParse } from "../../utils/converter";
import { getMenu } from '../../utils/getMenu';

type Values = {
    name : string,
    gender : string,
    age: string,
    id?: number,
}
type Errors = {
    name : boolean,
    gender : boolean,
    age : boolean,
}

const FormFamily = (props: any) => {
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
    const [familyMenu, setFamilyMenu] = useState<Array<any>>([]);
    const [familyMembers, setFamilyMembers] = useState<Array<Values>>([]);
    const [showForm, setShowForm] = useState<boolean>(false);


    useEffect(() => {
        const getFamilyMenu = async () => {
            const foodData = await handleParse('foods-en_ONPP_rev');
            const servingsData = await handleParse('servings_per_day-en_ONPP');
            const foodInfoData = await handleParse('fg_directional_satements-en_ONPP');
            const foodMenu = getMenu(values, {foodData, servingsData, foodInfoData});
            setFamilyMenu([...familyMenu, {foodMenu, value: {name: 'Family', age: null, gender: null}}])
        }
        getFamilyMenu();
    }, [])

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

    const addFamilyMember = (event : FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        validateData(values);
        if (formIsValid()) {
            // not good practice, just for not to install additioanal library generator
            const id = new Date().getTime();
            setFamilyMembers([...familyMembers, {...values, id}])
            setShowForm(false);
            setValues({name: "", age: "", gender: ""})
        } else {
            setIsSubmitDisabled(true);
        }
    }

    const handleDeleteMember = (id: number) => {
        const familyMembersNew = familyMembers.filter((item:any) => item.id !== id)
        setFamilyMembers(familyMembersNew);
    }

    const formTitle = !showForm 
        ? 'You can add your family members or just submit'
        : 'Please fill in form'

    return (
        <Paper elevation={3}
        sx={{ padding: "1rem", minWidth: "40%"}}>
            <Typography variant={"h5"} sx={{ marginBottom: "20px"}}>{formTitle}</Typography>
            {!!familyMembers.length && !showForm && <FamilyTable familyMembers={familyMembers} deleteMember={handleDeleteMember}/>}
            {showForm && <form onSubmit={(e) => addFamilyMember(e)}>
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
                        onClick={() => setShowForm(false)}
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
                        Add member
                    </Button>
                </Box>              
            </form>}       
            {!showForm && <Box textAlign="right" mt={2} padding={1}>
                    <Button 
                        onClick={() => props.handleShowMenu(false)}
                        variant={"contained"} 
                        color="inherit">
                        Cancel
                    </Button>
                    <Button 
                        variant={"contained"} 
                        color="primary"
                        onClick={() => setShowForm(true)}
                        style={{margin: '0 20px'}} >
                        Add family member
                    </Button>
                    <Button 
                        type={"submit"} 
                        variant={"contained"} 
                        color="secondary"
                        >
                        Submit
                    </Button>
                </Box> }       
        </Paper>
    );
}

export default FormFamily;