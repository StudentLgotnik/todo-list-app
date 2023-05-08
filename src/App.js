import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MAIN, CREATE_TODO, EDIT_TODO, VIEW_TODO } from './constants/routes';
import {Main} from "./components/Main/Main";
import {CreateTodo} from "./components/Create/CreateTodo";
import {EditTodo} from "./components/Edit/EditTodo";

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN} element={ <Main/> }/>
        <Route path={CREATE_TODO} element={ <CreateTodo/> }/>
        <Route path={EDIT_TODO + ':id'} element={ <EditTodo/> }/>
        <Route path={VIEW_TODO + 'id'} />
      </Routes>
    </BrowserRouter>
);

export default App;
