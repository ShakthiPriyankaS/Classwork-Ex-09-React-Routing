import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from "./Home";
import Singers from './Singers';
import Albums from './Albums';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="singers" element={<Singers />} />
          <Route path="albums" element={<Albums />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

