import React from "react";
import { Routes ,Route } from 'react-router-dom';
import { Ceilings } from "../components/Pages/Ceilings/Ceilings";
import { Light } from "../components/Pages/Light/Light";
import About from "../components/Pages/About/About";
import Contacts from "../components/Pages/Contacts/Contacts";

export default (
    <Routes>
        <Route path={'/'} element={<About />} />
        <Route path={'/ceilings'} element={<Ceilings />} />
        <Route path={'/lighting'} element={<Light/>}  />
        <Route path={'/contacts'} element={<Contacts />}  />
    </Routes>
);