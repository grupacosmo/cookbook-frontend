import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginView from "./views/LoginView/LoginView";
import RegisterView from "./views/RegisterView/RegisterView";
import AddRecipeView from "./views/AddRecipeView/AddRecipeView";
import RecipesView from "./views/RecipesView/RecipesView";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/login" element={<LoginView/>}/>
            <Route path="/register" element={<RegisterView/>}/>
            <Route path="/add-recipe" element={<AddRecipeView/>}/>
            <Route path="/recipes" element={<RecipesView/>}/>
        </Routes>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
