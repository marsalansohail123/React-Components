import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const SMDatePicker = ({ onChange, value, label }) => {
    // const [isValue, setIsValue] = React.useState(dayjs('2014-08-18'));

    // const handleChange = (newValue) => {
    //     setIsValue(newValue);
    // };

    // console.log(value.$d)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3} sx={{ width: 190, m: 2 }}>
                <DesktopDatePicker
                    label={label}
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}

export default SMDatePicker;