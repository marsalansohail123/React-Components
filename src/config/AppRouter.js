import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersistentDrawerLeft from '../components/Drawer/Drawer';
import SMButton from '../components/SMButton';
import SMDatePicker from '../components/SMDatePicker';
import SMInput from '../components/SMInput';
import SMSelect from '../components/SMSelect';
import SMSwitch from '../components/SMSwitch';
import SMTable from '../components/SMTable';
import Home from '../screens/Home';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='drawer/*' element={<PersistentDrawerLeft />} />
                <Route path='/button' element={<SMButton />} />
                <Route path='/input' element={<SMInput />} />
                <Route path='/table' element={<SMTable />} />
                <Route path='/switch' element={<SMSwitch />} />
                <Route path='/select' element={<SMSelect />} />
                <Route path='/datepicker' element={<SMDatePicker />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;