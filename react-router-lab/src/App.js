// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonList from './components/PersonList';
import PersonDetail from './components/PersonDetail';
import PersonAdd from './components/PersonAdd';
import PersonEdit from './components/PersonEdit';
// import Notification from './components/Notification';
//  import Notfound from './components/NotFound';
// import DeletePerson from './components/DeletePerson';

import './App.css'; // Global styles
// import NotFound from './components/NotFound';


const App = () => {
    return (
        <Router>
            <div className="box-container">
                <Routes>
                    <Route path="/" element={<PersonList />} />
                    <Route path="/add" element={<PersonAdd />} />
                    <Route path="/edit/:id" element={<PersonEdit />} />
                    <Route path="/detail/:id" element={<PersonDetail />} />
                    {/* <Route path="/notification" element={<Notification/>} />
                    <Route path="/notfound" element={<NotFound />} /> */}
                    {/* <Route path="/delete" element={<DeletePerson />} /> */}

                   </Routes>
                     </div>
        </Router>
    );
};

export default App;