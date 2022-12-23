import { TextField } from '@mui/material';
import React from 'react'

const SMInput = (props) => {
    const { fullWidth, label, onChange, type, required, value, disabled, variant } = props;
    return (
        <TextField
            fullWidth={fullWidth ?? true}
            label={label}
            onChange={onChange}
            type={type ?? "text"}
            required={required}
            value={value}
            disabled={disabled}
            variant={variant ?? "standard"}
        />
    )
}

export default SMInput;