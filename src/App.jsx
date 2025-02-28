import React, { Children } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import './App.css'

const App = () => {

  return (
    <Router>
      <div>
        <h1 style={{ textAlign: "center" }}>№81 group name</h1>
        <Routes>
          <Route path="/add" element={<AddBook />} />
          <Route path="/" element={<BookList />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

