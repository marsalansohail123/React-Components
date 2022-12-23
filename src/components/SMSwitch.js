import React from 'react'
import Switch from '@mui/material/Switch';

const SMSwitch = (props) => {

    const { checked, size, label, disabled, onChange, color, onClick } = props;

    return (
        <div>
            <Switch checked={checked} onClick={onClick} color={color} size={size} label={label} disabled={disabled} onChange={onChange} />
        </div>
    )
}

export default SMSwitch;

// Perform Switch

// const [isPaid, setisPaid] = useState(false)
//     const [userObj, setuserObj] = useState()
//     const handleSwitch = () => {

//         setisPaid(!isPaid)
//         setuserObj({
//             ...userObj,
//             name: 'Arsalan',
//             paid: isPaid
//         })

//     }
//     console.log(userObj)

{/* <SMSwitch label={'sssss'} color='warning' onClick={handleSwitch} checked={isPaid} onChange={e => setuserObj({
    ...userObj, name: 'Arsalan',
    paid: e.target.checked
})} /> */}