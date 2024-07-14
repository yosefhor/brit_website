import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import { AboutMe } from './components/aboutMe';
import AboutBritMilah from './components/aboutBritMilah';
import Costs from './components/costs';
import Contact from './components/contact';
import Home from './components/home';

export default function AppRoute() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/aboutMe' element={<AboutMe/>}/>
                    <Route path='/aboutBritMilah' element={<AboutBritMilah/>}/>
                    <Route path='/costs' element={<Costs/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
