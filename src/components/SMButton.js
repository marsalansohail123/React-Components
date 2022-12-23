import { Button } from '@mui/material';
import React from 'react'

const SMButton = (props) => {
    const { onClick, disabled, variant, label } = props;
    return (
        <>
            <Button
                onClick={onClick}
                disabled={disabled}
                variant={variant ?? "contained"}
            >
                {label}
            </Button>
        </>
    )
}

export default SMButton;