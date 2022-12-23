import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SMSelect({ datasource, label, value, onChange, required, displayField, valueField, nodeName }) {

    // ===== Method of getting values ===== 

    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    // console.log(age)

    // ===== Method of getting data from firebase ===== 
    // If you're working with database uncomment this code 

    // const [dtSource, setDtSource] = useState(datasource);

    // let getNodeData = () => {
    //     getData(nodeName)
    //         .then((res) => {
    //             setDtSource(res);
    //         })
    //         .catch((err) => { });
    // };

    // useEffect(() => {
    //     getNodeData();
    // }, []);

    return (
        <Box sx={{ minWidth: 120, width: 150, margin: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={onChange}
                    required={required}
                >

                    {/* ternary method */}

                    {/* {datasource && datasource.length > 0
                        ? datasource.map((x, i) => (
                            <MenuItem key={i} value={x.valueField}>
                                {x.displayField}
                            </MenuItem>
                        ))
                        : <MenuItem>
                            None
                        </MenuItem>} */}

                    {/* short circuit syntax */}

                    {datasource && datasource.length > 0
                        && datasource.map((x, i) => (
                            <MenuItem key={i} value={x.valueField}>
                                {x.displayField}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box >
    );
}

// Perform

{/* <SMSelect value={age} onChange={handleChange} label={'Label'} datasource={[
    {
        valueField: '20',
        displayField: "Twenty"
    }
]} /> */}