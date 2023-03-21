import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Reviews from "../components/Pages/Reviews/Reviews";
import Prices from "../components/Pages/Prices/Prices";
import About from "../components/Pages/About/About";
import Contacts from "../components/Pages/Contacts/Contacts";

export default (
    <Routes>
        <Route path={'/'} element={<About />} />
        <Route path={'/reviews'} element={<Reviews />} />
        <Route path={'/prices'} element={<Prices/>}  />
        <Route path={'/contacts'} element={<Contacts />}  />
    </Routes>
);