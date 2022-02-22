import React from 'react';
import './App.css';
import AllCommentsPage from './components/AllCommentsPage';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './HeaderComponent/Header'
import About from './components/About';
import AddProductPage from './components/AddProductPage';
import CommentDetailsPage from './components/CommentDetailsPage';

export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="products" element={<AllCommentsPage />} />
        <Route path="/addproducts" element={<AddProductPage />} />
        <Route path="/products/:ProductName" element={<CommentDetailsPage />}/>
      </Routes>
    </BrowserRouter>
    );
  }
}
