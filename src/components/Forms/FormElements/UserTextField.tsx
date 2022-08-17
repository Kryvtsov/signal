import {ChangeEvent} from "react";

import {TextField} from "@mui/material";

type UserTextFieldProps = {
    label: string,
    name: string,
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    isError?: boolean,
}

const UserTextField = (props: UserTextFieldProps) => {
    const { label, name, changeHandler, isError = false } = props;
    return (
        <TextField
            label={label}
            name={name}
            onChange={changeHandler}
            variant={"outlined"}
            size={"small"}
            margin={"dense"}
            fullWidth
            error={isError}
            helperText={isError && `Please enter ${label}`}
        />
    );
}

export default UserTextField; 