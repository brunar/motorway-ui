import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value, error, errorMsg, refInput, onChange } = props

    return (
        <TextField
            inputRef={refInput}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            error={error}
            helperText={errorMsg}
            fullWidth
            size="small"
            variant="outlined"
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}