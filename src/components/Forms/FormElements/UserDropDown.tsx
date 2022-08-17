import {ChangeEvent} from "react";
import {MenuItem, TextField} from "@mui/material";

type UserDropDownProps = {
    label: string,
    name: string,
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    values: Array<{value : string,label : string}>,
    currentValue: string,
    isError?: boolean
}

const UserDropDown = (props: UserDropDownProps) => {
    const { label, name, changeHandler, currentValue, values, isError = false } = props;   
    return (
        <TextField
            select 
            label={label}
            name={name}
            onChange={changeHandler}
            value={currentValue}
            variant={"outlined"}
            size={"small"}
            margin={"dense"}
            fullWidth
            error={isError}
            helperText={isError && `Please select ${label}`}
        >
            {values.map(option => (
                <MenuItem key={option.value} value={option.value} style={{width:'100%'}}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

export default UserDropDown;