import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NeedAuth from './Components/needAuth';
import App from './App'
import Orders from "./page/orders";
import Products from "./page/products";
import Dashboard from "./page/dashboard";
import Customers from "./page/customers";
import Login from "./page/login";
import LogOut from "./page/logout";
import SignIn from "./page/signIn";
import Nav from "./nav";
import DefaultCard from "./page/defaultCard";


export default function Router({}){

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(false);

  return(
      <BrowserRouter>
        <Nav logged={logged}/>
        <Routes>
          <Route path="/" element={<App user={user} logged={logged} />} />
          <Route path="/orders" element={
            <NeedAuth logged={logged} children={<Orders/>}></NeedAuth>
          }/>
          <Route path="/products" element={
            <NeedAuth logged={logged} children={<Products />}></NeedAuth>
          } />
          <Route path="/dashboard" element={

            <NeedAuth logged={logged} children={<Dashboard />}></NeedAuth>

          } />
          <Route path="/customers" element={
            <NeedAuth logged={logged} children={<Customers />}></NeedAuth>
          } />
          <Route path="/login" element={<Login setUser={setUser} setLogged={setLogged}/>} />
          <Route path="/signIn" element={<SignIn setLogged={setLogged}/>} />
          <Route path="/logout" element={<LogOut setLogged={setLogged} setUser={setUser} logged={logged}/>} />

        </Routes>
      </BrowserRouter>
  )
}
